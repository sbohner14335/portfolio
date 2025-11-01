import ThemeProvider from "@/components/theme-provider"
import MouseMoveEffect from "@/components/mouse-move"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stephen Bohner - Senior Full Stack Software Engineer",
  description: "Senior full stack software engineer portfolio showcasing skills and expertise",
  applicationName: "Stephen Bohner's Portfolio",
  authors: [{ name: "Stephen Bohner", url: "https://github.com/sbohner14335/" }],
  generator: "Next.js",
  creator: "Stephen Bohner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <MouseMoveEffect />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
