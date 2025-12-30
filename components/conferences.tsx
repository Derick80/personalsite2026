"use client"

import { motion } from "framer-motion"
import { Users, Presentation } from "lucide-react"

export const conferences = [
    {
        title: "Whole genome sequencing uncovers novel BCR::ABL1 breakpoints and variants in leukemia: Implications for personalized medicine",
        conference: "ASH: American Society of Hematology 2025",
        authors: [
            "Robert Huether", "Derick Hoskinson", "Raul Torres", "Karl Beutner", "Yan Yang", "Kelly Potts", "Andrew Frazier",
            "Adam Hockenberry", "Brett Mahon", "Charles Koyias", "Cecile Rose Vibat", "Victoria Chiou", "Michael Thompson", "Kate Sasser", "Halla Nimeiri"
        ]
    },
    {
        title:
            "Comprehensive Whole Genome Sequencing (WGS) Assay Provides Diagnostic Insight into Clinically Relevant Genomic Alterations Across Myeloid Malignancies",
        conference: "AACR: American Association FOR Cancer Research 2025",
        authors: [
            "Robert Huether PhD",
            "Derick Hoskinson",
            "Pavana Anur",
            "Raul Torres PhD",
            "Karl R. Beutner",
            "Kristiyana Kaneva",
            "Yan Yang",
            "Kelly A. Potts",
            "Andrew Frazier",
            "Iris Braunstein",
            "Brett Mahon MD",
            "Michael A. Thompson MD PhD",
            "Kate Sasser, PhD",
            "Halla Nimeiri, MD",
            "Lewis J. Kraft, PhD",
            "Francisco M. De La Vega",
            "Guillermo Garcia-Manero, MD",
        ],
    },
    {
        title:
            "Detection of KMT2A Partial Tandem Duplication (PTD) in AML by Whole Genome Sequencing (WGS): Addressing Limitations of Traditional Techniques in the Era of Revumenib Approval",
        conference: "ASCO: American Society of Clinical Oncology 2025",
        authors: [
            "Robert Huether",
            "Derick Hoskinson",
            "Pavana Anur",
            "Raul Torres",
            "Karl R. Beutner",
            "Kristiyana Kaneva",
            "Yan Yang",
            "Kelly A. Potts",
            "Andrew Frazier",
            "Iris Braunstein",
            "Brett Mahon",
            "Michael A. Thompson",
            "Kate Sasser",
            "Halla Nimeiri",
            "Lewis J. Kraft",
            "Francisco M. De La Vega",
            "Alejandro Marinos Velarde",
        ],
    },
];

export function Conferences() {
    return (
        <section id="conferences" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        Conference Presentations
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Sharing insights and latest findings at leading scientific conferences.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {conferences.map((conf, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-teal-500/30 transition-colors group"
                        >
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold mb-2 uppercase tracking-wide">
                                        <Presentation className="w-4 h-4" />
                                        {conf.conference}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-3 group-hover:text-teal-400 transition-colors">
                                        {conf.title}
                                    </h3>
                                </div>

                                <div className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed border-t border-slate-900 pt-4">
                                    <Users className="w-4 h-4 mt-1 shrink-0 text-slate-600" />
                                    <p>
                                        {conf.authors.map((author, i) => (
                                            <span key={i} className={author.includes("Hoskinson") ? "text-teal-400 font-semibold" : ""}>
                                                {author}{i < conf.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
