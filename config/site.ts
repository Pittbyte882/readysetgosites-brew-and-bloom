export type Season = "spring" | "summer" | "autumn" | "winter"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string | null
  tags: string[]
  featured: boolean
  available: boolean
  customizations?: {
    milkOptions?: string[]
    sizeOptions?: string[]
    extras?: string[]
  }
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
  category: string
  caption?: string
  featured?: boolean
}

export interface CafeEvent {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string
  startTime: string
  endTime: string
  type: "music" | "workshop" | "tasting" | "seasonal" | "community"
  image: string | null
  capacity?: number
  price?: number
  isFree: boolean
  requiresReservation: boolean
  host?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string | null
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

export interface OperatingHours {
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  sunday: string
}

export interface SiteConfig {
  // ── Branding ──────────────────────────────────────────────
  name: string
  tagline: string
  description: string
  logo: string | null
  favicon: string

  // ── Contact & Location ────────────────────────────────────
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
  socialLinks: {
    instagram?: string
    facebook?: string
    twitter?: string
    tiktok?: string
  }

  // ── Email ─────────────────────────────────────────────────
  notifyEmail: string
  fromEmail: string

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
    siteUrl: string
  }

  // ── Theme ─────────────────────────────────────────────────
  defaultTheme: Season
  autoDetectSeason: boolean

  // ── Feature Toggles ───────────────────────────────────────
  features: {
    onlineOrdering: boolean
    loyaltyProgram: boolean
    catering: boolean
    blog: boolean
    events: boolean
    gallery: boolean
    newsletter: boolean
  }

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    image: string
    imageAlt: string
    headline: string[]
    subheadline: string
    primaryCTA: { label: string; href: string }
    secondaryCTA: { label: string; href: string }
    seasonal: {
      spring: string
      summer: string
      autumn: string
      winter: string
    }
  }

  // ── Story Section ─────────────────────────────────────────
  story: {
    image: string
    imageAlt: string
    estYear: string
    yearsServing: string
    headline: string
    paragraphs: string[]
    values: {
      icon: "Coffee" | "Leaf" | "Heart"
      title: string
      description: string
    }[]
  }

  // ── Menu ──────────────────────────────────────────────────
  menuCategories: string[]
  dietaryOptions: string[]
  menuItems: MenuItem[]

  // ── Featured Drinks (shown on home page) ──────────────────
  featuredDrinkIds: string[]

  // ── Gallery ───────────────────────────────────────────────
  galleryCategories: string[]
  gallery: GalleryItem[]

  // ── Events ────────────────────────────────────────────────
  events: CafeEvent[]

  // ── Team ──────────────────────────────────────────────────
  team: TeamMember[]

  // ── Catering ──────────────────────────────────────────────
  cateringPackages: CateringPackage[]

  // ── Loyalty Program ───────────────────────────────────────
  loyaltyTiers: LoyaltyTier[]

  // ── Currency ──────────────────────────────────────────────
  currency: { code: string; symbol: string }

  // ── Order Settings ────────────────────────────────────────
  orderSettings: {
    minPickupTime: number
    maxAdvanceOrderDays: number
    acceptsDelivery: boolean
    deliveryFee: number
    freeDeliveryMinimum: number
  }
}

