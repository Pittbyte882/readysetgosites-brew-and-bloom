"use client"

import { siteConfig } from "@/config/site"

// Add blog posts to config/site.ts when ready.
// For now this renders placeholder posts buyers can replace.
const placeholderPosts = [
  {
    id: "1",
    title: "The Art of Seasonal Coffee",
    excerpt: "How we craft our menus around nature's rhythms and what's in bloom.",
    date: "2026-03-01",
    category: "Behind the Bar",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    author: "Elena Rosewood",
  },
  {
    id: "2",
    title: "Why We Choose Local: Our Supplier Story",
    excerpt: "Meet the farmers and roasters behind every cup at Brew & Bloom.",
    date: "2026-02-15",
    category: "Our Story",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    author: "Marcus Chen",
  },
  {
    id: "3",
    title: "Spring Menu Sneak Peek",
    excerpt: "Get an early look at what floral flavors are coming to our spring lineup.",
    date: "2026-02-01",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    author: "Elena Rosewood",
  },
  {
    id: "4",
    title: "Hosting the Perfect Botanical Gathering",
    excerpt: "Tips from our events team on creating a memorable café-style experience at home.",
    date: "2026-01-20",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    author: "James Wright",
  },
  {
    id: "5",
    title: "Cold Brew at Home: Our Method",
    excerpt: "Step-by-step guide to making smooth, café-quality cold brew in your own kitchen.",
    date: "2026-01-05",
    category: "Behind the Bar",
    image: "https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=800&q=80",
    author: "Elena Rosewood",
  },
  {
    id: "6",
    title: "The Botanicals We Love This Season",
    excerpt: "Sofia shares her favorite flowers and herbs that inspire our current menu.",
    date: "2025-12-15",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    author: "Sofia Mendez",
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })
}

export function BlogContent() {
  const [featured, ...rest] = placeholderPosts

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
                <span>{featured.author}</span>
                <span>·</span>
                <span>{formatDate(featured.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-12">
        <div className="container-botanical">
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
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}