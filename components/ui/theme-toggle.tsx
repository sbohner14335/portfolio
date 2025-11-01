"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
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
    <div className="flex items-center space-x-2 transition-all duration-700 ease-&lsqb;cubic-bezier(0.34,1.56,0.64,1)&rsqb;">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-&lsqb;cubic-bezier(0.34,1.56,0.64,1)&rsqb; ${
          resolvedTheme === "dark" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-&lsqb;cubic-bezier(0.34,1.56,0.64,1)&rsqb; hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-&lsqb;cubic-bezier(0.34,1.56,0.64,1)&rsqb; ${
          resolvedTheme === "light" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
    </div>
  )
}