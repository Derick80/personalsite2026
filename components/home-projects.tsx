"use client"

import { motion } from "framer-motion"
import { Bot, Gamepad2 } from "lucide-react"
import Link from "next/link"

const homeProjects = [
    {
        title: "Arkham Horror LCG Chat",
        type: "Interactive Tool",
        description: "An AI-powered chat interface for the Arkham Horror Living Card Game. Discuss rules, strategies, and lore with a specialized assistant.",
        icon: Bot,
        tech: ["Next.js", "AI", "Tailwind CSS"],
        link: "/#arkham-chat" // Assuming we can link back to the chat on home or maybe we should move it? For now, linking to the section.
    }
]

export function HomeProjects() {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                        Home Projects
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Personal experiments, hobbies, and fun tools built in my spare time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {homeProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/10"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 bg-teal-950/50 w-fit rounded-xl text-teal-400 border border-teal-900/50 group-hover:scale-110 transition-transform duration-300">
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                                    {project.type}
                                </p>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 bg-slate-950 rounded-full text-slate-500 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Optional CTA if we want to link somewhere */}
                                {project.link && (
                                    <Link href={project.link} className="inline-flex items-center text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors">
                                        Try it out <span className="ml-1">→</span>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
