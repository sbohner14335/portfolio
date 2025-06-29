"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "dark" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "light" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
    </div>
  )
}