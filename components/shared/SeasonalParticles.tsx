"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import type { Season } from "@/config/site"

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
}

const particleConfig: Record<Season, { count: number; emoji: string }> = {
  spring: { count: 15, emoji: "cherry_blossom" },
  summer: { count: 10, emoji: "sun" },
  autumn: { count: 20, emoji: "leaf" },
  winter: { count: 25, emoji: "snowflake" },
}

// SVG particles for each season
function SpringPetal({ size, rotation }: { size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z"
        fill="#F9A8D4"
        opacity="0.7"
      />
    </svg>
  )
}

function SummerRay({ size, rotation }: { size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <circle cx="12" cy="12" r="5" fill="#FCD34D" opacity="0.6" />
      <line x1="12" y1="2" x2="12" y2="6" stroke="#FCD34D" strokeWidth="2" opacity="0.4" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="#FCD34D" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

function AutumnLeaf({ size, rotation }: { size: number; rotation: number }) {
  const colors = ["#EA580C", "#DC2626", "#CA8A04", "#B45309"]
  const color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M12 2L14 8L20 10L14 12L12 22L10 12L4 10L10 8L12 2Z"
        fill={color}
        opacity="0.7"
      />
    </svg>
  )
}

function WinterSnowflake({ size, rotation }: { size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <g fill="none" stroke="#7DD3FC" strokeWidth="1.5" opacity="0.7">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
        <circle cx="12" cy="12" r="3" />
      </g>
    </svg>
  )
}

function ParticleComponent({ season, size, rotation }: { season: Season; size: number; rotation: number }) {
  switch (season) {
    case "spring":
      return <SpringPetal size={size} rotation={rotation} />
    case "summer":
      return <SummerRay size={size} rotation={rotation} />
    case "autumn":
      return <AutumnLeaf size={size} rotation={rotation} />
    case "winter":
      return <WinterSnowflake size={size} rotation={rotation} />
  }
}

export function SeasonalParticles() {
  const { season } = useTheme()
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const config = particleConfig[season]
    const newParticles: Particle[] = []
    
    for (let i = 0; i < config.count; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 15,
        size: 12 + Math.random() * 16,
        rotation: Math.random() * 360,
      })
    }
    
    setParticles(newParticles)
  }, [season])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-down"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          <div className="animate-gentle-sway">
            <ParticleComponent
              season={season}
              size={particle.size}
              rotation={particle.rotation}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
