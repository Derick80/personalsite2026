
"use client"

import { useTransition } from "react"
import { CldImage } from "next-cloudinary"
import { deleteImage, favoriteImage } from "./images";
import CustomButton from "./custom-button";

interface UserImage {
    id: string;
    cloudinaryId: string;
    width: number;
    height: number;
    userAvatar: boolean;
}
const ImageShelf = (
    { images }: { images: UserImage[] }
) => {
    const [isPending, startTransition] = useTransition();

    const handleDeleteImage = (imageId: string) => {
        startTransition(async () => {
            await deleteImage(imageId)
        })
    }

    const handleFavoriteImage = (imageId: string) => {
        startTransition(async () => {
            await favoriteImage(imageId)
        })
    }
    const displayImages = images.slice(0, 4);
    const placeholdersCount = Math.max(0, 4 - displayImages.length);

    return (
        <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {displayImages.map((image) => (
                <div key={image.cloudinaryId} className="aspect-square relative overflow-hidden rounded-xl border border-border shadow-sm group">
                    <CldImage
                        src={image.cloudinaryId}
                        alt={image.cloudinaryId}
                        width={image.width}
                        height={image.height}
                        className={`object-cover w-full h-full transition-all duration-500 ${isPending ? 'opacity-50 grayscale' : 'group-hover:scale-110'}`}
                    />
                    {!isPending && (
                        <>
                            <CustomButton
                                isAvatar={image.userAvatar}
                                onClick={() => handleFavoriteImage(image.id)}
                                assignment="favorite"
                            />
                            <CustomButton
                                isAvatar={image.userAvatar}
                                assignment="delete"
                                onClick={() => handleDeleteImage(image.id)}
                            />
                        </>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                </div>
            ))}
            {Array.from({ length: placeholdersCount }).map((_, index) => (
                <div
                    key={`placeholder-${index}`}
                    className="aspect-square flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 transition-all duration-300 hover:bg-muted/50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground/40 mb-2 transition-transform duration-300 hover:scale-110"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span className="text-xs text-muted-foreground/60 font-medium">Image Slot</span>
                </div>
            ))}
        </div>
    )
}

export default ImageShelf