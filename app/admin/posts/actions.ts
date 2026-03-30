'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import z from "zod"
import { id } from "zod/v4/locales"

function slugify(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
}
async function getUniqueSlug(baseTitle: string, postId?: string): Promise<string> {
    const base = slugify(baseTitle) || "untitled-post"

    let candidate = base
    let counter = 1

    while (true) {
        const existing = await prisma.post.findFirst({
            where: {
                slug: candidate,
                ...(postId ? { NOT: { id: postId } } : {}),
            },
            select: { id: true },
        })

        if (!existing) return candidate

        counter += 1
        candidate = `${base}-${counter}`
    }
}
export async function createPost() {
    // create a unique slug from the initial title

    const slug = slugify("Untitled post")
    const post = await prisma.post.create({
        data: {
            title: "Untitled post",
            slug,
            content: "",
            published: false,
            publishedAt: null,
        },

    })
    revalidatePath("/admin/posts")
    redirect(`/admin/posts/${post.id}`)
}


const postSchema = z.object({
    postId: z.string().min(1, "Post ID is required"),
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
})

export async function updatePost(prevState: any, formData: FormData) {
    const validatedData = postSchema.safeParse({
        postId: formData.get("postId"),
        title: formData.get("title"),
        content: formData.get("content"),
    })
    if (!validatedData.success) {
        return { errors: validatedData.error.flatten().fieldErrors }
    }
    const { postId, ...data } = validatedData.data
    const title = data.title.trim() || "Untitled post"
    const slug = await getUniqueSlug(title, postId)
    const post = await prisma.post.update({
        where: {
            id: postId
        },
        data: { ...data, slug },
    })
    revalidatePath(`/admin/posts/${post.id}`)
    return post
}

const publishPostSchema = z.object({
    id: z.string().min(1, "Post ID is required"),
})

export async function publishPostAction(preState: any, formData: FormData) {
    const validatedData = publishPostSchema.safeParse({
        id: formData.get("postId"),
    })
    if (!validatedData.success) {
        return { errors: validatedData.error.flatten().fieldErrors }
    }
    const { id } = validatedData.data


    const existing = await prisma.post.findUnique({
        where: { id },
        select: { title: true },
    })

    if (!existing) {
        throw new Error("Post not found.")
    }

    const title = existing.title.trim() || "Untitled post"
    const slug = await getUniqueSlug(title, id)

    await prisma.post.update({
        where: { id },
        data: {
            title,
            slug,
            published: true,
            publishedAt: new Date(),
        },
    })

    revalidatePath("/admin/posts")
    revalidatePath(`/admin/posts/${id}`)
}