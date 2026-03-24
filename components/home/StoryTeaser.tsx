"use client"

import Link from "next/link"
import { ArrowRight, Leaf, Coffee, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const iconMap = { Coffee, Leaf, Heart }

export function StoryTeaser() {
  const { story } = siteConfig

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-botanical relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {story.image ? (
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
              )}

              {/* Decorative frame overlay */}
              <div className="absolute inset-4 rounded-2xl border-2 border-background/50" />

              {/* Est. year overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center">
                  <span className="font-serif text-6xl font-bold text-background/90">Est.</span>
                  <span className="block font-serif text-8xl font-bold text-background/90">
                    {story.estYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating years card */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-background shadow-xl border max-w-[200px]">
              <div className="font-serif text-4xl font-bold text-primary mb-1">
                {story.yearsServing}
              </div>
              <div className="text-sm text-muted-foreground">Years of serving our community</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              {story.headline}
            </h2>

            {story.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-muted-foreground mb-4 ${i === 0 ? "text-lg" : ""}`}
              >
                {para}
              </p>
            ))}

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8 mt-8">
              {story.values.map((value) => {
                const Icon = iconMap[value.icon]
                return (
                  <div key={value.title}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>

            <Button asChild className="rounded-full">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}