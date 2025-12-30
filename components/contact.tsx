"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Smartphone, MapPin } from "lucide-react"
import ContactForm from "./contact-form"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Whether you're interested in a collaboration, have a question about my work, or just want to connect, I'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto">

                        <a
                            href="https://github.com/Derick80"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 hover:bg-slate-900 transition-all duration-300"
                        >
                            <div className="p-3 bg-slate-800 text-slate-300 rounded-full border border-slate-700 group-hover:scale-110 transition-transform">
                                <Github className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">GitHub</p>
                                <p className="text-slate-200 font-medium group-hover:text-white transition-colors">github.com/Derick80</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/dhoskinson/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 hover:bg-slate-900 transition-all duration-300"
                        >
                            <div className="p-3 bg-blue-900/20 text-blue-500 rounded-full border border-blue-800/30 group-hover:scale-110 transition-transform">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                                <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">in/dhoskinson</p>
                            </div>
                        </a>
                    </div>
                    <ContactForm />
                    <div className="mt-16 flex items-center justify-center gap-2 text-slate-600 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Based in Chicago, IL</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
