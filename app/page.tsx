
import { Navbar } from "@/components/navbar"
import { LandingHero } from "@/components/landing-hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Conferences } from "@/components/conferences"
import { Contact } from "@/components/contact"
import ArkhamChatbox from "@/components/arkham-chatbox"
import { getChatHistory } from "./actions/arkham-lcg-chat"
import ArkhamChatHistory from "@/components/arkham-chat-history"
import { auth } from "@/auth"

export default async function Home() {
  const chatHistory = await getChatHistory()
  const session = await auth()
  const isLoggedIn = session?.user?.id ? true : false

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500/30 selection:text-teal-50">
      <Navbar />
      <LandingHero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Conferences />
      <Contact />
      <ArkhamChatbox isLoggedIn={isLoggedIn} />
      <ArkhamChatHistory chatHistory={chatHistory} />
      <footer className="container mx-auto px-4 py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Derick Hoskinson. All rights reserved.</p>
      </footer>
    </main>
  )
}
