'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cloudinary } from "./cloudinary"


interface CloudinaryUploadResult {
    url: string
    secureUrl: string
    publicId: string
    width: number
    height: number
    format: string
    bytes: number
}

export async function uploadImageToCloudinary(
    file: File
): Promise<CloudinaryUploadResult> {
    if (!file.type.startsWith("image/")) {
        throw new Error("Invalid file type. Only images are allowed.")
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    resource_type: "image",
                },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )
            .end(buffer)
    })

    return {
        url: uploadResult.url,
        publicId: uploadResult.public_id,
        secureUrl: uploadResult.secure_url,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
        bytes: uploadResult.bytes,
    }
}


export async function saveImageToDatabase(
    userId: string,
    imageUrl: string,
    cloudinaryId: string,
    width: number,
    height: number,
    isProfileImage: boolean = false
) {
    return await prisma.userImage.create({
        data: {
            userId,
            imageUrl,
            cloudinaryId,
            width,
            height,
            userAvatar: isProfileImage,
        },
    })
}

export async function deleteImageFromDatabase(id: string) {
    return await prisma.userImage.delete({
        where: {
            id,
        },
    })
}

export async function deleteImageFromCloudinary(publicId: string) {
    return await cloudinary.uploader.destroy(publicId)
}


export async function deleteImage(id: string) {
    const image = await prisma.userImage.findUnique({
        where: {
            id,
        },
    })
    if (!image) {
        throw new Error("Image not found")
    }
    await deleteImageFromCloudinary(image.cloudinaryId)
    await deleteImageFromDatabase(id)
    revalidatePath("/account")
}

export async function favoriteImage(id: string) {
    const image = await prisma.userImage.findUnique({
        where: {
            id,
        },
    })
    if (!image) {
        throw new Error("Image not found")
    }
    // there can only be one favorite image
    await prisma.userImage.updateMany({
        where: {
            userAvatar: true,
        },
        data: {
            userAvatar: false,
        },
    })
    await prisma.userImage.update({
        where: {
            id,
        },
        data: {
            userAvatar: true,
        },
    })

    // then update the user image to use the new favorite image
    await prisma.user.update({
        where: {
            id: image.userId,
        },
        data: {
            image: image.imageUrl,
        },
    })
    revalidatePath("/account")
    return image
}
