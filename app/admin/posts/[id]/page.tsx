import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { EditPostForm } from "./edit-post-form"

type PageProps = {
    params: Promise<{
        id: string
    }>
}

export default async function EditPostPage({ params }: PageProps) {
    const { id } = await params

    const post = await prisma.post.findUnique({
        where: { id },
    })

    if (!post) {
        notFound()
    }

    return (
        <div className="mx-auto max-w-4xl p-6">
            <EditPostForm post={post} />
        </div>
    )
}