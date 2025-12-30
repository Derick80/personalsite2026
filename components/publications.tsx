"use client"

import { motion } from "framer-motion"
import { ExternalLink, BookOpen, Quote, Calendar } from "lucide-react"

export const publications = [
    {
        title:
            "Mutations in yeast Pcf11, a conserved protein essential for mRNA 3' end processing and transcription termination, elicit the Environmental Stress Response",
        journal: "Genetics",
        journalInfo: "2024 Feb 7;226(2)",
        publicationDate: new Date("2024-02-07"),
        doi: "10.1093/genetics/iyad199",
        pmid: "37967370",
        pmcid: "PMC10847720",
        authors: [
            "Graber JH",
            "Hoskinson D", // NOTE: Yeast-era publication uses D (matches original paper)
            "Liu H",
            "Kaczmarek Michaels K", // NOTE: unusual surname but correct as published
            "Benson PS",
            "Maki NJ",
            "Wilson CL",
            "McGrath C",
            "Puleo F",
            "Pearson E",
            "Kuehner JN",
            "Moore C",
        ],
    },
    {
        title:
            "Tumor Mutational Burden From Tumor-Only Sequencing Compared With Germline Subtraction From Paired Tumor and Normal Specimens",
        journal: "JAMA Netw Open",
        journalInfo: "2020 Feb 5;3(2):e200202",
        publicationDate: new Date("2020-02-05"),
        doi: "10.1001/jamanetworkopen.2020.0202",
        pmid: "32108894",
        pmcid: "PMC7049088",
        authors: [
            "Parikh K",
            "Huether R",
            "White K",
            "Hoskinson DC", // CHANGED: standardized to DC for clinical-era publications
            "Beaubier N",
            "Dong H",
            "Adjei AA",
            "Mansfield AS",
        ],
    },
    {
        title:
            "Integrated genomic profiling expands clinical options for patients with cancer",
        journal: "Nat Biotechnol",
        journalInfo: "2019 Nov;37(11):1351-1360",
        publicationDate: new Date("2019-11-01"),
        doi: "10.1038/s41587-019-0259-z",
        pmid: "31570899",
        pmcid: null,
        authors: [
            "Beaubier N",
            "Bontrager M",
            "Huether R",
            "Igartua C",
            "Lau D",
            "Tell R",
            "Bobe AM",
            "Bush S",
            "Chang AL",
            "Hoskinson DC", // NOTE: already correct
            "Khan AA",
            "Kudalkar E",
            "Leibowitz BD",
            "Lozachmeur A",
            "Michuda J",
            "Parsons J",
            "Perera JF",
            "Salahudeen A",
            "Shah KP",
            "Taxter T",
            "Zhu W",
            "White KP",
        ],
    },
    {
        title:
            "Considerations for clinical curation, classification, and reporting of low-penetrance and low effect size variants associated with disease risk",
        journal: "Genet Med",
        journalInfo: "2019 Dec;21(12):2765-2773",
        publicationDate: new Date("2019-12-01"),
        doi: "10.1038/s41436-019-0560-8",
        pmid: "31147632",
        pmcid: null,
        authors: [
            "Senol-Cosar O",
            "Schmidt RJ",
            "Qian E",
            "Hoskinson DC", // CHANGED: standardized (was D)
            "Mason-Suares H", // CHANGED: standardized (was H / HM elsewhere)
            "Funke B",
            "Lebo MS",
        ],
    },
    {
        title:
            "Exome Sequencing-Based Screening for BRCA1/2 Expected Pathogenic Variants Among Adult Biobank Participants",
        journal: "JAMA Netw Open",
        journalInfo: "2018 Sep 7;1(5):e182140",
        publicationDate: new Date("2018-09-07"),
        doi: "10.1001/jamanetworkopen.2018.2140",
        pmid: "30646163",
        pmcid: "PMC6324494",
        authors: [
            "Manickam K",
            "Buchanan AH",
            "Schwartz MLB",
            "Hallquist MLG",
            "Williams JL",
            "Rahm AK",
            "Rocha H",
            "Savatt JM",
            "Evans AE",
            "Butry LM",
            "Lazzeri AL",
            "Lindbuchler DM",
            "Flansburg CN",
            "Leeming R",
            "Vogel VG",
            "Lebo MS",
            "Mason-Suares H", // CHANGED: standardized (was HM)
            "Hoskinson DC",
            "Abul-Husn NS",
            "Dewey FE",
            "Overton JD",
            "Reid JG",
            "et al.",
        ],
    },
    {
        title: "The current state of clinical interpretation of sequence variants",
        journal: "Curr Opin Genet Dev",
        journalInfo: "2017 Feb;42:33-39",
        publicationDate: new Date("2017-02-01"),
        doi: "10.1016/j.gde.2017.01.001",
        pmid: "28157586",
        pmcid: "PMC5446800",
        authors: [
            "Hoskinson DC", // CHANGED: standardized (was DC elsewhere, D here)
            "Dubuc AM",
            "Mason-Suares H", // CHANGED
        ],
    },
    {
        title:
            "The C terminus of Pcf11 forms a novel zinc-finger structure that plays an essential role in mRNA 3'-end processing",
        journal: "RNA",
        journalInfo: "2017 Jan;23(1):98-107",
        publicationDate: new Date("2017-01-01"),
        doi: "10.1261/rna.058354.116",
        pmid: "27780845",
        pmcid: "PMC5159653",
        authors: [
            "Yang F",
            "Hsu P",
            "Lee SD",
            "Yang W",
            "Hoskinson D", // NOTE: yeast-era publication — left unchanged
            "Xu W",
            "Moore C",
            "Varani G",
        ],
    },
    {
        title:
            "DNA damage induces targeted, genome-wide variation of poly(A) sites in budding yeast",
        journal: "Genome Res",
        journalInfo: "2013 Oct;23(10):1690-703",
        publicationDate: new Date("2013-10-01"),
        doi: "10.1101/gr.144964.112",
        pmid: "23788651",
        pmcid: "PMC3787265",
        authors: [
            "Graber JH",
            "Nazeer FI",
            "Yeh PC",
            "Kuehner JN",
            "Borikar S",
            "Hoskinson D",
            "Moore CL", // NOTE: CL is correct here per Genome Research
        ],
    },
];

export function Publications() {
    return (
        <section id="publications" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                        Selected Publications
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Peer-reviewed research in clinical genomics, variant interpretation, and molecular biology.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                                <div className="space-y-3 flex-grow">
                                    <h3 className="text-lg font-bold text-slate-200 leading-snug group-hover:text-teal-400 transition-colors">
                                        <a href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-teal-500/50 underline-offset-4">
                                            {pub.title}
                                        </a>
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                                        {pub.authors.map((author, i) => (
                                            <span key={i} className={author.includes("Hoskinson") ? "text-teal-400 font-semibold" : ""}>
                                                {author}{i < pub.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mt-2">
                                        <span className="flex items-center gap-1.5 text-slate-300 bg-slate-800/50 px-2 py-1 rounded">
                                            <BookOpen className="w-3.5 h-3.5" />
                                            {pub.journal}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {pub.journalInfo}
                                        </span>
                                        {pub.pmcid && (
                                            <span className="text-teal-500/70">
                                                {pub.pmcid}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-3 shrink-0 mt-1 md:mt-0">
                                    <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
                                        title="View on PubMed"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    {pub.doi && (
                                        <a
                                            href={`https://doi.org/${pub.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
                                            title="View DOI"
                                        >
                                            <Quote className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
