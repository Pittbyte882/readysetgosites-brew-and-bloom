export type Season = "spring" | "summer" | "autumn" | "winter"

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string | null
  tags: string[]          // e.g. ["Vegan", "Gluten-Free"]
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
  category: string        // e.g. "Drinks", "Food", "Space", "Events"
  caption?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string            // ISO string e.g. "2025-04-12"
  time: string            // e.g. "6:00 PM - 8:00 PM"
  image: string | null
  price: number | null    // null = free
  capacity: number | null // null = unlimited
  category: string        // e.g. "Workshop", "Live Music", "Tasting"
  registrationRequired: boolean
  registrationLink?: string
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
  events: Event[]

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
    loyaltyProgram: true,
    catering:       true,
    blog:           true,
    events:         true,
    gallery:        true,
    newsletter:     true,
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    image:       "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
    imageAlt:    "Brew & Bloom café interior",
    headline:    ["Where Coffee", "Meets Nature"],
    subheadline: "A botanical café experience where artisanal coffee and fresh blooms create a sanctuary for the senses.",
    primaryCTA:  { label: "Order Now", href: "/order" },
    secondaryCTA:{ label: "View Menu", href: "/menu" },
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
      image:       "https://images.unsplash.com/photo-1565117711038-1e0a80eed005?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alice-pasqual-u_8m7fCJQmw-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jeremy-yap-jn-HaGWe4yw-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1531835207745-506a1bc035d8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nathan-dumlao-_Wm6mhXO9rk-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1632639521806-cead484cc369?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=catia-climovich-iiiq__zzdI8-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1708455398647-9f79425512fa?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=abhishek-sapkal-Qnop6E82XnE-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1731685009078-72a29bec9719?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=gennady-zakharin-TWRG5dx2Ebo-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1632931057819-4eefffa8e007?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=cody-chan-a0fBbS8RZAo-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1650092194571-d3c1534562be?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jasper-gribble-8RxCzAKmSOA-unsplash.jpg",
      tags:        ["Vegan", "Best Seller"],
      featured:    false,
      available:   true,
    },
    {
      id:          "açai-bowl",
      name:        "Garden Açai Bowl",
      description: "Thick açai base topped with seasonal fruit, house-made granola, and edible flowers.",
      price:       13.50,
      category:    "Breakfast",
      image:       "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=david-foodphototasty-zhkhwGrqilw-unsplash.jpg",
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
      image:       "https://images.unsplash.com/photo-1716579866950-54abe7d4286f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=aleksandra-gencheva-N9pb8kJ1nsI-unsplash.jpg",
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
  galleryCategories: ["All", "Drinks", "Food", "Space", "Events"],
  gallery: [
    { id: "g1",  image: "/images/gallery/latte-art.jpg",     alt: "Lavender latte art",          category: "Drinks",  caption: "Our signature lavender honey latte" },
    { id: "g2",  image: "/images/gallery/cafe-interior.jpg", alt: "Café interior",               category: "Space",   caption: "The main dining room in spring" },
    { id: "g3",  image: "/images/gallery/pastries.jpg",      alt: "Fresh pastry selection",      category: "Food",    caption: "Freshly baked every morning" },
    { id: "g4",  image: "/images/gallery/cold-brew.jpg",     alt: "Rose cold brew",              category: "Drinks",  caption: "Rose cold brew with cardamom" },
    { id: "g5",  image: "/images/gallery/garden.jpg",        alt: "Outdoor garden seating",      category: "Space",   caption: "Our bloom garden terrace" },
    { id: "g6",  image: "/images/gallery/workshop.jpg",      alt: "Latte art workshop",          category: "Events",  caption: "Monthly latte art workshops" },
    { id: "g7",  image: "/images/gallery/matcha.jpg",        alt: "Botanical matcha",            category: "Drinks",  caption: "Butterfly pea flower matcha" },
    { id: "g8",  image: "/images/gallery/avocado-toast.jpg", alt: "Botanical avocado toast",     category: "Food",    caption: "Garden fresh avocado toast" },
    { id: "g9",  image: "/images/gallery/bar.jpg",           alt: "The coffee bar",              category: "Space",   caption: "Where the magic happens" },
    { id: "g10", image: "/images/gallery/cheesecake.jpg",    alt: "Rose pistachio cheesecake",   category: "Food",    caption: "Our most requested dessert" },
    { id: "g11", image: "/images/gallery/tasting.jpg",       alt: "Seasonal tasting event",      category: "Events",  caption: "Autumn harvest tasting evening" },
    { id: "g12", image: "/images/gallery/flowers.jpg",       alt: "Fresh floral arrangements",   category: "Space",   caption: "Changed weekly by Sofia" },
  ],

  // ── Events ────────────────────────────────────────────────
  events: [
    {
      id:                   "latte-art-april",
      title:                "Latte Art Workshop",
      description:          "Learn the basics of milk steaming and latte art from our head barista. All skill levels welcome. Includes two practice drinks and a take-home guide.",
      date:                 "2025-04-12",
      time:                 "10:00 AM - 12:00 PM",
      image:                null,
      price:                45,
      capacity:             10,
      category:             "Workshop",
      registrationRequired: true,
      registrationLink:     "/contact",
    },
    {
      id:                   "spring-tasting",
      title:                "Spring Menu Tasting",
      description:          "Be the first to try our new spring menu. Enjoy tastings of 6 new drinks and 4 new food items paired with short descriptions from our head chef.",
      date:                 "2025-04-20",
      time:                 "3:00 PM - 5:00 PM",
      image:                null,
      price:                25,
      capacity:             20,
      category:             "Tasting",
      registrationRequired: true,
      registrationLink:     "/contact",
    },
    {
      id:                   "live-jazz-may",
      title:                "Jazz & Blooms Evening",
      description:          "Unwind with live jazz, seasonal cocktails, and a blooming café atmosphere. No cover charge — just great music and great coffee.",
      date:                 "2025-05-03",
      time:                 "6:00 PM - 9:00 PM",
      image:                null,
      price:                null,
      capacity:             null,
      category:             "Live Music",
      registrationRequired: false,
    },
    {
      id:                   "botanical-drawing",
      title:                "Botanical Drawing Class",
      description:          "Guided botanical illustration class with local artist Mia Harlow. Materials provided. Coffee and pastries included in the ticket price.",
      date:                 "2025-05-17",
      time:                 "11:00 AM - 2:00 PM",
      image:                null,
      price:                65,
      capacity:             8,
      category:             "Workshop",
      registrationRequired: true,
      registrationLink:     "/contact",
    },
  ],

  // ── Team ──────────────────────────────────────────────────
  team: [
    {
      id:    "1",
      name:  "Elena Rosewood",
      role:  "Founder & Head Barista",
      bio:   "With 15 years of coffee expertise and a passion for botanical arts, Elena created Brew & Bloom as a sanctuary where nature and coffee culture intertwine.",
      image: null,
    },
    {
      id:    "2",
      name:  "Marcus Chen",
      role:  "Head Chef",
      bio:   "Marcus brings farm-to-table philosophy to every dish, sourcing ingredients from local gardens and creating seasonal menus that celebrate nature's bounty.",
      image: null,
    },
    {
      id:    "3",
      name:  "Sofia Mendez",
      role:  "Floral Designer",
      bio:   "Sofia curates our botanical installations and ensures every corner of Brew & Bloom blooms with seasonal beauty and natural harmony.",
      image: null,
    },
    {
      id:    "4",
      name:  "James Wright",
      role:  "Events Coordinator",
      bio:   "James orchestrates our workshops, live music nights, and private events, creating memorable experiences that bring our community together.",
      image: null,
    },
  ],

  // ── Catering Packages ─────────────────────────────────────
  cateringPackages: [
    {
      id:              "intimate",
      name:            "Garden Gathering",
      description:     "Perfect for small meetings, book clubs, or intimate celebrations.",
      minGuests:       8,
      maxGuests:       20,
      pricePerPerson:  25,
      includes: [
        "Selection of 3 signature beverages",
        "Assorted pastry platter",
        "Fresh fruit display",
        "Botanical table centerpiece",
        "Dedicated service staff",
      ],
    },
    {
      id:              "corporate",
      name:            "Bloom & Business",
      description:     "Elevate your corporate events with artisanal refreshments.",
      minGuests:       20,
      maxGuests:       50,
      pricePerPerson:  35,
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
      id:              "celebration",
      name:            "Botanical Celebration",
      description:     "Create unforgettable moments for weddings, showers, and milestone events.",
      minGuests:       30,
      maxGuests:       100,
      pricePerPerson:  55,
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
      name:             "Seedling",
      pointsRequired:   0,
      benefits:         ["1 point per $1 spent", "Birthday reward", "Early access to seasonal menus"],
      color:            "#9DC183",
    },
    {
      name:             "Sprout",
      pointsRequired:   200,
      benefits:         ["1.25 points per $1 spent", "Free drink size upgrade", "Monthly surprise treat", "Exclusive member events"],
      color:            "#7CB342",
    },
    {
      name:             "Blossom",
      pointsRequired:   500,
      benefits:         ["1.5 points per $1 spent", "Free pastry every visit", "Priority event seating", "20% off merchandise"],
      color:            "#F8B4C4",
    },
    {
      name:             "Full Bloom",
      pointsRequired:   1000,
      benefits:         ["2 points per $1 spent", "Complimentary drink daily", "Private tasting invitations", "Annual catering discount", "Name a seasonal drink"],
      color:            "#FFD700",
    },
  ],

  // ── Currency ──────────────────────────────────────────────
  currency: { code: "USD", symbol: "$" },

  // ── Order Settings ────────────────────────────────────────
  orderSettings: {
    minPickupTime:        15,
    maxAdvanceOrderDays:  7,
    acceptsDelivery:      true,
    deliveryFee:          5,
    freeDeliveryMinimum:  35,
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

export function getUpcomingEvents() {
  const today = new Date().toISOString().split("T")[0]
  return siteConfig.events
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}