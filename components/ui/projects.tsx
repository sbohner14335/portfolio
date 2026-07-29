import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Scale } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  images?: {
    light: string
    dark: string
  }
  tags: string[]
  githubUrl: string
  liveUrl?: string
  license?: string
  status: "In Progress" | "Completed" | "Maintenance" | "Archived"
}

const projects: Project[] = [
  {
    title: "Next.js Carbon Template",
    description:
      "A starter template combining the power of Next.js with IBM's Carbon Design System. Features app router, theme switching, and a clean project structure ready for enterprise applications.",
    images: {
      light: "/images/projects/nextjs-carbon-template-light.png",
      dark: "/images/projects/nextjs-carbon-template.png",
    },
    tags: ["Next.js", "Carbon", "TypeScript", "IBM", "Open Source"],
    githubUrl: "https://github.com/sbohner14335/nextjs-carbon-template",
    liveUrl: "https://nextjs-carbon-template.vercel.app/",
    license: "Apache-2.0",
    status: "Maintenance",
  },
]

export default function Projects() {
  return (
    <div className="mx-auto grid max-w-3xl gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          className="group relative h-full cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20"
          style={{
            animationDelay: `${index * 150}ms`,
            animation: "fadeInUp 0.8s ease-out forwards",
          }}
        >
          <a
            href={project.liveUrl ?? project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="sr-only">Open {project.title} in a new tab</span>
          </a>
          <CardHeader className="transition-colors duration-300 group-hover:bg-primary/5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <CardTitle className="flex items-center gap-3">
                <div
                  className="flex shrink-0 items-center gap-2 rounded-lg border border-black/10 bg-white px-2 py-2 shadow-xs transition-all duration-300 dark:border-white/15 dark:bg-black group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/logos/nextjs.svg"
                    alt=""
                    width={59}
                    height={12}
                    className="h-3 w-auto dark:invert"
                  />
                  <span className="h-5 w-px bg-black/15 dark:bg-white/20" />
                  <Image
                    src="/images/logos/carbon-design-system.png"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 rounded-xs"
                  />
                </div>
                <span className="transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </span>
              </CardTitle>
              <Badge
                variant={project.status === "In Progress" ? "default" : "secondary"}
                className="text-xs font-medium shrink-0"
              >
                {project.status}
              </Badge>
            </div>
          </CardHeader>

          {project.images && (
            <div className="relative w-full aspect-[3456/1684] overflow-hidden border-b border-border/50">
              <Image
                src={project.images.light}
                alt={`Screenshot of ${project.title} in light mode`}
                fill
                loading="eager"
                className="object-contain object-top dark:hidden"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
              <Image
                src={project.images.dark}
                alt={`Screenshot of ${project.title} in dark mode`}
                fill
                loading="eager"
                className="hidden object-contain object-top dark:block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
            </div>
          )}

          <CardContent className="flex flex-col gap-5 pt-5">
            <p className="text-sm/6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  style={{
                    animationDelay: `${index * 100 + tagIndex * 50}ms`,
                    animation: "fadeIn 0.4s ease-out forwards",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              {project.license && (
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Scale className="size-3.5" />
                  {project.license}
                </span>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                title="Opens in a new tab"
                className="relative z-20 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
              >
                <Github className="size-4" />
                GitHub
                <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
