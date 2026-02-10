"use client"

import { motion } from "framer-motion"
import { ExternalLink, Database, Code, FlaskConical, ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "xT CDx FDA Submission",
        type: "Regulatory & Compliance",
        description: "Orchestrated the identification and ranking of evidence for the xT CDx assay submission to the FDA. Curated gene lists and ensured clinical validity of the NGS panel.",
        icon: Database,
        tech: ["Genomics", "FDA Regulations", "Data Curation"]
    },
    {
        title: "xH: Tempus Whole Genome Assay - Hematological Assay",
        type: "Product Development",
        description: "Key contributor to the whole genome sequencing assay xH. Designed to detect hematological variants with high sensitivity and specificity",
        icon: Database,
        tech: ["Panel Design", "Variant Interpretation", "Clinical Genetics"]
    }
]


export function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
                        Work Projects
                    </h2>
                    <p className="text-slate-400">Highlighting impact in clinical work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/10"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 bg-teal-950/50 w-fit rounded-xl text-teal-400 border border-teal-900/50 group-hover:scale-110 transition-transform duration-300">
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-teal-400 transition-colors flex items-center gap-2">
                                    {project.title}

                                </h3>
                                <p className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                                    {project.type}
                                </p>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-900">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 bg-slate-900 rounded-full text-slate-500 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
