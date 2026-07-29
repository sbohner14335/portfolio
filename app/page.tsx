import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import { MainNav } from "@/components/ui/main-nav"
import Divider from "../components/ui/divider"
import ProfileAnimation from "@/components/ui/profile"
import Projects from "../components/ui/projects"
import SkillsExpertise from "../components/ui/skills-expertise"
import Referrals from "../components/ui/referrals"
import ThemeToggle from "../components/ui/theme-toggle"

export default function Page() {
  return (
    <div>
      <header id="about" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6 mx-auto">
          <div className="hidden md:flex">
            <Link href="#about" className="mr-6 flex items-center">
              <span className="hidden bg-linear-to-r from-primary to-primary/70 bg-clip-text text-xl font-bold text-transparent sm:inline-block">
                stephenbohner.dev
              </span>
            </Link>
            <MainNav />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="outline">
              <Link
                href="https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdFaBhRaJPylTx138bW7Y2RAmnZDNoMzisFchpI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="size-4" />
                Resume
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <ProfileAnimation />
      <main className="container px-4 md:px-6 -mt-9 mx-auto">
        <Divider />

        <section id="projects" className="flex flex-col gap-16 py-8 md:py-12 lg:py-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <Projects />
        </section>

        <Divider />

        <section id="skills" className="flex flex-col gap-16 py-8 md:py-12 lg:py-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <SkillsExpertise />
        </section>

        <Divider />

        <section id="referrals" className="flex flex-col gap-16 py-8 md:py-12 lg:py-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Referrals
          </h2>
          <Referrals />
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} stephenbohner.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
