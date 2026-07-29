"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import ProfileImage from "./profile-image"

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  canvasWidth: number
  canvasHeight: number
  ctx: CanvasRenderingContext2D
  theme: string | undefined

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    ctx: CanvasRenderingContext2D,
    theme: string | undefined
  ) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.ctx = ctx
    this.theme = theme
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 2 + 0.1
    this.speedX = Math.random() * 2 - 1
    this.speedY = Math.random() * 2 - 1
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvasWidth) this.x = 0
    if (this.x < 0) this.x = canvasWidth
    if (this.y > canvasHeight) this.y = 0
    if (this.y < 0) this.y = canvasHeight
  }

  draw() {
    const particleColor =
      this.theme === "dark"
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(0, 0, 0, 0.3)"
    this.ctx.fillStyle = particleColor
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fill()
  }
}

export default function ProfileAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const drawContext: CanvasRenderingContext2D = ctx

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    let animationFrameId: number | undefined

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(canvas.width, canvas.height, drawContext, resolvedTheme)
      )
    }

    function drawFrame() {
      if (!canvasRef.current) return
      const currentCanvas = canvasRef.current
      drawContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

      for (const particle of particles) {
        particle.update(currentCanvas.width, currentCanvas.height)
        particle.theme = resolvedTheme
        particle.draw()
      }
    }

    function animate() {
      drawFrame()
      animationFrameId = requestAnimationFrame(animate)
    }

    if (prefersReducedMotion) {
      drawFrame()
    } else {
      animate()
    }

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [resolvedTheme])

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <section className="px-4 md:px-6 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <ProfileImage
              src="https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdF7a393N6TQeHKEsj3Gm0WYrLFCX4UZ5PkARbo"
              alt="Stephen Bohner"
              className="mb-4 size-40 md:size-48 lg:size-56"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl/9 font-bold tracking-tighter sm:text-4xl/10 md:text-5xl/12 lg:text-6xl/15">
                Stephen Bohner
              </h1>
              <h2 className="text-xl/7 font-semibold text-primary pt-1 pb-2">
                Senior Full Stack Software Engineer
              </h2>
              <p className="mx-auto max-w-3xl md:text-xl/7 pb-2">
                Building digital experiences with modern technologies.
                <br />Focused on creating simple solutions to complex problems.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://github.com/sbohner14335"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://www.linkedin.com/in/sbohner14335"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:sbohner14335@gmail.com">
                  <Mail className="size-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
