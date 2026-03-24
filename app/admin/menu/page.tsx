'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { formatPrice } from '@/config/site'

export default function AdminMenuPage() {
  const [activeCategory, setActiveCategory] = useState(siteConfig.menuCategories[0])
  const items = siteConfig.menuItems.filter(i => i.category === activeCategory)

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold">Menu</h1>
        <p className="text-muted-foreground mt-1">
          Menu items are managed in <code className="text-xs bg-muted px-1.5 py-0.5 rounded">config/site.ts</code>. 
          Edit that file to add, remove, or update items and redeploy.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {siteConfig.menuCategories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-card border rounded-2xl p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif font-semibold leading-tight">{item.name}</h3>
              <span className="font-serif text-lg font-bold text-primary flex-shrink-0">{formatPrice(item.price)}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.featured && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Featured</span>
              )}
              {item.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-foreground">{tag}</span>
              ))}
              {!item.available && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Unavailable</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}