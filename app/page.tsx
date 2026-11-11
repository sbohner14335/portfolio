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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto grid grid-cols-[auto_1fr] items-center gap-x-4 px-4 md:px-6 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="#about"
            aria-label="Stephen Bohner, back to About"
            className="col-start-1 row-start-1 flex min-h-14 items-center rounded-sm text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="font-mono text-2xl/8 font-bold tracking-tighter sm:hidden" aria-hidden="true">SB.</span>
            <span className="hidden bg-linear-to-r from-primary to-primary/70 bg-clip-text text-xl/7 font-bold text-transparent sm:inline-block">
              stephenbohner.dev
            </span>
          </Link>
          <div className="col-span-2 row-start-2 -mx-4 border-t border-border/50 px-2 md:-mx-6 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-0 lg:border-0 lg:px-0">
            <MainNav />
          </div>
          <div className="col-start-2 row-start-1 flex items-center justify-self-end gap-2 lg:col-start-3">
            <Button asChild variant="outline" className="h-11 px-3 sm:px-4">
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

        <section id="projects" className="flex scroll-mt-28 flex-col gap-8 py-8 md:gap-16 md:py-12 lg:scroll-mt-16 lg:py-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <Projects />
        </section>

        <Divider />

        <section id="skills" className="flex scroll-mt-28 flex-col gap-8 py-8 md:gap-16 md:py-12 lg:scroll-mt-16 lg:py-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <SkillsExpertise />
        </section>

        <Divider />

        <section id="referrals" className="flex scroll-mt-28 flex-col gap-8 py-8 md:gap-16 md:py-12 lg:scroll-mt-16 lg:py-16">
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
