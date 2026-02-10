
import { Navbar } from "@/components/navbar"
import { HomeProjects } from "@/components/home-projects"

export default function HomeProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500/30 selection:text-teal-50">
            <Navbar />
            <div className="pt-20">
                <HomeProjects />
            </div>
            <footer className="container mx-auto px-4 py-8 text-center text-slate-600 text-sm border-t border-slate-800">
                <p>© {new Date().getFullYear()} Derick Hoskinson. All rights reserved.</p>
            </footer>
        </main>
    )
}
