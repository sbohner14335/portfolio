"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const emptySubscribe = () => () => undefined

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return <span className="block size-10" aria-hidden="true" />
  }

  return (
    <div className="flex items-center gap-2 transition-all duration-700 ease-out">
      <Sun
        className={`size-5 transition-all duration-700 ease-out ${
          resolvedTheme === "dark" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-out hover:scale-110"
      />
      <Moon
        className={`size-5 transition-all duration-700 ease-out ${
          resolvedTheme === "light" ? "text-[#A1A1AA] scale-75 rotate-12" : "text-foreground scale-100 rotate-0"
        }`}
      />
    </div>
  )
}
