"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { uploadImageToCloudinary, saveImageToDatabase } from "./images"
import { revalidatePath } from "next/cache"

export async function uploadUserImage(formData: FormData) {
    const session = await auth()
    if (!session?.user?.id) {
        return { error: "You must be logged in to upload images." }
    }

    const userId = session.user.id

    // Check how many images the user currently has
    const count = await prisma.userImage.count({
        where: { userId }
    })

    if (count >= 4) {
        return { error: "Maximum limit reached. You can only have up to 4 images." }
    }

    const file = formData.get("image") as File
    if (!file || !(file instanceof File)) {
        return { error: "No valid image file provided." }
    }

    if (!file.type.startsWith("image/")) {
        return { error: "Only image files are allowed." }
    }

    try {
        const uploadResult = await uploadImageToCloudinary(file)

        await saveImageToDatabase(
            userId,
            uploadResult.secureUrl,
            uploadResult.publicId,
            uploadResult.width,
            uploadResult.height
        )

        revalidatePath("/account")
        return { success: true }
    } catch (e: any) {
        console.error("Upload error:", e)
        return { error: "Failed to upload image. Please try again." }
    }
}
