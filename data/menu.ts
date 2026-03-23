import type { Season } from "@/config/site"

export interface ItemCustomization {
  size?: "small" | "medium" | "large"
  milk?: "whole" | "skim" | "oat" | "almond" | "coconut" | "none"
  extras?: string[]
  specialInstructions?: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  basePrice: number
  category: string
  image: string
  seasons: Season[]
  dietary: string[]
  isSignature?: boolean
  isSeasonal?: boolean
  customizable?: boolean
  availableSizes?: ("small" | "medium" | "large")[]
  availableMilks?: ("whole" | "skim" | "oat" | "almond" | "coconut" | "none")[]
  availableExtras?: string[]
}

export const menuItems: MenuItem[] = [
  // Signature Drinks
  {
    id: "bloom-latte",
    name: "The Bloom Latte",
    description: "Our signature creation with lavender-infused espresso, vanilla, and steamed oat milk, topped with dried rose petals",
    basePrice: 6.50,
    category: "Signature Drinks",
    image: "/images/menu/bloom-latte.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan"],
    isSignature: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "vanilla", "lavender", "honey"],
  },
  {
    id: "garden-mocha",
    name: "Garden Mocha",
    description: "Rich espresso meets house-made botanical chocolate, with hints of mint and rose",
    basePrice: 6.00,
    category: "Signature Drinks",
    image: "/images/menu/garden-mocha.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    isSignature: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "whipped-cream", "vanilla"],
  },
  {
    id: "honey-bee",
    name: "The Honey Bee",
    description: "Smooth cold brew sweetened with local wildflower honey, a whisper of cinnamon, and topped with honeycomb crumbles",
    basePrice: 5.75,
    category: "Signature Drinks",
    image: "/images/menu/honey-bee.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Gluten-Free"],
    isSignature: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut", "none"],
    availableExtras: ["extra-shot", "honey", "vanilla"],
  },

  // Seasonal Spring Specials
  {
    id: "cherry-blossom-latte",
    name: "Cherry Blossom Latte",
    description: "Delicate cherry blossom syrup with espresso and steamed milk, crowned with sakura petals",
    basePrice: 7.00,
    category: "Seasonal Specials",
    image: "/images/menu/cherry-blossom.jpg",
    seasons: ["spring"],
    dietary: [],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "vanilla"],
  },
  {
    id: "spring-garden-tea",
    name: "Spring Garden Iced Tea",
    description: "Fresh jasmine green tea with elderflower, cucumber, and a touch of honey",
    basePrice: 5.00,
    category: "Seasonal Specials",
    image: "/images/menu/spring-tea.jpg",
    seasons: ["spring"],
    dietary: ["Vegan", "Gluten-Free"],
    isSeasonal: true,
    customizable: false,
  },

  // Seasonal Summer Specials
  {
    id: "tropical-cold-brew",
    name: "Tropical Paradise Cold Brew",
    description: "24-hour cold brew with coconut milk, passion fruit, and a hint of lime zest",
    basePrice: 6.50,
    category: "Seasonal Specials",
    image: "/images/menu/tropical-brew.jpg",
    seasons: ["summer"],
    dietary: ["Vegan", "Gluten-Free"],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["coconut", "oat", "almond", "none"],
    availableExtras: ["extra-shot"],
  },
  {
    id: "citrus-refresher",
    name: "Citrus Bloom Refresher",
    description: "Sparkling lemonade with lavender, orange blossom water, and fresh mint",
    basePrice: 5.50,
    category: "Seasonal Specials",
    image: "/images/menu/citrus-refresher.jpg",
    seasons: ["summer"],
    dietary: ["Vegan", "Gluten-Free"],
    isSeasonal: true,
    customizable: false,
  },

  // Seasonal Autumn Specials
  {
    id: "pumpkin-harvest",
    name: "Pumpkin Harvest Latte",
    description: "House-made pumpkin spice with espresso, maple syrup, and warming autumn spices",
    basePrice: 6.75,
    category: "Seasonal Specials",
    image: "/images/menu/pumpkin-latte.jpg",
    seasons: ["autumn"],
    dietary: [],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "whipped-cream", "caramel"],
  },
  {
    id: "apple-cider-chai",
    name: "Apple Cider Chai",
    description: "Spiced chai with fresh apple cider, cinnamon, and a caramel drizzle",
    basePrice: 6.25,
    category: "Seasonal Specials",
    image: "/images/menu/apple-chai.jpg",
    seasons: ["autumn"],
    dietary: ["Gluten-Free"],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "oat", "almond"],
    availableExtras: ["extra-shot", "caramel", "whipped-cream"],
  },

  // Seasonal Winter Specials
  {
    id: "gingerbread-latte",
    name: "Gingerbread Cottage Latte",
    description: "Espresso with house-made gingerbread syrup, molasses, and warming spices",
    basePrice: 6.75,
    category: "Seasonal Specials",
    image: "/images/menu/gingerbread-latte.jpg",
    seasons: ["winter"],
    dietary: [],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond"],
    availableExtras: ["extra-shot", "whipped-cream", "caramel"],
  },
  {
    id: "peppermint-mocha",
    name: "Frosted Peppermint Mocha",
    description: "Rich chocolate espresso with cool peppermint and snow-white whipped cream",
    basePrice: 6.50,
    category: "Seasonal Specials",
    image: "/images/menu/peppermint-mocha.jpg",
    seasons: ["winter"],
    dietary: [],
    isSeasonal: true,
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond"],
    availableExtras: ["extra-shot", "whipped-cream"],
  },

  // Classic Coffee
  {
    id: "espresso",
    name: "Espresso",
    description: "Double shot of our house-roasted espresso, rich and bold",
    basePrice: 3.50,
    category: "Classic Coffee",
    image: "/images/menu/espresso.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableExtras: ["extra-shot"],
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso with hot water for a smooth, full-bodied experience",
    basePrice: 4.00,
    category: "Classic Coffee",
    image: "/images/menu/americano.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableExtras: ["extra-shot"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety foam",
    basePrice: 5.00,
    category: "Classic Coffee",
    image: "/images/menu/cappuccino.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "vanilla", "caramel"],
  },
  {
    id: "latte",
    name: "Café Latte",
    description: "Smooth espresso with steamed milk and a light layer of foam",
    basePrice: 5.25,
    category: "Classic Coffee",
    image: "/images/menu/latte.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut"],
    availableExtras: ["extra-shot", "vanilla", "caramel", "hazelnut"],
  },
  {
    id: "cold-brew",
    name: "Classic Cold Brew",
    description: "24-hour steeped cold brew, smooth and refreshing",
    basePrice: 4.75,
    category: "Classic Coffee",
    image: "/images/menu/cold-brew.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "skim", "oat", "almond", "coconut", "none"],
    availableExtras: ["extra-shot", "vanilla", "caramel"],
  },

  // Tea & Botanicals
  {
    id: "earl-grey",
    name: "Earl Grey Bloom",
    description: "Premium Earl Grey with bergamot and dried cornflower petals",
    basePrice: 4.00,
    category: "Tea & Botanicals",
    image: "/images/menu/earl-grey.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableExtras: ["honey", "lavender"],
  },
  {
    id: "chamomile-dream",
    name: "Chamomile Dream",
    description: "Soothing chamomile with honey and dried lavender buds",
    basePrice: 4.00,
    category: "Tea & Botanicals",
    image: "/images/menu/chamomile.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableExtras: ["honey", "lavender"],
  },
  {
    id: "matcha-garden",
    name: "Matcha Garden",
    description: "Ceremonial grade matcha whisked with steamed milk",
    basePrice: 5.50,
    category: "Tea & Botanicals",
    image: "/images/menu/matcha.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: true,
    availableSizes: ["small", "medium", "large"],
    availableMilks: ["whole", "oat", "almond", "coconut"],
    availableExtras: ["honey", "vanilla"],
  },

  // Fresh Pastries
  {
    id: "croissant",
    name: "Butter Croissant",
    description: "Flaky, buttery layers baked fresh every morning",
    basePrice: 4.25,
    category: "Fresh Pastries",
    image: "/images/menu/croissant.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Classic croissant filled with almond cream and topped with sliced almonds",
    basePrice: 5.00,
    category: "Fresh Pastries",
    image: "/images/menu/almond-croissant.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },
  {
    id: "blueberry-scone",
    name: "Blueberry Lavender Scone",
    description: "Tender scone with fresh blueberries and a hint of lavender",
    basePrice: 4.50,
    category: "Fresh Pastries",
    image: "/images/menu/blueberry-scone.jpg",
    seasons: ["spring", "summer"],
    dietary: [],
    isSeasonal: true,
    customizable: false,
  },
  {
    id: "pumpkin-muffin",
    name: "Pumpkin Spice Muffin",
    description: "Moist pumpkin muffin with cream cheese swirl and pepita topping",
    basePrice: 4.50,
    category: "Fresh Pastries",
    image: "/images/menu/pumpkin-muffin.jpg",
    seasons: ["autumn", "winter"],
    dietary: [],
    isSeasonal: true,
    customizable: false,
  },
  {
    id: "vegan-brownie",
    name: "Fudgy Vegan Brownie",
    description: "Rich, fudgy brownie made with dark chocolate and black beans",
    basePrice: 4.75,
    category: "Fresh Pastries",
    image: "/images/menu/vegan-brownie.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: false,
  },

  // Breakfast
  {
    id: "avocado-toast",
    name: "Garden Avocado Toast",
    description: "Sourdough with smashed avocado, microgreens, radish, and everything seasoning",
    basePrice: 10.00,
    category: "Breakfast",
    image: "/images/menu/avocado-toast.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan"],
    customizable: false,
  },
  {
    id: "breakfast-bowl",
    name: "Bloom Breakfast Bowl",
    description: "Açai base with granola, fresh berries, banana, chia seeds, and honey",
    basePrice: 12.00,
    category: "Breakfast",
    image: "/images/menu/breakfast-bowl.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: false,
  },
  {
    id: "eggs-benedict",
    name: "Garden Benedict",
    description: "Poached eggs on English muffin with spinach, tomato, and hollandaise",
    basePrice: 14.00,
    category: "Breakfast",
    image: "/images/menu/eggs-benedict.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },

  // Lunch
  {
    id: "caprese-sandwich",
    name: "Caprese Panini",
    description: "Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta",
    basePrice: 12.00,
    category: "Lunch",
    image: "/images/menu/caprese-panini.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },
  {
    id: "garden-salad",
    name: "Seasonal Garden Salad",
    description: "Mixed greens with seasonal vegetables, candied nuts, and house vinaigrette",
    basePrice: 11.00,
    category: "Lunch",
    image: "/images/menu/garden-salad.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: ["Vegan", "Gluten-Free"],
    customizable: false,
  },
  {
    id: "soup-bowl",
    name: "Soup of the Season",
    description: "Chef's seasonal soup served with crusty bread",
    basePrice: 8.00,
    category: "Lunch",
    image: "/images/menu/soup.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },

  // Desserts
  {
    id: "tiramisu",
    name: "Espresso Tiramisu",
    description: "Classic tiramisu made with our house espresso and mascarpone",
    basePrice: 8.00,
    category: "Desserts",
    image: "/images/menu/tiramisu.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },
  {
    id: "cheesecake",
    name: "Seasonal Cheesecake",
    description: "Creamy cheesecake with seasonal fruit compote",
    basePrice: 8.50,
    category: "Desserts",
    image: "/images/menu/cheesecake.jpg",
    seasons: ["spring", "summer", "autumn", "winter"],
    dietary: [],
    customizable: false,
  },
]

// Helper functions
export function getMenuByCategory(category: string): MenuItem[] {
  return menuItems.filter(item => item.category === category)
}

export function getMenuBySeason(season: Season): MenuItem[] {
  return menuItems.filter(item => item.seasons.includes(season))
}

export function getSeasonalSpecials(season: Season): MenuItem[] {
  return menuItems.filter(item => item.isSeasonal && item.seasons.includes(season))
}

export function getSignatureDrinks(): MenuItem[] {
  return menuItems.filter(item => item.isSignature)
}

export function filterByDietary(items: MenuItem[], dietary: string[]): MenuItem[] {
  if (dietary.length === 0) return items
  return items.filter(item => 
    dietary.every(d => item.dietary.includes(d))
  )
}

export const extras = [
  { id: "extra-shot", name: "Extra Shot", price: 0.75 },
  { id: "vanilla", name: "Vanilla Syrup", price: 0.50 },
  { id: "caramel", name: "Caramel Syrup", price: 0.50 },
  { id: "hazelnut", name: "Hazelnut Syrup", price: 0.50 },
  { id: "lavender", name: "Lavender Syrup", price: 0.75 },
  { id: "honey", name: "Honey", price: 0.50 },
  { id: "whipped-cream", name: "Whipped Cream", price: 0.50 },
]

export const milkOptions = [
  { id: "whole", name: "Whole Milk", price: 0 },
  { id: "skim", name: "Skim Milk", price: 0 },
  { id: "oat", name: "Oat Milk", price: 0.75 },
  { id: "almond", name: "Almond Milk", price: 0.75 },
  { id: "coconut", name: "Coconut Milk", price: 0.75 },
  { id: "none", name: "No Milk", price: 0 },
]

export const sizeOptions = [
  { id: "small", name: "Small (8oz)", price: 0 },
  { id: "medium", name: "Medium (12oz)", price: 0.50 },
  { id: "large", name: "Large (16oz)", price: 1.00 },
]
