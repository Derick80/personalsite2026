'use client'

import { motion } from "framer-motion"
import { Bot, User, Clock, Cpu } from "lucide-react"

interface ArkhamChatHistoryProps {
    chatHistory: {
        question: string,
        answer: string,
        model: string,
        createdAt: Date,
    }[]
}

const ArkhamChatHistory = ({ chatHistory }: ArkhamChatHistoryProps) => {
    if (!chatHistory.length) return null

    return (
        <section className="py-12 bg-slate-900/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        <Bot className="w-6 h-6 text-teal-500" />
                        Investigation Log
                    </h2>
                    <div className="h-1 w-20 bg-teal-500/50 rounded-full mt-2" />
                </motion.div>

                <div className="space-y-6">
                    {chatHistory.map((chat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors"
                        >
                            {/* Question Section */}
                            <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                                        <User className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm font-medium text-slate-400 mb-1">Investigator</p>
                                    <p className="text-slate-200 leading-relaxed">{chat.question}</p>
                                </div>
                            </div>

                            {/* Answer Section */}
                            <div className="p-4 flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-8 h-8 bg-teal-900/20 rounded-full flex items-center justify-center text-teal-400 border border-teal-900/50">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-medium text-teal-500">Arkham Intelligence</p>
                                        <div className="flex items-center gap-3 text-xs text-slate-500">
                                            <div className="flex items-center gap-1" title="Model">
                                                <Cpu className="w-3 h-3" />
                                                <span>{chat.model}</span>
                                            </div>
                                            <div className="flex items-center gap-1" title="Time">
                                                <Clock className="w-3 h-3" />
                                                <span>
                                                    {new Date(chat.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                                        <p className="whitespace-pre-wrap leading-relaxed">{chat.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArkhamChatHistory
