"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export const skillCategories = [
    {
        title: "ACMG/AMP variant classification",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Somatic vs germline variant interpretation",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Tumor-only and matched Tumor-normal analysis",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Copy number and structural variant interpretation",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Fusion breakpoint and isoform analysis",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Variant pathogenicity evidence synthesis",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Gene-disease validity assessment",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Loss of function vs gain of function mechanism assessment",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Variant reclassification workflows",
        category: "Core Expertise",
        subtitle: "Clinical Variant Interpretation"
    },
    {
        title: "Molecular oncology and cancer biology",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Hematologic and solid tumor genomics",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Gene panel design and optimization",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Biomarker actionability assessment",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Companion Diagnostic (CDx) development",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Translational research support",
        category: "Core Expertise",
        subtitle: "Clinical Genomics and Oncology"
    },
    {
        title: "Primarly literature review and critical analysis",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Mechanism of disease evidence synthesis",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Functional assay interpretation",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Population frequency and penetrance assessment",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Clinical Validity and clinical utility assessment",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Consensus guideline interpretation (ACMG, AMP, NCCN)",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "Evidence gap analysis and prioritization",
        category: "Core Expertise",
        subtitle: "Evidence evaluation and curation"
    },
    {
        title: "FDA Submission support (CDx)",
        category: "Core Expertise",
        subtitle: "Regulatory & Quality"
    },
    {
        title: "Analytical and clinical validation support",
        category: "Core Expertise",
        subtitle: "Regulatory & Quality"
    },
    {
        title: "SOP authorship and review",
        category: "Core Expertise",
        subtitle: "Regulatory & Quality"
    },
    {
        title: "CAP/CLIA compliance",
        category: "Core Expertise",
        subtitle: "Regulatory & Quality"
    },
    {
        title: "Cross team scientific leadership",
        category: "Core Expertise",
        subtitle: "Leadership & Collaboration"
    },
    {
        title: "Mentorship of junior scientists",
        category: "Core Expertise",
        subtitle: "Leadership & Collaboration"
    },
    {
        title: "Stackholder Communication (clinical, regulatory, reporting)",
        category: "Core Expertise",
        subtitle: "Leadership & Collaboration"
    },
    {
        title: "Cross-functional collaboration (laboratory, bioinformatics, regulatory",
        category: "Core Expertise",
        subtitle: "Regulatory & Quality"
    },
    {
        title: "ClinVar",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "OncoKB",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "COSMIC",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "gnomAD",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "HGMD",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "UniProt",
        category: "Tools & Databases",
        subtitle: "Variant & Clinical Knowledgebases"
    },
    {
        title: "PubMed / PubMed Central",
        category: "Tools & Databases",
        subtitle: "Literature and Evidence Sources"
    },
    {
        title: "NCCN guidelines",
        category: "Tools & Databases",
        subtitle: "Literature and Evidence Sources"
    },
    {
        title: "FDA Drug Lables",
        category: "Tools & Databases",
        subtitle: "Literature and Evidence Sources"
    },
    {
        title: "MANE Select transcripts",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "UCSC Genome Browser",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "IGV",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "Ensembl & RefSeq",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "Internal LIMS and Knowledgebases",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "Assay design and reporting pipelines",
        category: "Tools & Databases",
        subtitle: "Genomic Resources"
    },
    {
        title: "R (data wrangling, analysis and visualization)",
        category: "Programming & Computational Skills",
        subtitle: "languages"
    },
    {
        title: "Python (Data wrangling analysis and visualization)",
        category: "Programming & Computational Skills",
        subtitle: "languages"
    },
    {
        title: "Typescript",
        category: "Programming & Computational Skills",
        subtitle: "languages"
    },
    {
        title: "SQL (PostgreSQL)",
        category: "Programming & Computational Skills",
        subtitle: "languages"
    },
    {
        title: "React 19",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "Next.js (App Router, server components, server actions)",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "Tailwind CSS",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "MDX-based content systems",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "Responsive and printable document generation",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "Prisma ORM",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "PubMed / NCBI API integration",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "RAG pipeline for scientific documents",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },
    {
        title: "OpenAI & Gemini coding",
        category: "Programming & Computational Skills",
        subtitle: "Web development"
    },

    {
        title: "XML parsking and transformation",
        category: "Programming & Computational Skills",
        subtitle: "Data Prcoessing"
    }, {
        title: "Large-scale literature ingestion",
        ategory: "Programming & Computational Skills",
        subtitle: "Data Prcoessing"
    }
]


export function Skills() {
    // 1. Group skills by Category -> Subtitle -> List of Skills
    const groupedSkills = skillCategories.reduce((acc, skill: any) => {
        // Handle potential typo from user input "ategory"
        const category = skill.category || skill.ategory || "Other"
        const subtitle = skill.subtitle || "General"

        if (!skill.title) return acc // Skip empty titles

        if (!acc[category]) {
            acc[category] = {}
        }
        if (!acc[category][subtitle]) {
            acc[category][subtitle] = []
        }
        acc[category][subtitle].push(skill.title)
        return acc
    }, {} as Record<string, Record<string, string[]>>)

    // Get categories order (unique)
    const categories = Array.from(new Set(skillCategories.map(s => s.category || (s as any).ategory || "Other"))).filter(Boolean)

    return (
        <section id="skills" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Navigating the complexity of biology with the precision of engineering.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, catIndex) => {
                        const subtitles = groupedSkills[category]
                        if (!subtitles) return null

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-2xl font-bold text-teal-400 shrink-0">
                                        {category}
                                    </h3>
                                    <div className="h-px bg-slate-800 w-full" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {Object.entries(subtitles).map(([subtitle, skills], index) => (
                                        <div
                                            key={subtitle}
                                            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-300 group h-full"
                                        >
                                            <h4 className="text-lg font-bold text-slate-200 mb-4 pb-3 border-b border-slate-800 group-hover:border-teal-500/30 transition-colors">
                                                {subtitle}
                                            </h4>

                                            <ul className="space-y-3">
                                                {skills.map((skill, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                                        <CheckCircle2 className="w-4 h-4 text-teal-500/70 mt-1 shrink-0 group-hover:text-teal-400 transition-colors" />
                                                        <span className="text-sm font-medium leading-relaxed">
                                                            {skill}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
