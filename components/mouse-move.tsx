"use client"

import { useEffect, useRef, type CSSProperties } from "react"

type MouseGlowStyle = CSSProperties & {
  "--mouse-x": string
  "--mouse-y": string
}

const initialGlowStyle: MouseGlowStyle = {
  "--mouse-x": "0px",
  "--mouse-y": "0px",
  background:
    "radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgb(107 33 168 / 5%), transparent 80%)",
}

export default function MouseMoveEffect() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (!finePointer.matches || reducedMotion.matches) return

    const handleMouseMove = (event: MouseEvent) => {
      glowRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`)
      glowRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={initialGlowStyle}
    />
  )
}
