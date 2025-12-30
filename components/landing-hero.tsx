"use client"

import { motion } from "framer-motion"

export function LandingHero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-slate-950 text-white">
            {/* Background Gradients - More professional/medical colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="z-10 max-w-4xl mx-auto space-y-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-teal-400 uppercase bg-teal-950/50 rounded-full border border-teal-900/50">
                        Available for Collaboration
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight pb-2 text-slate-100">
                        Derick Hoskinson, PhD
                    </h1>

                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                    <a href="#projects" className="px-8 py-3.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
