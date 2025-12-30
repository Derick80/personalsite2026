"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { handleSignIn, handleSignOut } from "@/app/actions/auth-actions"

interface NavbarClientProps {
    session: any // Using any loosely here to avoid complex typing for now, or use Session from next-auth
}

export function NavbarClient({ session }: NavbarClientProps) {
    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Derick Hoskinson
                </Link>

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

                <div className="flex items-center gap-4">
                    {session ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400 hidden sm:block">
                                {session.user?.email}
                            </span>
                            <form action={handleSignOut}>
                                <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-full transition-colors flex items-center gap-2">
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    ) : (
                        <form action={handleSignIn}>
                            <button className="px-5 py-2 text-sm font-medium text-white bg-teal-600/10 hover:bg-teal-600/20 border border-teal-500/20 rounded-full transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                Sign In
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}
