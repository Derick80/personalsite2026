"use client"

import { motion } from "framer-motion"



export const about = [
    {
        text: "I am a senior clinical scientist with extensive experience in genomic data analysis, variant classification and the development of clinical genetic testing panels. My work sits at the intersection of genomic analysis and clinical reporting"
    },
    {
        text: "With a PhD in Genetics from Tufts University and years of hands-on experience at Tempus AI, Harvard Medical School, I have contributed to FDA submissions, developed cancer assays, and led a team of variant scientists"
    },
    {
        text: "I am keen to leverage my expertise in variant classification, data wrangling & analysis and clinical reporting to build tools, products, and guidelines to support patients through precision medicine"
    }
]

export function About() {
    return (
        <section id="about" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-slate-800 flex-1" />
                        <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">About Me</span>
                        <div className="h-px bg-slate-800 flex-1" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center mb-12">
                        Clinical Scientist & Lead Developer
                    </h2>

                    <div className="text-lg text-slate-400 space-y-6 leading-relaxed text-justify">
                        {about.map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                                {paragraph.text}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
