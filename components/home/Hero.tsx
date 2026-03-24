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

  const heroImage = siteConfig.hero.seasonal[season] || siteConfig.hero.image

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* ── SPLASH PHOTO ── */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(0,0,0,0.75) 0%,
              rgba(0,0,0,0.5) 50%,
              rgba(0,0,0,0.2) 100%
            )`,
          }}
        />
        {/* Bottom wave mask */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 60%,
              rgba(0,0,0,0.4) 100%
            )`,
          }}
        />
      </div>

      {/* Organic bottom wave shape */}
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

      {/* ── MAIN CONTENT ── */}
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
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            <span className="block text-balance">Where Coffee</span>
            <span
              className="block"
              style={{
                color: theme.primary,
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Meets Nature
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-xl mb-8 text-pretty text-white/80 drop-shadow">
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
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255,255,255,0.4)",
                color: "white",
              }}
            >
              <Link href="/menu">
                View Menu
              </Link>
            </Button>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Open Today: {siteConfig.hours.monday}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>
                {siteConfig.address.city}, {siteConfig.address.state}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING SEASON CARD — outside container, relative to section ── */}
      <div className="hidden lg:block absolute right-8 top-28 z-10 w-[300px]">
        <div
          className="rounded-3xl p-8 text-center"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: theme.primary }}
          >
            <span className="font-serif text-2xl font-bold text-white">
              B&B
            </span>
          </div>
          <p className="font-serif text-xl font-semibold mb-1 text-white">
            {theme.name}
          </p>
          <p className="text-sm text-white/60 mb-6">
            Current Season
          </p>
          <div
            className="h-px w-full mb-6"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          <div className="space-y-2 text-left">
            <div className="flex justify-between text-xs text-white/70">
              <span>Today</span>
              <span className="text-white">{siteConfig.hours.monday}</span>
            </div>
            <div className="flex justify-between text-xs text-white/70">
              <span>Location</span>
              <span className="text-white">{siteConfig.address.city}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}