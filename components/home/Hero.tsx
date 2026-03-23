"use client"

import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, getFullAddress } from "@/config/site"
import { useTheme, seasonThemes } from "@/context/ThemeContext"

export function Hero() {
  const { season } = useTheme()
  const theme = seasonThemes[season]

  const seasonalMessages = {
    spring: "Spring awakens with cherry blossoms and fresh botanical flavors",
    summer: "Cool down with our refreshing tropical cold brews",
    autumn: "Warm up with harvest spices and cozy seasonal favorites",
    winter: "Embrace the frost with comforting winter warmers",
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `linear-gradient(135deg, var(--theme-gradient-start) 0%, var(--theme-gradient-mid) 50%, var(--theme-gradient-end) 100%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl bg-primary" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl bg-secondary" />

      {/* Organic shape decorations */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-background"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-botanical relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Seasonal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border mb-6 animate-fade-in">
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: theme.primary }}
            />
            <span className="text-sm font-medium">
              {seasonalMessages[season]}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-balance">Where Coffee</span>
            <span className="block text-gradient">Meets Nature</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 text-pretty">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" asChild className="rounded-full group">
              <Link href="/order">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <Link href="/menu">
                View Menu
              </Link>
            </Button>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Open Today: {siteConfig.hours.monday}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{siteConfig.address.city}, {siteConfig.address.state}</span>
            </div>
          </div>
        </div>

        {/* Hero image/illustration area */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[400px] h-[500px]">
          <div className="relative w-full h-full">
            {/* Coffee cup illustration */}
            <div className="absolute inset-0 rounded-[60px_60px_40px_40px] bg-gradient-to-br from-primary/30 to-secondary/30 rotate-6" />
            <div className="absolute inset-4 rounded-[50px_50px_35px_35px] bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  {/* Steam animation */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-2 h-8 rounded-full bg-muted animate-steam" style={{ animationDelay: "0s" }} />
                    <div className="w-2 h-6 rounded-full bg-muted animate-steam" style={{ animationDelay: "0.5s" }} />
                    <div className="w-2 h-10 rounded-full bg-muted animate-steam" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="font-serif text-5xl font-bold text-white">B&B</span>
                  </div>
                </div>
                <p className="mt-6 font-serif text-xl font-semibold">{theme.name}</p>
                <p className="text-sm text-muted-foreground">Current Season</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
