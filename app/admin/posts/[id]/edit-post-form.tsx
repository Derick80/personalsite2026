"use client"

import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Post } from "@/lib/generated/client/client"
import { publishPostAction, updatePost } from "../actions"

type EditPostFormProps = {
    post: Post
}

export function EditPostForm({ post }: EditPostFormProps) {
    const [, saveAction, savePending] = useActionState(updatePost, null)

    const [, publishAction, publishPending] = useActionState(publishPostAction, null)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Edit post
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {post.published ? "Published" : "Draft"}
                    </p>
                </div>

                <div className="flex gap-2">
                    <form action={saveAction}>
                        <input type="hidden" name="postId" value={post.id} />
                        <input type="hidden" name="title" value={post.title} />

                        <input type="hidden" name="content" value={post.content ?? ""} />

                        <Button type="submit" variant="secondary" disabled={savePending}>
                            {savePending ? "Saving..." : "Save draft"}
                        </Button>
                    </form>
                </div>
            </div>

            <form action={saveAction} className="space-y-6">
                <input type="hidden" name="postId" value={post.id} />

                <Card className="rounded-2xl">
                    <CardHeader>
                        <CardTitle>Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" defaultValue={post.title} />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                defaultValue={post.content ?? ""}
                                rows={18}
                                className="min-h-[420px]"
                            />
                        </div>
                    </CardContent>
                </Card>


                <div className="flex gap-2">
                    <Button type="submit" disabled={savePending}>
                        {savePending ? "Saving..." : "Save draft"}
                    </Button>
                </div>
            </form>

            <form action={publishAction}>
                <input type="hidden" name="postId" value={post.id} />
                <Button type="submit" disabled={publishPending}>
                    {publishPending ? "Publishing..." : "Publish"}
                </Button>
            </form>
        </div>
    )
}