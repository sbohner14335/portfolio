import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SkillsExpertise from "./components/skills-expertise"
import Referrals from "./components/referrals"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link href="#about" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent sm:inline-block">
                  stephenbohner.dev
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#referrals" className="transition-colors hover:text-foreground/80">
                Referrals
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/resume/stephen-bohner-resume.pdf" download="Stephen-Bohner-Resume.pdf" target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src="/images/stephen-profile.png"
                alt="Stephen Bohner"
                fill
                className="object-cover rounded-full border-4 border-primary/20"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Stephen Bohner
              </h1>
              <h2 className="text-xl font-semibold text-primary mb-4">Senior Full Stack Software Engineer</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. Focused on creating simple solutions to complex
                problems.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/sbohner14335" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="group transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Github className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sbohner14335/" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="group transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:sbohner14335@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="group transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Mail className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Skills & Expertise
          </h2>
          <SkillsExpertise />
        </section>

        <section id="referrals" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Professional Referrals
          </h2>
          <Referrals />
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex py-6 w-full shrink-0 items-center justify-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 stephenbohner.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
