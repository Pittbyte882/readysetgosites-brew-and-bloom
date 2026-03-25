"use client"

import { useState } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? siteConfig.gallery
    : siteConfig.gallery.filter(img => img.category === activeCategory)

  return (
    <>
      <section className="py-16 bg-muted/30 border-b">
        <div className="container-botanical text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our World
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A visual tour of our space, seasonal drinks, fresh food, and the moments that make Brew &amp; Bloom special.
          </p>
        </div>
      </section>

      <section className="py-6 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-botanical">
          <div className="flex flex-wrap gap-2">
            {siteConfig.galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-botanical">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                    <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}