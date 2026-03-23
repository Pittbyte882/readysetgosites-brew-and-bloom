"use client"

import Link from "next/link"
import { ArrowRight, Leaf, Coffee, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const values = [
  {
    icon: Coffee,
    title: "Artisan Craft",
    description: "Every cup is handcrafted with precision and care using beans roasted locally.",
  },
  {
    icon: Leaf,
    title: "Nature Inspired",
    description: "Our botanical touches bring the garden indoors, creating a sanctuary of calm.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We're more than a café - we're a gathering place for our neighborhood.",
  },
]

export function StoryTeaser() {
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
              {/* Main image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
              
              {/* Decorative frame */}
              <div className="absolute inset-4 rounded-2xl border-2 border-background/50" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl font-bold text-background/90">Est.</span>
                  <span className="block font-serif text-8xl font-bold text-background/90">2019</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-background shadow-xl border max-w-[200px]">
              <div className="font-serif text-4xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years of serving our community</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              Where Every Cup Tells a Story
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {siteConfig.name} was born from a simple dream: to create a space where the 
              art of coffee meets the beauty of nature. What started as a small corner café 
              has blossomed into a beloved community gathering place.
            </p>
            <p className="text-muted-foreground mb-8">
              Our founder, Elena Rosewood, envisioned a sanctuary where every visit feels like 
              a garden retreat. Today, we continue that vision with seasonal menus that celebrate 
              nature&apos;s rhythms and botanical touches that bring tranquility to every corner.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {values.map((value) => (
                <div key={value.title}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
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
