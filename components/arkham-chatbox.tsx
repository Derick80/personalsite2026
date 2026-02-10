'use client'

import { askGPT } from "@/app/actions/arkham-lcg-chat"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search, Loader2, Sparkles, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

const ArkhamChatbox = () => {
    const [state, action, isPending] = React.useActionState(askGPT, null)

    React.useEffect(() => {
        // Simple JS check: bot likely won't execute this or won't find the field if not rendering fully
        const nonceElement = document.getElementById("nonce-chat") as HTMLInputElement;
        if (nonceElement) {
            nonceElement.value = "human";
        }
    }, []);


    return (
        <section id="arkham-chat" className="py-12 relative">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 p-8 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl shadow-2xl shadow-teal-900/10"
                >
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 mb-4 ring-1 ring-teal-500/20">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-100 mb-2">Consult the Archives</h2>
                        <p className="text-slate-400">Ask any question about Arkham Horror LCG rules or cards.</p>
                    </div>

                    <form action={action} className="relative">
                        <div className="relative flex items-center">
                            {/* Honeypot field - should be left empty by humans */}
                            <input
                                type="text"
                                name="confirm_email"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                            {/* Nonce field - populated by JS to prove client-side execution */}
                            <input type="hidden" name="nonce" id="nonce-chat" />
                            <Search className="absolute left-4 w-5 h-5 text-slate-500" />
                            <Input
                                type="text"
                                name="message"
                                placeholder="e.g. Can I commit cards to another investigator's test?"
                                className="pl-12 pr-32 h-14 bg-slate-950 border-slate-800 focus:border-teal-500/50 focus:ring-teal-500/20 rounded-xl text-slate-200 placeholder:text-slate-600 transition-all"
                                required
                            />

                            <div className="absolute right-2 top-2 bottom-2">
                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    className="h-full px-6 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isPending ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        "Ask"
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>

                    <AnimatePresence>
                        {state?.error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-left"
                            >
                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span className="text-red-300 text-sm">{state.error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Decorative background effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
            </div>
        </section>
    )
}

export default ArkhamChatbox