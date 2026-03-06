
import { Navbar } from "@/components/navbar"
import { HomeProjects } from "@/components/home-projects"
import { getChatHistory } from "../actions/arkham-lcg-chat"
import ArkhamChatbox from "@/components/arkham-chatbox"
import ArkhamChatHistory from "@/components/arkham-chat-history"
import { auth } from "@/auth"

export default async function HomeProjectsPage() {
    const chatHistory = await getChatHistory()
    const session = await auth()
    const isLoggedIn = session?.user?.id ? true : false
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500/30 selection:text-teal-50">
            <Navbar />
            <div className="pt-20">
                <HomeProjects />
            </div>
            <ArkhamChatbox isLoggedIn={isLoggedIn} />
            <ArkhamChatHistory chatHistory={chatHistory} />
            <footer className="container mx-auto px-4 py-8 text-center text-slate-600 text-sm border-t border-slate-800">
                <p>© {new Date().getFullYear()} Derick Hoskinson</p>
            </footer>
        </main>
    )
}
