export type Season = "spring" | "summer" | "autumn" | "winter"

export interface SocialLinks {
  instagram?: string
  facebook?: string
  twitter?: string
  tiktok?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface OperatingHours {
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  sunday: string
}

export interface CateringPackage {
  id: string
  name: string
  description: string
  minGuests: number
  maxGuests: number
  pricePerPerson: number
  includes: string[]
}

export interface LoyaltyTier {
  name: string
  pointsRequired: number
  benefits: string[]
  color: string
}

export interface SiteConfig {
  // Branding
  name: string
  tagline: string
  description: string
  logo: string
  favicon: string

  // Contact & Location
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  phone: string
  email: string
  hours: OperatingHours
  socialLinks: SocialLinks

  // Theme Settings
  defaultTheme: Season
  autoDetectSeason: boolean

  // Feature Toggles
  features: {
    onlineOrdering: boolean
    loyaltyProgram: boolean
    catering: boolean
    blog: boolean
    events: boolean
    gallery: boolean
    newsletter: boolean
  }

  // Menu Categories
  menuCategories: string[]

  // Dietary Options
  dietaryOptions: string[]

  // Team Members
  team: TeamMember[]

  // Catering Packages
  cateringPackages: CateringPackage[]

  // Loyalty Program
  loyaltyTiers: LoyaltyTier[]

  // SEO
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }

  // Currency
  currency: {
    code: string
    symbol: string
  }

  // Order Settings
  orderSettings: {
    minPickupTime: number // minutes
    maxAdvanceOrderDays: number
    acceptsDelivery: boolean
    deliveryFee: number
    freeDeliveryMinimum: number
  }
}