export const siteConfig: SiteConfig = {

  // ── Branding ──────────────────────────────────────────────
  name:        "Brew & Bloom",
  tagline:     "Where Coffee Meets Nature",
  description: "A botanical café experience where artisanal coffee and fresh blooms create a sanctuary for the senses. Join us for seasonal drinks, fresh pastries, and moments of tranquility.",
  logo:        null,
  favicon:     "/favicon.ico",

  // ── Contact & Location ────────────────────────────────────
  address: {
    street:  "123 Garden Grove Lane",
    city:    "Portland",
    state:   "OR",
    zip:     "97201",
    country: "USA",
  },
  phone: "(503) 555-BREW",
  email: "hello@brewandbloom.com",
  hours: {
    monday:    "7:00 AM - 7:00 PM",
    tuesday:   "7:00 AM - 7:00 PM",
    wednesday: "7:00 AM - 7:00 PM",
    thursday:  "7:00 AM - 8:00 PM",
    friday:    "7:00 AM - 9:00 PM",
    saturday:  "8:00 AM - 9:00 PM",
    sunday:    "8:00 AM - 6:00 PM",
  },
  socialLinks: {
    instagram: "https://instagram.com/brewandbloom",
    facebook:  "https://facebook.com/brewandbloom",
    twitter:   "https://twitter.com/brewandbloom",
    tiktok:    "https://tiktok.com/@brewandbloom",
  },

  // ── Email ─────────────────────────────────────────────────
  notifyEmail: process.env.NOTIFY_EMAIL ?? "",
  fromEmail:   process.env.FROM_EMAIL ?? "",

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title:       "Brew & Bloom | Where Coffee Meets Nature",
    description: "Experience artisanal coffee in a botanical sanctuary. Seasonal drinks, fresh pastries, and a blooming atmosphere await at Brew & Bloom.",
    keywords:    ["café", "coffee shop", "botanical café", "artisan coffee", "Portland café", "seasonal menu"],
    ogImage:     "/images/og-image.jpg",
    siteUrl:     "https://brewandbloom.com",
  },

  // ── Theme ─────────────────────────────────────────────────
  defaultTheme:     "spring",
  autoDetectSeason: true,

  // ── Features ──────────────────────────────────────────────
  features: {
  onlineOrdering: true,
  loyaltyProgram: false,  // ← changed
  catering:       false,  // ← changed
  blog:           true,
  events:         true,
  gallery:        true,
  newsletter:     true,
},

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    image:        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
    imageAlt:     "Brew & Bloom café interior",
    headline:     ["Where Coffee", "Meets Nature"],
    subheadline:  "A botanical café experience where artisanal coffee and fresh blooms create a sanctuary for the senses.",
    primaryCTA:   { label: "Order Now",  href: "/order" },
    secondaryCTA: { label: "View Menu",  href: "/menu" },
    seasonal: {
      spring: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
      summer: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1920&q=80",
      autumn: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
      winter: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1920&q=80",
    },
  },

  // ── Story Section ─────────────────────────────────────────
  story: {
    image:        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    imageAlt:     "Brew & Bloom café interior",
    estYear:      "2019",
    yearsServing: "5+",
    headline:     "Where Every Cup Tells a Story",
    paragraphs: [
      "Brew & Bloom was born from a simple dream: to create a space where the art of coffee meets the beauty of nature. What started as a small corner café has blossomed into a beloved community gathering place.",
      "Our founder, Elena Rosewood, envisioned a sanctuary where every visit feels like a garden retreat. Today, we continue that vision with seasonal menus that celebrate nature's rhythms and botanical touches that bring tranquility to every corner.",
    ],
    values: [
      {
        icon:        "Coffee",
        title:       "Artisan Craft",
        description: "Every cup is handcrafted with precision and care using beans roasted locally.",
      },
      {
        icon:        "Leaf",
        title:       "Nature Inspired",
        description: "Our botanical touches bring the garden indoors, creating a sanctuary of calm.",
      },
      {
        icon:        "Heart",
        title:       "Community First",
        description: "We're more than a café - we're a gathering place for our neighborhood.",
      },
    ],
  },

  // ── Menu ──────────────────────────────────────────────────
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
  dietaryOptions: ["Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Sugar-Free"],

  menuItems: [
    // ── Signature Drinks ──
    {
      id:          "lavender-latte",
      name:        "Lavender Honey Latte",
      description: "House-made lavender syrup, local honey, and steamed oat milk over a double shot of espresso.",
      price:       6.50,
      category:    "Signature Drinks",
      image:       "https://media.istockphoto.com/id/1396335735/photo/a-cup-of-lavender-moon-tea-latte-with-mousse-of-milk.webp?a=1&b=1&s=612x612&w=0&k=20&c=qHWurviCSnmR9SonuU6oEgaEL2bnLvFn--K3X1LA_vE=",
      tags:        ["Vegan", "Best Seller"],
      featured:    true,
      available:   true,
      customizations: {
        milkOptions: ["Oat Milk", "Almond Milk", "Whole Milk", "Coconut Milk"],
        sizeOptions: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        extras:      ["Extra Shot", "Extra Syrup", "Whipped Cream"],
      },
    },
    {
      id:          "rose-cold-brew",
      name:        "Rose Cold Brew",
      description: "24-hour steeped cold brew infused with rose water and a hint of cardamom, served over ice.",
      price:       7.00,
      category:    "Signature Drinks",
      image:       "https://media.istockphoto.com/id/1330459358/photo/layered-flavors-in-a-cold-cup-of-delicious.webp?a=1&b=1&s=612x612&w=0&k=20&c=22XUJhJ1pDTD83QDoy1OP1BPtnx3aHMzQ3NRxjX9O8Q=",
      tags:        ["Vegan", "Dairy-Free", "Cold"],
      featured:    true,
      available:   true,
      customizations: {
        milkOptions: ["None", "Oat Milk", "Almond Milk"],
        sizeOptions: ["Medium (12oz)", "Large (16oz)"],
        extras:      ["Extra Shot", "Sweet Cream"],
      },
    },
    {
      id:          "botanical-matcha",
      name:        "Botanical Matcha",
      description: "Ceremonial grade matcha whisked with butterfly pea flower and vanilla oat milk.",
      price:       6.75,
      category:    "Signature Drinks",
      image:       "https://images.unsplash.com/photo-1565117711038-1e0a80eed005?w=800&q=80",
      tags:        ["Vegan", "Gluten-Free", "Best Seller"],
      featured:    true,
      available:   true,
      customizations: {
        milkOptions: ["Oat Milk", "Almond Milk", "Whole Milk"],
        sizeOptions: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
        extras:      ["Extra Matcha", "Vanilla Syrup", "Honey"],
      },
    },
    {
      id:          "wildflower-lemonade",
      name:        "Wildflower Lemonade",
      description: "House-pressed lemonade with elderflower syrup, fresh mint, and edible flowers.",
      price:       5.50,
      category:    "Signature Drinks",
      image:       "https://media.istockphoto.com/id/481337328/photo/mint-lemonade.webp?a=1&b=1&s=612x612&w=0&k=20&c=eON0mu0WClLpD2yscYEFbAimLbiMz_c9F1f6GqZ7NR8=",
      tags:        ["Vegan", "Dairy-Free", "Gluten-Free"],
      featured:    false,
      available:   true,
    },

    // ── Classic Coffee ──
    {
      id:          "espresso",
      name:        "Espresso",
      description: "Single or double shot of our house-blend espresso, sourced from small-batch roasters.",
      price:       3.50,
      category:    "Classic Coffee",
      image:       "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
      tags:        ["Vegan", "Dairy-Free"],
      featured:    false,
      available:   true,
      customizations: {
        sizeOptions: ["Single Shot", "Double Shot"],
      },
    },
    {
      id:          "cappuccino",
      name:        "Cappuccino",
      description: "Equal parts espresso, steamed milk, and velvety foam. A timeless classic.",
      price:       5.00,
      category:    "Classic Coffee",
      image:       "https://images.unsplash.com/photo-1708430651927-20e2e1f1e8f7?w=800&q=80",
      tags:        [],
      featured:    false,
      available:   true,
      customizations: {
        milkOptions: ["Whole Milk", "Oat Milk", "Almond Milk", "Coconut Milk"],
        sizeOptions: ["Small (6oz)", "Medium (8oz)"],
        extras:      ["Extra Shot", "Chocolate Powder", "Cinnamon"],
      },
    },
    {
      id:          "cold-brew",
      name:        "Classic Cold Brew",
      description: "Slow-steeped for 24 hours for a smooth, naturally sweet concentrate.",
      price:       5.50,
      category:    "Classic Coffee",
      image:       "https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=800&q=80",
      tags:        ["Vegan", "Dairy-Free"],
      featured:    false,
      available:   true,
      customizations: {
        milkOptions: ["None", "Oat Milk", "Almond Milk", "Whole Milk"],
        sizeOptions: ["Medium (12oz)", "Large (16oz)"],
        extras:      ["Vanilla Syrup", "Sweet Cream", "Extra Shot"],
      },
    },

    // ── Tea & Botanicals ──
    {
      id:          "chamomile-bloom",
      name:        "Chamomile Bloom Tea",
      description: "Loose-leaf chamomile with dried lavender and rose petals. Served hot or iced.",
      price:       4.50,
      category:    "Tea & Botanicals",
      image:       "https://images.unsplash.com/photo-1632639521806-cead484cc369?w=800&q=80",
      tags:        ["Vegan", "Dairy-Free", "Gluten-Free", "Caffeine-Free"],
      featured:    false,
      available:   true,
      customizations: {
        sizeOptions: ["Small (8oz)", "Large (16oz)"],
        extras:      ["Honey", "Lemon"],
      },
    },
    {
      id:          "butterfly-pea-tea",
      name:        "Butterfly Pea Flower Tea",
      description: "A magical color-changing tea that shifts from blue to purple with a squeeze of lemon.",
      price:       5.00,
      category:    "Tea & Botanicals",
      image:       "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      tags:        ["Vegan", "Dairy-Free", "Caffeine-Free"],
      featured:    true,
      available:   true,
    },

    // ── Seasonal Specials ──
    {
      id:          "cherry-blossom-latte",
      name:        "Cherry Blossom Latte",
      description: "A spring-only creation with cherry blossom syrup, white chocolate, and steamed milk.",
      price:       7.25,
      category:    "Seasonal Specials",
      image:       "https://media.istockphoto.com/id/1347028817/photo/drawings-on-coffee-male-and-female-cappuccino-decoration-hot-drink-in-a-paper-cup-picture-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=sFOTpHzkN8TRGBghSHXv8YGkRNvETRhSY5XsErpUvoI=",
      tags:        ["Spring Only", "Best Seller"],
      featured:    true,
      available:   true,
      customizations: {
        milkOptions: ["Oat Milk", "Whole Milk", "Almond Milk"],
        sizeOptions: ["Medium (12oz)", "Large (16oz)"],
        extras:      ["Extra Shot", "Whipped Cream"],
      },
    },

    // ── Fresh Pastries ──
    {
      id:          "lavender-scone",
      name:        "Lavender Honey Scone",
      description: "Buttery scone infused with lavender and drizzled with local wildflower honey.",
      price:       4.25,
      category:    "Fresh Pastries",
      image:       "https://images.unsplash.com/photo-1731685009078-72a29bec9719?w=800&q=80",
      tags:        ["Vegetarian"],
      featured:    true,
      available:   true,
    },
    {
      id:          "matcha-croissant",
      name:        "Matcha Almond Croissant",
      description: "Flaky butter croissant filled with matcha frangipane and topped with sliced almonds.",
      price:       4.75,
      category:    "Fresh Pastries",
      image:       "https://media.istockphoto.com/id/2191181217/photo/pistachio-croissant.webp?a=1&b=1&s=612x612&w=0&k=20&c=rkUbohOhwZSF3NZAa38KttGhuy3QApgIKMjp0UWvnB8=",
      tags:        ["Vegetarian"],
      featured:    false,
      available:   true,
    },
    {
      id:          "vegan-banana-bread",
      name:        "Vegan Banana Walnut Bread",
      description: "Moist banana bread made with flax eggs and coconut oil, studded with toasted walnuts.",
      price:       4.00,
      category:    "Fresh Pastries",
      image:       "https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=800&q=80",
      tags:        ["Vegan"],
      featured:    false,
      available:   true,
    },

    // ── Breakfast ──
    {
      id:          "avocado-toast",
      name:        "Botanical Avocado Toast",
      description: "Smashed avocado on sourdough with edible flowers, microgreens, and everything seasoning.",
      price:       12.00,
      category:    "Breakfast",
      image:       "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80",
      tags:        ["Vegan", "Best Seller"],
      featured:    false,
      available:   true,
    },
    {
      id:          "acai-bowl",
      name:        "Garden Açai Bowl",
      description: "Thick açai base topped with seasonal fruit, house-made granola, and edible flowers.",
      price:       13.50,
      category:    "Breakfast",
      image:       "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
      tags:        ["Vegan", "Gluten-Free"],
      featured:    false,
      available:   true,
    },

    // ── Lunch ──
    {
      id:          "garden-sandwich",
      name:        "Garden Fresh Sandwich",
      description: "Herbed cream cheese, cucumber, roasted beet, and sprouts on house-baked focaccia.",
      price:       14.00,
      category:    "Lunch",
      image:       "https://media.istockphoto.com/id/480821023/photo/healthy-veggie-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=G2KPi1MgTiwTlcY6NxeYfWm4ckdKLxvIwxpcPvYyelY=",
      tags:        ["Vegetarian"],
      featured:    false,
      available:   true,
    },
    {
      id:          "bloom-salad",
      name:        "Bloom Garden Salad",
      description: "Seasonal greens, edible flowers, candied walnuts, goat cheese, and honey vinaigrette.",
      price:       15.00,
      category:    "Lunch",
      image:       "https://media.istockphoto.com/id/2246475168/photo/mixed-greens-salad-with-edible-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=UJW253L2GRIbMgT9BI70redLoQSIhmZnczJHDOwFzfM=",
      tags:        ["Vegetarian", "Gluten-Free"],
      featured:    false,
      available:   true,
    },

    // ── Desserts ──
    {
      id:          "rose-cheesecake",
      name:        "Rose Pistachio Cheesecake",
      description: "Creamy cheesecake with rose water filling on a pistachio crust, garnished with dried petals.",
      price:       8.50,
      category:    "Desserts",
      image:       "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
      tags:        ["Vegetarian", "Best Seller"],
      featured:    true,
      available:   true,
    },
  ],

  // ── Featured Drinks (home page) ───────────────────────────
  featuredDrinkIds: [
    "lavender-latte",
    "rose-cold-brew",
    "botanical-matcha",
    "cherry-blossom-latte",
  ],

  // ── Gallery ───────────────────────────────────────────────
  // To swap photos: just replace the image URL. Recommended size: 800x600px.
  // Categories: "interior" | "food" | "drinks" | "events" | "team" | "seasonal"
  galleryCategories: ["All", "Interior", "Drinks", "Food", "Events", "Seasonal"],
  gallery: [
    // ── Interior ──
    {
      id:       "interior-1",
      image:    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
      alt:      "Main seating area with hanging plants and natural light",
      category: "Interior",
      caption:  "Our main seating area bathed in natural light",
      featured: true,
    },
    {
      id:       "interior-2",
      image:    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
      alt:      "Coffee bar with espresso machine and botanical display",
      category: "Interior",
      caption:  "The heart of Brew & Bloom — our coffee bar",
    },
    {
      id:       "interior-3",
      image:    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
      alt:      "Cozy reading corner with vintage armchairs",
      category: "Interior",
      caption:  "Our favorite reading nook",
    },
    {
      id:       "interior-4",
      image:    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80",
      alt:      "Window seating with view of garden",
      category: "Interior",
    },

    // ── Drinks ──
    {
      id:       "drinks-1",
      image:    "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
      alt:      "Lavender latte with rose petals",
      category: "Drinks",
      caption:  "Our signature Lavender Honey Latte",
      featured: true,
    },
    {
      id:       "drinks-2",
      image:    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      alt:      "Intricate latte art rosetta",
      category: "Drinks",
      caption:  "Every cup is a work of art",
    },
    {
      id:       "drinks-3",
      image:    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      alt:      "Tropical cold brew with coconut",
      category: "Drinks",
      caption:  "Rose Cold Brew with cardamom",
    },
    {
      id:       "drinks-4",
      image:    "https://images.unsplash.com/photo-1565117711038-1e0a80eed005?w=800&q=80",
      alt:      "Ceremonial matcha in ceramic bowl",
      category: "Drinks",
      caption:  "Ceremonial grade matcha",
    },

    // ── Food ──
    {
      id:       "food-1",
      image:    "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80",
      alt:      "Garden avocado toast with microgreens and edible flowers",
      category: "Food",
      caption:  "Botanical Avocado Toast",
      featured: true,
    },
    {
      id:       "food-2",
      image:    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80",
      alt:      "Fresh pastry display",
      category: "Food",
      caption:  "Baked fresh every morning",
    },
    {
      id:       "food-3",
      image:    "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
      alt:      "Garden açai bowl with fresh berries",
      category: "Food",
      caption:  "Garden Açai Bowl",
    },
    {
      id:       "food-4",
      image:    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
      alt:      "Rose pistachio cheesecake slice",
      category: "Food",
      caption:  "Rose Pistachio Cheesecake",
    },

    // ── Events ──
    {
      id:       "events-1",
      image:    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      alt:      "Jazz trio performing at evening event",
      category: "Events",
      caption:  "Jazz night in the garden",
      featured: true,
    },
    {
      id:       "events-2",
      image:    "https://images.unsplash.com/photo-1526389157-6a5cc2bb4afa?w=800&q=80",
      alt:      "Latte art workshop in progress",
      category: "Events",
      caption:  "Monthly latte art workshops",
    },
    {
      id:       "events-3",
      image:    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      alt:      "Coffee cupping session",
      category: "Events",
      caption:  "Monthly origin tastings",
    },

    // ── Seasonal ──
    {
      id:       "seasonal-1",
      image:    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      alt:      "Spring cherry blossom decorations",
      category: "Seasonal",
      caption:  "Spring at Brew & Bloom",
      featured: true,
    },
    {
      id:       "seasonal-2",
      image:    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      alt:      "Summer garden patio",
      category: "Seasonal",
      caption:  "Summer vibes on the patio",
    },
    {
      id:       "seasonal-3",
      image:    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
      alt:      "Autumn harvest decorations",
      category: "Seasonal",
      caption:  "Autumn harvest celebration",
    },
    {
      id:       "seasonal-4",
      image:    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80",
      alt:      "Cozy winter ambiance with fairy lights",
      category: "Seasonal",
      caption:  "Winter wonderland indoors",
    },
  ],

  // ── Events ────────────────────────────────────────────────
  // To swap event images: replace the image URL. Use null for no image (shows gradient placeholder).
  events: [
    {
      id:          "spring-menu-launch",
      title:       "Spring Menu Launch Party",
      description: "Be the first to taste our new Cherry Blossom Latte and Spring Garden specialties",
      longDescription: "Join us as we unveil our spring menu featuring delicate floral flavors and fresh seasonal ingredients. Enjoy complimentary samples, live acoustic music, and a chance to win free drinks for a month!",
      date:        "2026-03-21",
      startTime:   "5:00 PM",
      endTime:     "8:00 PM",
      type:        "seasonal",
      image:       "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      capacity:    50,
      isFree:      true,
      requiresReservation: true,
    },
    {
      id:          "latte-art-workshop-march",
      title:       "Latte Art Workshop",
      description: "Learn the basics of pouring beautiful latte art with our head barista",
      longDescription: "In this hands-on workshop, you'll learn the fundamentals of steaming milk and pouring basic latte art designs including hearts, tulips, and rosettas. All materials provided, and you take home a pound of our house blend!",
      date:        "2026-03-28",
      startTime:   "10:00 AM",
      endTime:     "12:00 PM",
      type:        "workshop",
      image:       "https://images.unsplash.com/photo-1526389157-6a5cc2bb4afa?w=800&q=80",
      capacity:    12,
      price:       45,
      isFree:      false,
      requiresReservation: true,
      host:        "Elena Rosewood",
    },
    {
      id:          "jazz-night-april",
      title:       "Jazz in the Garden",
      description: "Live jazz trio performing smooth spring melodies",
      date:        "2026-04-04",
      startTime:   "7:00 PM",
      endTime:     "10:00 PM",
      type:        "music",
      image:       "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      isFree:      true,
      requiresReservation: false,
    },
    {
      id:          "plant-swap",
      title:       "Community Plant Swap",
      description: "Bring a plant, take a plant! Connect with fellow plant lovers",
      longDescription: "Our semi-annual plant swap is back! Bring your plant cuttings, seedlings, or potted plants to trade with other green thumbs. Our floral designer Sofia will be offering free repotting tips.",
      date:        "2026-04-12",
      startTime:   "11:00 AM",
      endTime:     "3:00 PM",
      type:        "community",
      image:       "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      isFree:      true,
      requiresReservation: false,
    },
    {
      id:          "coffee-origins-april",
      title:       "Coffee Origins: Ethiopia Tasting",
      description: "Explore the birthplace of coffee with a guided tasting flight",
      longDescription: "Journey to Ethiopia, the birthplace of coffee, through our curated tasting flight featuring three distinct Ethiopian origins. Learn about processing methods, flavor profiles, and brewing techniques.",
      date:        "2026-04-19",
      startTime:   "2:00 PM",
      endTime:     "4:00 PM",
      type:        "tasting",
      image:       "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      capacity:    20,
      price:       35,
      isFree:      false,
      requiresReservation: true,
      host:        "Elena Rosewood",
    },
    {
      id:          "acoustic-evening-april",
      title:       "Acoustic Evening",
      description: "Local singer-songwriters showcase their original music",
      date:        "2026-04-25",
      startTime:   "7:00 PM",
      endTime:     "9:30 PM",
      type:        "music",
      image:       "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80",
      isFree:      true,
      requiresReservation: false,
    },
    {
      id:          "mothers-day-brunch",
      title:       "Mother's Day Botanical Brunch",
      description: "Treat mom to a special brunch surrounded by blooms",
      longDescription: "Celebrate the special women in your life with our prix-fixe brunch menu featuring seasonal dishes, bottomless mimosas, and live harp music. Each mom receives a complimentary succulent arrangement.",
      date:        "2026-05-10",
      startTime:   "10:00 AM",
      endTime:     "2:00 PM",
      type:        "seasonal",
      image:       "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
      capacity:    40,
      price:       55,
      isFree:      false,
      requiresReservation: true,
    },
    {
      id:          "terrarium-workshop",
      title:       "DIY Terrarium Workshop",
      description: "Create your own mini garden with our floral designer",
      longDescription: "Learn the art of terrarium building with our in-house floral designer Sofia. Choose from a variety of succulents, moss, and decorative elements to create your own mini ecosystem. All materials included.",
      date:        "2026-05-17",
      startTime:   "3:00 PM",
      endTime:     "5:00 PM",
      type:        "workshop",
      image:       "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      capacity:    15,
      price:       65,
      isFree:      false,
      requiresReservation: true,
      host:        "Sofia Mendez",
    },
    {
      id:          "poetry-open-mic",
      title:       "Poetry & Pour Over",
      description: "Open mic poetry night with featured poet",
      date:        "2026-05-23",
      startTime:   "6:30 PM",
      endTime:     "9:00 PM",
      type:        "community",
      image:       "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      isFree:      true,
      requiresReservation: false,
    },
    {
      id:          "summer-menu-launch",
      title:       "Summer Sips Launch",
      description: "Cool down with our new tropical and refreshing summer drinks",
      date:        "2026-06-20",
      startTime:   "4:00 PM",
      endTime:     "8:00 PM",
      type:        "seasonal",
      image:       "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      isFree:      true,
      requiresReservation: false,
    },
    {
      id:          "cold-brew-class",
      title:       "Cold Brew Masterclass",
      description: "Learn to make perfect cold brew at home",
      longDescription: "Discover the secrets to crafting smooth, flavorful cold brew coffee at home. We'll cover different brewing methods, ratios, and infusion techniques. Take home a cold brew kit!",
      date:        "2026-06-27",
      startTime:   "11:00 AM",
      endTime:     "1:00 PM",
      type:        "workshop",
      image:       "https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=800&q=80",
      capacity:    12,
      price:       40,
      isFree:      false,
      requiresReservation: true,
      host:        "Elena Rosewood",
    },
    {
      id:          "summer-movie-night",
      title:       "Garden Movie Night",
      description: "Outdoor screening of a classic film under the stars",
      date:        "2026-07-18",
      startTime:   "8:30 PM",
      endTime:     "11:00 PM",
      type:        "community",
      image:       "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      isFree:      true,
      requiresReservation: true,
      capacity:    60,
    },
  ],

  // ── Team ──────────────────────────────────────────────────
  team: [
    {
      id:    "1",
      name:  "Elena Rosewood",
      role:  "Founder & Head Barista",
      bio:   "With 15 years of coffee expertise and a passion for botanical arts, Elena created Brew & Bloom as a sanctuary where nature and coffee culture intertwine.",
      image: "https://images.unsplash.com/photo-1693846720589-48d7981a667e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alan-morales-2kjtYWFgvvo-unsplash.jpg",
    },
    {
      id:    "2",
      name:  "Marcus Chen",
      role:  "Head Chef",
      bio:   "Marcus brings farm-to-table philosophy to every dish, sourcing ingredients from local gardens and creating seasonal menus that celebrate nature's bounty.",
      image: "https://images.unsplash.com/photo-1599548713969-3460f26dc07e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=azhar-khairi-ZP1WazcIGBA-unsplash.jpg",
    },
    {
      id:    "3",
      name:  "Sofia Mendez",
      role:  "Floral Designer",
      bio:   "Sofia curates our botanical installations and ensures every corner of Brew & Bloom blooms with seasonal beauty and natural harmony.",
      image: "https://images.unsplash.com/photo-1677715156712-68fd84957185?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=lance-reis-gF-_p91sd5w-unsplash.jpg",
    },
    {
      id:    "4",
      name:  "James Wright",
      role:  "Events Coordinator",
      bio:   "James orchestrates our workshops, live music nights, and private events, creating memorable experiences that bring our community together.",
      image: "https://images.unsplash.com/photo-1696992443078-ee65259e56e6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=maria-fernanda-pissioli-StsZKCueRy8-unsplash.jpg",
    },
  ],

  // ── Catering Packages ─────────────────────────────────────
  cateringPackages: [
    {
      id:             "intimate",
      name:           "Garden Gathering",
      description:    "Perfect for small meetings, book clubs, or intimate celebrations.",
      minGuests:      8,
      maxGuests:      20,
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
      id:             "corporate",
      name:           "Bloom & Business",
      description:    "Elevate your corporate events with artisanal refreshments.",
      minGuests:      20,
      maxGuests:      50,
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
      id:             "celebration",
      name:           "Botanical Celebration",
      description:    "Create unforgettable moments for weddings, showers, and milestone events.",
      minGuests:      30,
      maxGuests:      100,
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

  // ── Loyalty Tiers ─────────────────────────────────────────
  loyaltyTiers: [
    {
      name:            "Seedling",
      pointsRequired:  0,
      benefits:        ["1 point per $1 spent", "Birthday reward", "Early access to seasonal menus"],
      color:           "#9DC183",
    },
    {
      name:            "Sprout",
      pointsRequired:  200,
      benefits:        ["1.25 points per $1 spent", "Free drink size upgrade", "Monthly surprise treat", "Exclusive member events"],
      color:           "#7CB342",
    },
    {
      name:            "Blossom",
      pointsRequired:  500,
      benefits:        ["1.5 points per $1 spent", "Free pastry every visit", "Priority event seating", "20% off merchandise"],
      color:           "#F8B4C4",
    },
    {
      name:            "Full Bloom",
      pointsRequired:  1000,
      benefits:        ["2 points per $1 spent", "Complimentary drink daily", "Private tasting invitations", "Annual catering discount", "Name a seasonal drink"],
      color:           "#FFD700",
    },
  ],

  // ── Currency ──────────────────────────────────────────────
  currency: { code: "USD", symbol: "$" },

  // ── Order Settings ────────────────────────────────────────
  orderSettings: {
    minPickupTime:       15,
    maxAdvanceOrderDays: 7,
    acceptsDelivery:     true,
    deliveryFee:         5,
    freeDeliveryMinimum: 35,
  },
}

// ── Helpers ───────────────────────────────────────────────────

export function getCurrentSeason(): Season {
  const month = new Date().getMonth()
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  if (month >= 8 && month <= 10) return "autumn"
  return "winter"
}

export function getFullAddress(): string {
  const { street, city, state, zip } = siteConfig.address
  return `${street}, ${city}, ${state} ${zip}`
}

export function formatPrice(price: number): string {
  return `${siteConfig.currency.symbol}${price.toFixed(2)}`
}

export function getFeaturedItems() {
  return siteConfig.featuredDrinkIds
    .map(id => siteConfig.menuItems.find(item => item.id === id))
    .filter(Boolean)
}

export function getMenuByCategory() {
  return siteConfig.menuCategories.reduce((acc, cat) => {
    acc[cat] = siteConfig.menuItems.filter(item => item.category === cat && item.available)
    return acc
  }, {} as Record<string, typeof siteConfig.menuItems>)
}

export function getUpcomingEvents(limit?: number) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcoming = siteConfig.events
    .filter(e => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return limit ? upcoming.slice(0, limit) : upcoming
}

export const eventTypeLabels: Record<string, string> = {
  music:     "Live Music",
  workshop:  "Workshop",
  tasting:   "Tasting",
  seasonal:  "Seasonal",
  community: "Community",
}

export const eventTypeColors: Record<string, string> = {
  music:     "bg-purple-100 text-purple-800",
  workshop:  "bg-blue-100 text-blue-800",
  tasting:   "bg-amber-100 text-amber-800",
  seasonal:  "bg-green-100 text-green-800",
  community: "bg-rose-100 text-rose-800",
}