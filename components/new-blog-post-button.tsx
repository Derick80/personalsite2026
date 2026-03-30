"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";

export function NewBlogPostButton() {
  const router = useRouter();

  return (
    <Button
      id="new-blog-post-button"
      onClick={() => router.push("/blog/new")}
      className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02]"
      size="default"
    >
      <PenLine className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]" />
      <span>New Blog Post</span>
    </Button>
  );
}
