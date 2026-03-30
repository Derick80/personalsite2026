import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { createPost } from "./actions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default async function AdminPostsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { updatedAt: "desc" },
        select: {
            id: true,
            title: true,
            slug: true,
            published: true,
            updatedAt: true,
        },
    })

    return (
        <div className="mx-auto max-w-5xl space-y-6 p-6 mt-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
                    <p className="text-sm text-muted-foreground">
                        Create, edit, and publish blog posts.
                    </p>
                </div>

                <form action={createPost}>
                    <Button type="submit">New post</Button>
                </form>
            </div>

            <Card className="rounded-2xl">
                <CardHeader>
                    <CardTitle>All posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {posts.length === 0 ? (
                        <p className="text-sm text-muted-foreground">
                            No posts yet.
                        </p>
                    ) : (
                        posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/admin/posts/${post.id}`}
                                className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-muted/50"
                            >
                                <div className="space-y-1">
                                    <p className="font-medium">{post.title}</p>
                                    <p className="text-sm text-muted-foreground">
                                        /blog/{post.slug}
                                    </p>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {post.published ? "Published" : "Draft"}
                                </div>
                            </Link>
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    )
}