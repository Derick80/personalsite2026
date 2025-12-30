"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export const experiences = [
    {
        company: "Tempus AI",
        position: "Senior Clinical Scientist",
        location: "Chicago, IL 60640",
        startDate: "2019-03-01",
        endDate: "Present",
        duties: [{
            title: "Defined clinical reporting requirements for SNV/indels, copy number variants, and structural variants for Tempus xH assay."
        },
        {
            title:
                "Created a tailored bed file to optimize genomic data analysis and facilitate the identification, classification, and clinical reporting of genetic variants on a large gene panel, resulting in improved accuracy and efficiency of downstream analysis.",
        },
        {
            title:
                "Contributed to the development and submission of the xT CDx assay to the FDA by curating and analyzing gene data to rank evidence per gene, ensuring accurate and effective clinical use.",
        },
        {
            title:
                "Played a vital role in the development and application of a new hereditary genetic testing panel, Tempus, xGv3 to identify germline variants in genes associated with hereditary cancer syndromes and incidental findings.",
        },
        {
            title:
                "Identified gaps and deficiencies in current workflows and executed new workflows and SOPs to harmonize variant classification across multiple institutions.",
        },
        {
            title:
                "Spearheaded the development and implementation of a reportable bed file solution for the Tempus xF assay, allowing for targeted reporting of specific genomic regions and improving the overall quality of data analysis.",
        },
        {
            title:
                "Used R programming language to design and implement a regions of interest bed file for reporting insertions and deletions for Tempus xF assay.",
        },
        {
            title:
                "Used R programming language to create, update, and modify curated data to justify the inclusion or exclusion of genomic regions for xT-oncology FDA application.",
        },
        {
            title:
                "Acted as the scientific lead in the development of the Tempus xF liquid biopsy panel to sequence and report SNVs and indels in clinically relevant regions of 105 genes plus CNVs and DNA rearrangements in a subset of these genes.",
        },
        {
            title:
                "Used R programming language to programmatically access data, wrangle data, analyze data and present data to implement changes in workflow or other internal processes.",
        },
        ],
    },
    {
        company: "Tempus AI",
        position: "Clinical Scientist",
        location: "Chicago, IL 60640",
        startDate: "2017-06-01",
        endDate: "2019-03-01",
        duties: [
            {
                title:
                    "Evaluated data and analyzed variants for a project that led to the publication of the results in Nature BioTechnology.",
            },
            {
                title:
                    "Trained over 20 M.A.s, Ph.D.s, and post-baccalaureates in germline and somatic variant classification.",
            },
            {
                title:
                    "Worked closely with colleagues to build a team of variant scientists from 2 individuals to over 20 highly skilled variant scientists.",
            },
            {
                title:
                    "Gained proficiency in the R programming language and experience using Python, JavaScript, HTML, and CSS.",
            },
        ],
    },
    {
        position: "Clinical Knowledge Curation Coordinator",
        company: `Harvard Medical School, Partners Healthcare, Brigham and Women's Hospital`,
        location: "Cambridge, MA",
        startDate: "2015-06-01",
        endDate: "2017-06-01",
        duties: [
            {
                title:
                    "Trained over 25 M.Ds, M.D./Ph.D.s, rotating fellows, undergraduates, and post-baccalaureates in constitutional variant classification.",

            },
            {
                title:
                    "Assessed pathogenicity of variants from large gene panels covering cardiomyopathy, hearing loss, pulmonary disease, and Noonan syndrome.",

            },
            {
                title:
                    "Evaluated data and assessed variants as a critical member of the Geisinger MyCode project including the 56 genes recommended by the ACMG and 20 additional genes from Geisinger.",

            },
            {
                title:
                    "Extensive experience with population databases (1000 genomes, ESP, ExAC, gnomAD).",

            },
            {
                title:
                    "Proficient in the use of variant databases including HGMD, ClinVar, LOVD, Deafness Variation database, Cardiodb, MitoMap, Leiden Muscular Dystrophy database, ARUP and COSMIC.",

            },
        ],
    },

    {
        position: "Medical Writer II",
        company: `EBSCO Information Services, DynaMed`,
        location: "Ipswich, MA",
        startDate: "2014-06-01",
        endDate: "2015-06-01",
        duties: [
            {
                title:
                    "Wrote evidence-based summaries of clinical trials aimed at serving as a resource for physicians and other health care professionals at the point of care.",

            },
            {
                title:
                    "Wrote evidence-based point-of-care references for a number of clinically important disease topics.",

            },
            {
                title:
                    "Critically assessed published clinical trials for methodological integrity.",

            },
            {
                title:
                    "Critically assessed published clinical trials for inclusion in the DynaMed database in areas such as oncology, cardiology, infectious disease, endocrinology, and pediatrics.",

            },
            {
                title:
                    "Applied in-depth knowledge of statistical methods to critically appraise clinical trials.",

            },
            {
                title:
                    "Extensively worked in an XML environment to deliver point-of-care clinical information.",
            },
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-slate-400">A timeline of my contributions to clinical genomics.</p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const startYear = exp.startDate.split('-')[0];
                        const endYear = exp.endDate ? exp.endDate.split('-')[0] : "Present";
                        // If endDate is in the future like 2027, user might want "Present", but let's stick to their data or just say Present if logic suggests. 
                        // The user data has "2027", let's just use what is there or simple logic. 
                        // Actually, simplified logic: just show the years.
                        const period = `${startYear} – ${endYear}`;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 border-l border-slate-800"
                            >
                                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 box-content border-4 border-teal-600" />

                                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-bold text-slate-200">{exp.position}</h3>
                                    <span className="flex items-center text-sm text-teal-500 font-medium mt-1 sm:mt-0 font-mono">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {period}
                                    </span>
                                </div>

                                <div className="mb-4 flex flex-col sm:flex-row sm:items-center text-slate-300 gap-2 sm:gap-6">
                                    <div className="flex items-center">
                                        <Briefcase className="w-4 h-4 mr-2 text-slate-500" />
                                        <span className="font-medium">{exp.company}</span>
                                    </div>
                                    <div className="text-slate-500 text-sm">
                                        {exp.location}
                                    </div>
                                </div>

                                {exp.duties && (
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm leading-relaxed">
                                        {exp.duties.map((duty, i) => (
                                            <li key={i} className="pl-2">
                                                {duty.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
