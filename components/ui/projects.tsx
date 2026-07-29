"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FolderGit2, Github, Scale } from "lucide-react"
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
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={project.title}
          role="link"
          tabIndex={0}
          onClick={() => window.open(project.liveUrl ?? project.githubUrl, "_blank", "noopener,noreferrer")}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.open(project.liveUrl ?? project.githubUrl, "_blank", "noopener,noreferrer") }}
          className="block cursor-pointer"
        >
          <Card
            className="h-full overflow-hidden"
            style={{
              animationDelay: `${index * 150}ms`,
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            <CardHeader className="transition-colors duration-300 group-hover:bg-primary/5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <FolderGit2 className="h-6 w-6" />
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
                  className="object-contain object-top [.dark_&]:hidden"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
                <Image
                  src={project.images.dark}
                  alt={`Screenshot of ${project.title} in dark mode`}
                  fill
                  className="hidden object-contain object-top [.dark_&]:block"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
              </div>
            )}

            <CardContent className="space-y-5 pt-5">
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-pointer"
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
                    <Scale className="h-3.5 w-3.5" />
                    {project.license}
                  </span>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                  title="Opens in a new tab"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
