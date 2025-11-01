import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Divider from "../components/ui/divider"
import ThemeToggle from "../components/ui/theme-toggle"

// Lazy load heavy components below the fold
const ProfileAnimation = dynamic(() => import("@/components/ui/profile"), {
  loading: () => (
    <div className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  ),
  ssr: true, // Keep SSR for initial paint
})

const SkillsExpertise = dynamic(() => import("../components/ui/skills-expertise"), {
  loading: () => (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="animate-pulse text-center text-muted-foreground">Loading skills...</div>
    </div>
  ),
})

const Referrals = dynamic(() => import("../components/ui/referrals"), {
  loading: () => (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="animate-pulse text-center text-muted-foreground">Loading referrals...</div>
    </div>
  ),
})

export default function Page() {
  return (
    <div>
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b via-background/90" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-800/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-800/5 blur-[100px]" />
      </div>
      <header id="about" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6 mx-auto">
          <div className="hidden md:flex">
            <Link href="#about" className="mr-6 flex items-center">
              <span className="hidden font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent sm:inline-block">
                stephenbohner.dev
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-semibold">
              <Link
                href="#about"
                className="transition-colors text-foreground/80 hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="transition-colors text-foreground/80 hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#referrals"
                className="transition-colors text-foreground/80 hover:text-foreground"
              >
                Referrals
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link
              href="https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdFaBhRaJPylTx138bW7Y2RAmnZDNoMzisFchpI"
              target="_blank"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <ProfileAnimation />
      <main className="container px-4 md:px-6 -mt-9 mx-auto">
        <Divider />

        <section id="skills" className="py-8 md:py-12 lg:py-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
            Skills & Expertise
          </h2>
          <SkillsExpertise />
        </section>

        <Divider />

        <section id="referrals" className="py-8 md:py-12 lg:py-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
            Professional Referrals
          </h2>
          <Referrals />
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 stephenbohner.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}