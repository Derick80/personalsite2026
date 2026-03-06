import { Button } from "@/components/ui/button"
import { Trash2, Heart } from "lucide-react"

const CustomButton = ({
    isAvatar,
    assignment,
    onClick,
}: {
    isAvatar: boolean,
    assignment: "favorite" | "delete",
    onClick: () => void
}) => {
    return (
        <Button
            type="submit"
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            variant="outline"
            className={`rounded-full z-10 transition-transform hover:scale-110 shadow-sm ${assignment === "favorite"
                ? "absolute top-2 right-2 bg-background/80 hover:text-rose-500 hover:bg-background/90"
                : "absolute bottom-2 right-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground border-destructive/20"
                }`}
            size="icon"
        >
            {assignment === "delete" ? (
                <Trash2 className="h-4 w-4" />
            ) : (
                assignment === "favorite" ? (

                    isAvatar ? (
                        <Heart
                            className="h-4 w-4 fill-rose-500" />
                    ) : (
                        <Heart className="h-4 w-4" />
                    )
                ) : null
            )}
        </Button>
    )
}

export default CustomButton