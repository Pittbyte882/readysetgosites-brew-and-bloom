"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { siteConfig, getCurrentSeason, type Season } from "@/config/site"

interface ThemeContextType {
  season: Season
  setSeason: (season: Season) => void
  isAutoDetect: boolean
  setAutoDetect: (auto: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>(siteConfig.defaultTheme)
  const [isAutoDetect, setAutoDetect] = useState(siteConfig.autoDetectSeason)

  useEffect(() => {
    // Check for saved preference
    const savedSeason = localStorage.getItem("brew-bloom-season") as Season | null
    const savedAutoDetect = localStorage.getItem("brew-bloom-auto-detect")

    if (savedAutoDetect !== null) {
      setAutoDetect(savedAutoDetect === "true")
    }

    if (savedSeason && savedAutoDetect !== "true") {
      setSeason(savedSeason)
    } else if (isAutoDetect) {
      setSeason(getCurrentSeason())
    }
  }, [isAutoDetect])

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.setAttribute("data-season", season)
    localStorage.setItem("brew-bloom-season", season)
    localStorage.setItem("brew-bloom-auto-detect", String(isAutoDetect))
  }, [season, isAutoDetect])

  return (
    <ThemeContext.Provider value={{ season, setSeason, isAutoDetect, setAutoDetect }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

// Theme configuration with colors and styles per season
export const seasonThemes = {
  spring: {
    name: "Spring Blossom",
    primary: "#E8A4B8",
    secondary: "#9DC183",
    accent: "#FFF8E7",
    background: "#FFFBF5",
    foreground: "#4A3728",
    muted: "#F5EDE4",
    particle: "petal",
    gradient: "from-pink-100 via-green-50 to-amber-50",
  },
  summer: {
    name: "Summer Citrus",
    primary: "#FFD93D",
    secondary: "#4ECDC4",
    accent: "#FFF4E0",
    background: "#FFFEF5",
    foreground: "#2C3E50",
    muted: "#F5F0E1",
    particle: "sunray",
    gradient: "from-yellow-100 via-teal-50 to-orange-50",
  },
  autumn: {
    name: "Autumn Harvest",
    primary: "#D2691E",
    secondary: "#355E3B",
    accent: "#F5DEB3",
    background: "#FDF8F3",
    foreground: "#3C2415",
    muted: "#EDE4D9",
    particle: "leaf",
    gradient: "from-orange-100 via-green-50 to-amber-100",
  },
  winter: {
    name: "Winter Frost",
    primary: "#B8D4E3",
    secondary: "#8B2942",
    accent: "#FFFFF0",
    background: "#F8FBFD",
    foreground: "#36454F",
    muted: "#E8EEF2",
    particle: "snowflake",
    gradient: "from-blue-50 via-slate-50 to-rose-50",
  },
}
