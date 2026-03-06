"use client"

import { useState, useTransition, useRef } from "react"
import { uploadUserImage } from "./image-uploader-actions"

const ImageUploader = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setError(null)
        const formData = new FormData()
        formData.append("image", file)

        startTransition(async () => {
            const result = await uploadUserImage(formData)
            if (result?.error) {
                setError(result.error)
            }
            if (fileInputRef.current) {
                fileInputRef.current.value = ""
            }
        })
    }

    return (
        <div className="mt-8 flex flex-col items-center">
            <div className="w-full max-w-md p-6 border-2 border-dashed border-border rounded-xl bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center relative overflow-hidden transition-colors hover:bg-muted/30">

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={isPending}
                    ref={fileInputRef}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />

                <div className="flex flex-col items-center justify-center text-center space-y-2 pointer-events-none">
                    <div className={`p-3 rounded-full ${isPending ? 'bg-primary/20 animate-pulse' : 'bg-primary/10'}`}>
                        {isPending ? (
                            <svg className="w-6 h-6 text-primary animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" x2="12" y1="3" y2="15" />
                            </svg>
                        )}
                    </div>
                    <div>
                        <p className="font-medium text-sm">
                            {isPending ? "Uploading image..." : "Click or drag image to upload"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Maximum 4 images allowed per user
                        </p>
                    </div>
                </div>
            </div>

            {error && (
                <div className="mt-4 px-4 py-3 rounded-md bg-destructive/15 text-destructive text-sm font-medium w-full max-w-md text-center">
                    {error}
                </div>
            )}
        </div>
    )
}

export default ImageUploader
