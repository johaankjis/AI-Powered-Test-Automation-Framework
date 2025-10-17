"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Activity } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Test Framework</h1>
            <p className="text-xs text-muted-foreground">Enterprise QA Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <Button variant="ghost" size="sm">
            Settings
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
