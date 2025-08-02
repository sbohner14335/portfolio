"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import ProfileImage from "./profile-image"

export default function ProfileAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        const particleColor = theme === "dark" 
          ? "rgba(255, 255, 255, 0.5)" 
          : "rgba(0, 0, 0, 0.3)"
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme])

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <section className="px-4 md:px-6 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ProfileImage
              src="https://90ck8cgfuv.ufs.sh/f/AWmmVUCJvRdF7a393N6TQeHKEsj3Gm0WYrLFCX4UZ5PkARbo"
              alt="Stephen Bohner"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Stephen Bohner
              </h1>
              <h2 className="text-xl font-semibold text-primary mb-4">
                Senior Full Stack Software Engineer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-300">
                Building digital experiences with modern technologies. Focused
                on creating simple solutions to complex problems.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/sbohner14335" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                >
                  <Github className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sbohner14335/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:sbohner14335@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                >
                  <Mail className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 