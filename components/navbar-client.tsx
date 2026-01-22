"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, User, LogOut, FileText, LayoutDashboard } from "lucide-react"
import { handleSignIn, handleSignOut } from "@/app/actions/auth-actions"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface NavbarClientProps {
    session: any
}

export function NavbarClient({ session }: NavbarClientProps) {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Publications", href: "#publications" },
        { name: "Conferences", href: "#conferences" },
        { name: "Contact", href: "#contact" },
    ]

    const UserAvatar = () => (
        <Avatar className="h-9 w-9 border border-slate-700 cursor-pointer hover:ring-2 hover:ring-teal-500/50 transition-all">
            <AvatarImage src={session?.user?.image} alt={session?.user?.email || "User"} />
            <AvatarFallback className="bg-slate-800 text-slate-300">
                {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
        </Avatar>
    )

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Derick Hoskinson
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">

                    {/* Desktop User Menu */}
                    <div className="hidden md:block">
                        {session ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div><UserAvatar /></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 bg-slate-950 border-slate-800 text-slate-200">
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none text-slate-100">My Account</p>
                                            <p className="text-xs leading-none text-slate-500 truncate">{session.user?.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-slate-800" />
                                    <DropdownMenuItem className="focus:bg-slate-900 focus:text-teal-400 cursor-pointer">
                                        <FileText className="mr-2 h-4 w-4" />
                                        <span>Blog</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-slate-900 focus:text-teal-400 cursor-pointer">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>Personal Page</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-800" />
                                    <DropdownMenuItem
                                        className="text-red-400 focus:text-red-300 focus:bg-red-950/20 cursor-pointer"
                                        onClick={() => handleSignOut()}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <form action={handleSignIn}>
                                <button className="px-5 py-2 text-sm font-medium text-white bg-teal-600/10 hover:bg-teal-600/20 border border-teal-500/20 rounded-full transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                    Sign In
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-slate-950 border-slate-800 text-slate-200 sm:w-[350px]">
                                <SheetHeader className="text-left mb-6">
                                    <SheetTitle className="text-white">Menu</SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        {links.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg font-medium text-slate-400 hover:text-teal-400 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <Separator className="bg-slate-800" />

                                    {session ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 px-2">
                                                <UserAvatar />
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-200">My Account</span>
                                                    <span className="text-xs text-slate-500 truncate max-w-[180px]">{session.user?.email}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start text-slate-400 hover:text-teal-400 hover:bg-slate-900"
                                                    disabled
                                                >
                                                    <FileText className="mr-2 h-4 w-4" />
                                                    Blog (Coming Soon)
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start text-slate-400 hover:text-teal-400 hover:bg-slate-900"
                                                    disabled
                                                >
                                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                                    Personal Page
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="justify-start text-red-400 hover:text-red-300 hover:bg-red-950/20"
                                                    onClick={() => handleSignOut()}
                                                >
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    Sign Out
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <form action={handleSignIn}>
                                            <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white">
                                                Sign In
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </nav>
    )
}
