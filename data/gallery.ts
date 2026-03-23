export type GalleryCategory = "interior" | "food" | "drinks" | "events" | "team" | "seasonal"

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  caption?: string
  featured?: boolean
}

export const galleryImages: GalleryImage[] = [
  // Interior shots
  {
    id: "interior-1",
    src: "/images/gallery/interior-main.jpg",
    alt: "Main seating area with hanging plants and natural light",
    category: "interior",
    caption: "Our main seating area bathed in natural light",
    featured: true,
  },
  {
    id: "interior-2",
    src: "/images/gallery/interior-bar.jpg",
    alt: "Coffee bar with espresso machine and botanical display",
    category: "interior",
    caption: "The heart of Brew & Bloom - our coffee bar",
  },
  {
    id: "interior-3",
    src: "/images/gallery/interior-corner.jpg",
    alt: "Cozy reading corner with vintage armchairs",
    category: "interior",
    caption: "Our favorite reading nook",
  },
  {
    id: "interior-4",
    src: "/images/gallery/interior-window.jpg",
    alt: "Window seating with view of garden",
    category: "interior",
  },
  {
    id: "interior-5",
    src: "/images/gallery/interior-ceiling.jpg",
    alt: "Exposed brick ceiling with hanging ferns",
    category: "interior",
    caption: "Our living ceiling of ferns and trailing plants",
  },

  // Food shots
  {
    id: "food-1",
    src: "/images/gallery/food-avocado.jpg",
    alt: "Garden avocado toast with microgreens",
    category: "food",
    featured: true,
  },
  {
    id: "food-2",
    src: "/images/gallery/food-pastries.jpg",
    alt: "Fresh pastry display",
    category: "food",
    caption: "Baked fresh every morning",
  },
  {
    id: "food-3",
    src: "/images/gallery/food-breakfast.jpg",
    alt: "Bloom breakfast bowl with fresh berries",
    category: "food",
  },
  {
    id: "food-4",
    src: "/images/gallery/food-croissant.jpg",
    alt: "Flaky butter croissant",
    category: "food",
  },
  {
    id: "food-5",
    src: "/images/gallery/food-brunch.jpg",
    alt: "Brunch spread with eggs benedict",
    category: "food",
    caption: "Weekend brunch at its finest",
  },

  // Drinks
  {
    id: "drinks-1",
    src: "/images/gallery/drinks-bloom-latte.jpg",
    alt: "The Bloom Latte with rose petals",
    category: "drinks",
    caption: "Our signature Bloom Latte",
    featured: true,
  },
  {
    id: "drinks-2",
    src: "/images/gallery/drinks-latte-art.jpg",
    alt: "Intricate latte art rosetta",
    category: "drinks",
  },
  {
    id: "drinks-3",
    src: "/images/gallery/drinks-cold-brew.jpg",
    alt: "Tropical cold brew with coconut",
    category: "drinks",
  },
  {
    id: "drinks-4",
    src: "/images/gallery/drinks-matcha.jpg",
    alt: "Ceremonial matcha in ceramic bowl",
    category: "drinks",
    caption: "Ceremonial grade matcha",
  },
  {
    id: "drinks-5",
    src: "/images/gallery/drinks-flight.jpg",
    alt: "Coffee tasting flight",
    category: "drinks",
  },

  // Events
  {
    id: "events-1",
    src: "/images/gallery/events-jazz.jpg",
    alt: "Jazz trio performing at evening event",
    category: "events",
    caption: "Jazz night in the garden",
    featured: true,
  },
  {
    id: "events-2",
    src: "/images/gallery/events-workshop.jpg",
    alt: "Latte art workshop in progress",
    category: "events",
  },
  {
    id: "events-3",
    src: "/images/gallery/events-tasting.jpg",
    alt: "Coffee cupping session",
    category: "events",
    caption: "Monthly origin tastings",
  },
  {
    id: "events-4",
    src: "/images/gallery/events-private.jpg",
    alt: "Private event setup with floral arrangements",
    category: "events",
  },

  // Team
  {
    id: "team-1",
    src: "/images/gallery/team-barista.jpg",
    alt: "Barista crafting espresso drink",
    category: "team",
    caption: "Passion in every pour",
  },
  {
    id: "team-2",
    src: "/images/gallery/team-chef.jpg",
    alt: "Chef preparing fresh ingredients",
    category: "team",
  },
  {
    id: "team-3",
    src: "/images/gallery/team-group.jpg",
    alt: "Our team at the spring menu launch",
    category: "team",
    featured: true,
  },

  // Seasonal
  {
    id: "seasonal-spring",
    src: "/images/gallery/seasonal-spring.jpg",
    alt: "Cherry blossom decorations for spring",
    category: "seasonal",
    caption: "Spring at Brew & Bloom",
    featured: true,
  },
  {
    id: "seasonal-summer",
    src: "/images/gallery/seasonal-summer.jpg",
    alt: "Summer garden patio",
    category: "seasonal",
    caption: "Summer vibes on the patio",
  },
  {
    id: "seasonal-autumn",
    src: "/images/gallery/seasonal-autumn.jpg",
    alt: "Autumn harvest decorations",
    category: "seasonal",
    caption: "Autumn harvest celebration",
  },
  {
    id: "seasonal-winter",
    src: "/images/gallery/seasonal-winter.jpg",
    alt: "Cozy winter ambiance with fairy lights",
    category: "seasonal",
    caption: "Winter wonderland indoors",
  },
]

// Helper functions
export function getGalleryByCategory(category: GalleryCategory): GalleryImage[] {
  return galleryImages.filter(img => img.category === category)
}

export function getFeaturedImages(): GalleryImage[] {
  return galleryImages.filter(img => img.featured)
}

export function getImageById(id: string): GalleryImage | undefined {
  return galleryImages.find(img => img.id === id)
}

export const categoryLabels: Record<GalleryCategory, string> = {
  interior: "Our Space",
  food: "Fresh Eats",
  drinks: "Crafted Drinks",
  events: "Events",
  team: "Our Team",
  seasonal: "Seasons",
}