export const siteConfig: SiteConfig = {
  // Branding
  name: "Brew & Bloom",
  tagline: "Where Coffee Meets Nature",
  description: "A botanical café experience where artisanal coffee and fresh blooms create a sanctuary for the senses. Join us for seasonal drinks, fresh pastries, and moments of tranquility.",
  logo: "/images/logo.svg",
  favicon: "/favicon.ico",

  // Contact & Location
  address: {
    street: "123 Garden Grove Lane",
    city: "Portland",
    state: "OR",
    zip: "97201",
    country: "USA",
  },
  phone: "(503) 555-BREW",
  email: "hello@brewandbloom.com",
  hours: {
    monday: "7:00 AM - 7:00 PM",
    tuesday: "7:00 AM - 7:00 PM",
    wednesday: "7:00 AM - 7:00 PM",
    thursday: "7:00 AM - 8:00 PM",
    friday: "7:00 AM - 9:00 PM",
    saturday: "8:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:00 PM",
  },
  socialLinks: {
    instagram: "https://instagram.com/brewandbloom",
    facebook: "https://facebook.com/brewandbloom",
    twitter: "https://twitter.com/brewandbloom",
    tiktok: "https://tiktok.com/@brewandbloom",
  },

  // Theme Settings
  defaultTheme: "spring",
  autoDetectSeason: true,

  // Feature Toggles
  features: {
    onlineOrdering: true,
    loyaltyProgram: true,
    catering: true,
    blog: true,
    events: true,
    gallery: true,
    newsletter: true,
  },

  // Menu Categories
  menuCategories: [
    "Signature Drinks",
    "Classic Coffee",
    "Tea & Botanicals",
    "Seasonal Specials",
    "Fresh Pastries",
    "Breakfast",
    "Lunch",
    "Desserts",
  ],

  // Dietary Options
  dietaryOptions: ["Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Sugar-Free"],

  // Team Members
  team: [
    {
      id: "1",
      name: "Elena Rosewood",
      role: "Founder & Head Barista",
      bio: "With 15 years of coffee expertise and a passion for botanical arts, Elena created Brew & Bloom as a sanctuary where nature and coffee culture intertwine.",
      image: "/images/team/elena.jpg",
    },
    {
      id: "2",
      name: "Marcus Chen",
      role: "Head Chef",
      bio: "Marcus brings farm-to-table philosophy to every dish, sourcing ingredients from local gardens and creating seasonal menus that celebrate nature's bounty.",
      image: "/images/team/marcus.jpg",
    },
    {
      id: "3",
      name: "Sofia Mendez",
      role: "Floral Designer",
      bio: "Sofia curates our botanical installations and ensures every corner of Brew & Bloom blooms with seasonal beauty and natural harmony.",
      image: "/images/team/sofia.jpg",
    },
    {
      id: "4",
      name: "James Wright",
      role: "Events Coordinator",
      bio: "James orchestrates our workshops, live music nights, and private events, creating memorable experiences that bring our community together.",
      image: "/images/team/james.jpg",
    },
  ],

  // Catering Packages
  cateringPackages: [
    {
      id: "intimate",
      name: "Garden Gathering",
      description: "Perfect for small meetings, book clubs, or intimate celebrations",
      minGuests: 8,
      maxGuests: 20,
      pricePerPerson: 25,
      includes: [
        "Selection of 3 signature beverages",
        "Assorted pastry platter",
        "Fresh fruit display",
        "Botanical table centerpiece",
        "Dedicated service staff",
      ],
    },
    {
      id: "corporate",
      name: "Bloom & Business",
      description: "Elevate your corporate events with artisanal refreshments",
      minGuests: 20,
      maxGuests: 50,
      pricePerPerson: 35,
      includes: [
        "Full beverage station with barista",
        "Breakfast or lunch menu selection",
        "Seasonal pastry assortment",
        "Botanical arrangements",
        "AV equipment available",
        "Dedicated event coordinator",
      ],
    },
    {
      id: "celebration",
      name: "Botanical Celebration",
      description: "Create unforgettable moments for weddings, showers, and milestone events",
      minGuests: 30,
      maxGuests: 100,
      pricePerPerson: 55,
      includes: [
        "Customized menu consultation",
        "Premium beverage service",
        "Multi-course dining experience",
        "Custom floral installations",
        "Dedicated planning session",
        "Full event staff",
        "Complimentary cake cutting service",
      ],
    },
  ],

  // Loyalty Program
  loyaltyTiers: [
    {
      name: "Seedling",
      pointsRequired: 0,
      benefits: ["1 point per $1 spent", "Birthday reward", "Early access to seasonal menus"],
      color: "#9DC183",
    },
    {
      name: "Sprout",
      pointsRequired: 200,
      benefits: ["1.25 points per $1 spent", "Free drink size upgrade", "Monthly surprise treat", "Exclusive member events"],
      color: "#7CB342",
    },
    {
      name: "Blossom",
      pointsRequired: 500,
      benefits: ["1.5 points per $1 spent", "Free pastry every visit", "Priority event seating", "20% off merchandise"],
      color: "#F8B4C4",
    },
    {
      name: "Full Bloom",
      pointsRequired: 1000,
      benefits: ["2 points per $1 spent", "Complimentary drink daily", "Private tasting invitations", "Annual catering discount", "Name a seasonal drink"],
      color: "#FFD700",
    },
  ],

  // SEO
  seo: {
    title: "Brew & Bloom | Where Coffee Meets Nature",
    description: "Experience artisanal coffee in a botanical sanctuary. Seasonal drinks, fresh pastries, and a blooming atmosphere await at Brew & Bloom.",
    keywords: ["café", "coffee shop", "botanical café", "artisan coffee", "Portland café", "seasonal menu", "plant café"],
    ogImage: "/images/og-image.jpg",
  },

  // Currency
  currency: {
    code: "USD",
    symbol: "$",
  },

  // Order Settings
  orderSettings: {
    minPickupTime: 15,
    maxAdvanceOrderDays: 7,
    acceptsDelivery: true,
    deliveryFee: 5,
    freeDeliveryMinimum: 35,
  },
}

// Helper function to get current season
export function getCurrentSeason(): Season {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  if (month >= 8 && month <= 10) return "autumn"
  return "winter"
}

// Helper to format address
export function getFullAddress(): string {
  const { street, city, state, zip } = siteConfig.address
  return `${street}, ${city}, ${state} ${zip}`
}

// Helper to format price
export function formatPrice(price: number): string {
  return `${siteConfig.currency.symbol}${price.toFixed(2)}`
}
