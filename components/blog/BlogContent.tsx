"use client"

import { useState } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })
}

export function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? siteConfig.blogPosts
    : siteConfig.blogPosts.filter(p => p.category === activeCategory)

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const [featured, ...rest] = sorted

  if (!featured) return null

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container-botanical text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            From Our Team
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            The {siteConfig.name} Blog
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stories, seasonal updates, recipes, and musings from the people behind every cup.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-botanical">
          <div className="flex flex-wrap gap-2">
            {siteConfig.blogCategories.map((cat) => (
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

      {/* Featured post */}
      <section className="py-12 border-b">
        <div className="container-botanical">
          <div className="grid lg:grid-cols-2 gap-8 items-center group cursor-pointer">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {featured.category}
              </span>
              <h2 className="font-serif text-3xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{featured.author.name}</span>
                <span>·</span>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
              {featured.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {featured.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-12">
        <div className="container-botanical">
          {rest.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No more posts in this category.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-card border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-4">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}