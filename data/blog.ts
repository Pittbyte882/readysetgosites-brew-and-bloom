export type BlogCategory = "recipes" | "news" | "education" | "seasonal" | "community"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  image: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: number
  tags: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "spring-menu-2026",
    title: "Introducing Our Spring 2026 Menu",
    excerpt: "Cherry blossoms, fresh botanicals, and the flavors of renewal - discover what's blooming this spring at Brew & Bloom.",
    content: `
Spring has arrived, and with it comes a fresh chapter in our seasonal journey. We're thrilled to unveil our Spring 2026 menu, a celebration of delicate flavors, floral notes, and the renewal that this beautiful season brings.

## The Star: Cherry Blossom Latte

Our headliner this spring is the Cherry Blossom Latte - a dreamy creation that captures the essence of sakura season. We've sourced authentic cherry blossom syrup from a small Japanese producer, paired it with our house espresso, and topped each cup with real dried sakura petals. It's almost too beautiful to drink. Almost.

## Spring Garden Iced Tea

For our tea lovers, we've created the Spring Garden Iced Tea - a refreshing blend of jasmine green tea with elderflower, fresh cucumber ribbons, and a whisper of local honey. It's like sipping sunshine through a meadow.

## Fresh from the Kitchen

Chef Marcus has outdone himself with new seasonal additions:

- **Lemon Ricotta Pancakes** - Light, fluffy, and topped with blueberry compote
- **Spring Pea Tartine** - Crushed peas, mint, feta, and microgreens on sourdough
- **Strawberry Rhubarb Scone** - A limited-time treat that's already becoming a staff favorite

## Join Us for the Launch

We're celebrating our spring menu debut on March 21st with a launch party featuring complimentary samples, live acoustic music, and a chance to win free drinks for a month. Hope to see you there!
    `.trim(),
    category: "seasonal",
    image: "/images/blog/spring-menu.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-03-15",
    readTime: 4,
    tags: ["spring", "new menu", "cherry blossom", "seasonal"],
    featured: true,
  },
  {
    id: "2",
    slug: "perfect-pour-over-guide",
    title: "The Perfect Pour Over: A Step-by-Step Guide",
    excerpt: "Master the art of pour over coffee at home with our comprehensive guide to technique, equipment, and timing.",
    content: `
There's something meditative about making pour over coffee. The ritual of heating water, grinding beans, and the slow, deliberate pour - it transforms a morning routine into a mindful practice. Here's how to brew the perfect cup at home.

## What You'll Need

- Fresh whole bean coffee (we recommend our House Bloom blend)
- Burr grinder
- Pour over dripper (V60 or Chemex work great)
- Paper filter
- Gooseneck kettle
- Scale
- Timer
- Your favorite mug

## The Golden Ratio

We use a 1:16 ratio - that's 1 gram of coffee to 16 grams of water. For a standard cup:
- 20g coffee
- 320g water at 200-205°F (93-96°C)

## The Technique

**Step 1: Rinse Your Filter**
Place the filter in your dripper and rinse with hot water. This removes any paper taste and preheats your vessel.

**Step 2: Grind Fresh**
Grind your beans to medium-fine consistency - think sea salt. Add to the filter and create a small well in the center.

**Step 3: The Bloom**
Start your timer. Pour just enough water (about 40g) to saturate the grounds. Watch the coffee "bloom" as CO2 releases - this means your coffee is fresh! Wait 30-45 seconds.

**Step 4: The Pour**
Begin pouring in slow, concentric circles from the center outward. Keep the water level consistent, never letting it touch the sides of the filter. Aim for a total brew time of 3-4 minutes.

**Step 5: Enjoy**
Remove the dripper when it stops dripping. Swirl your cup, inhale the aroma, and enjoy the fruits of your labor.

## Pro Tips

- Water quality matters! Use filtered water for best results
- Pre-ground coffee loses flavor rapidly - always grind fresh
- Clean your equipment regularly
- Experiment with grind size and pour rate to dial in your perfect cup

Stop by the café and ask any of our baristas for a demonstration - we love sharing our craft!
    `.trim(),
    category: "education",
    image: "/images/blog/pour-over.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-02-28",
    readTime: 6,
    tags: ["brewing", "pour over", "coffee education", "home brewing"],
    featured: true,
  },
  {
    id: "3",
    slug: "meet-our-farmers",
    title: "Meet Our Farmers: The Mendoza Family of Colombia",
    excerpt: "A journey to the Huila region to meet the family behind our beloved Colombian single-origin beans.",
    content: `
Last month, I had the privilege of visiting Finca El Paraíso in Colombia's Huila region - the source of our beloved Colombian single-origin. Meeting the Mendoza family and seeing their operation firsthand reinforced everything we believe about direct trade relationships.

## Three Generations of Coffee

The Mendoza family has been growing coffee for three generations. What started as a small plot tended by grandfather Eduardo has grown into a thriving 15-hectare farm that employs 12 local families during harvest season.

## Exceptional Care, Exceptional Coffee

Carlos Mendoza, who now runs the farm with his wife María, walked me through every step of their process:

- **Selective Picking**: Only ripe, red cherries are picked by hand
- **Natural Processing**: Cherries are dried whole on raised beds for 20-25 days
- **Careful Sorting**: Every batch is sorted multiple times for consistency

The result? Those beautiful notes of dark chocolate, caramel, and citrus that make our Colombian so special.

## Beyond Fair Trade

We pay the Mendoza family 40% above fair trade prices because they deserve it. This premium allows Carlos to:
- Provide healthcare for all workers
- Send his children to university
- Invest in sustainable farming practices
- Maintain the quality that makes their coffee exceptional

## Coming Soon

We're planning a limited release of the Mendoza family's Geisha variety this summer - stay tuned for what promises to be something truly special.
    `.trim(),
    category: "community",
    image: "/images/blog/colombia-farm.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-02-15",
    readTime: 5,
    tags: ["origin story", "colombia", "direct trade", "farmers"],
  },
  {
    id: "4",
    slug: "lavender-honey-latte-recipe",
    title: "Recipe: Our Famous Lavender Honey Latte at Home",
    excerpt: "By popular demand, we're sharing our recipe for the lavender honey latte that started it all.",
    content: `
You asked, we're finally answering! Our Lavender Honey Latte has been a cult favorite since we opened, and we get requests for the recipe almost daily. Here's how to recreate the magic at home.

## Ingredients

**For the Lavender Syrup:**
- 1 cup water
- 1 cup sugar
- 2 tablespoons dried culinary lavender

**For the Latte:**
- 2 shots espresso (or 1/2 cup strong brewed coffee)
- 1 tablespoon lavender syrup
- 1 tablespoon good quality honey
- 1 cup milk of choice
- Dried lavender buds for garnish

## Making the Lavender Syrup

1. Combine water and sugar in a small saucepan
2. Heat over medium, stirring until sugar dissolves
3. Add lavender, reduce heat, and simmer for 10 minutes
4. Remove from heat and let steep for 30 minutes
5. Strain through fine mesh and store in the refrigerator (keeps for 2 weeks)

## Assembling Your Latte

1. Brew your espresso or strong coffee
2. Add lavender syrup and honey to the bottom of your cup
3. Pour in the hot espresso and stir to combine
4. Steam or heat your milk until frothy
5. Pour the milk over the espresso mixture
6. Garnish with a few dried lavender buds

## Chef's Notes

- Culinary lavender is essential - don't use lavender meant for potpourri!
- Local honey adds complexity - we use wildflower honey from a Portland apiary
- Oat milk froths beautifully and complements the floral notes
- For an iced version, shake espresso, syrup, and honey with ice before adding cold milk

Tag us in your creations @brewandbloom - we love seeing your home barista skills!
    `.trim(),
    category: "recipes",
    image: "/images/blog/lavender-latte.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-02-01",
    readTime: 4,
    tags: ["recipe", "lavender", "latte", "DIY"],
    featured: true,
  },
  {
    id: "5",
    slug: "expanding-our-space",
    title: "Big News: We're Expanding Our Garden Patio",
    excerpt: "This summer, we're doubling our outdoor seating with a new garden patio featuring even more plants and a dedicated event space.",
    content: `
We've been bursting at the seams (the best kind of problem!), and we're thrilled to announce a major expansion coming this summer.

## What's Happening

We've acquired the lot adjacent to our building and are transforming it into a lush garden patio that will:

- **Double our outdoor seating** from 20 to 40 seats
- **Add a covered pergola** for year-round enjoyment
- **Create a dedicated event space** for private parties and workshops
- **Expand our garden** with raised beds growing herbs we'll use in our kitchen

## The Design

Working with local landscape architect Maya Torres, we're creating a space that feels like a secret garden. Think:

- Winding stone pathways
- Vertical gardens and living walls
- A water feature centerpiece
- String lights and lanterns for evening ambiance
- Heating elements for cooler months

## Timeline

- **April-May**: Construction begins
- **June 1**: Soft opening of the new space
- **June 20**: Grand opening celebration (mark your calendars!)

## Join the Journey

We'll be documenting the entire process on our Instagram stories. Can't wait to share this new chapter with you!
    `.trim(),
    category: "news",
    image: "/images/blog/expansion.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-03-01",
    readTime: 3,
    tags: ["news", "expansion", "garden", "events"],
  },
  {
    id: "6",
    slug: "understanding-coffee-roasts",
    title: "Light, Medium, Dark: Understanding Coffee Roasts",
    excerpt: "Confused by coffee roast levels? Here's everything you need to know about how roasting affects your cup.",
    content: `
"I'll have a dark roast - I need something strong." We hear this often, but here's a little secret: dark roast coffee actually has less caffeine than light roast! Let's debunk myths and dive into the wonderful world of coffee roasts.

## The Basics

Coffee roasting is the process of transforming green coffee beans into the aromatic brown beans we know and love. The length and temperature of roasting dramatically affects flavor, acidity, and yes - caffeine content.

## Light Roast

**Characteristics:**
- Light brown color
- No oil on the surface
- Highest acidity and caffeine content
- Origin flavors shine through

**Flavor Profile:** Fruity, floral, tea-like, bright
**Best For:** Those who want to taste the unique characteristics of different origins

## Medium Roast

**Characteristics:**
- Medium brown color
- Little to no oil
- Balanced acidity and body
- Sweet spot between origin and roast flavors

**Flavor Profile:** Balanced, nutty, caramel, chocolate
**Best For:** Everyday drinking, versatile brewing methods

## Dark Roast

**Characteristics:**
- Dark brown to nearly black
- Oily surface
- Lowest acidity and caffeine
- Roast flavors dominate

**Flavor Profile:** Bold, smoky, bitter, chocolatey
**Best For:** Those who prefer bold, less acidic coffee

## Our House Blend

At Brew & Bloom, our House Bloom blend is a medium roast that balances the best of both worlds - you'll taste notes of milk chocolate, caramel, and a hint of citrus from our carefully selected beans.

Visit us to try all three roast levels side by side - it's the best way to discover your preference!
    `.trim(),
    category: "education",
    image: "/images/blog/roast-levels.jpg",
    author: {
      name: "Elena Rosewood",
      avatar: "/images/team/elena.jpg",
    },
    publishedAt: "2026-01-20",
    readTime: 5,
    tags: ["coffee education", "roasting", "brewing basics"],
  },
]

// Helper functions
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getBlogsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogBySlug(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit)
}

export const categoryLabels: Record<BlogCategory, string> = {
  recipes: "Recipes",
  news: "News & Updates",
  education: "Coffee Education",
  seasonal: "Seasonal",
  community: "Community",
}

export const categoryColors: Record<BlogCategory, string> = {
  recipes: "bg-amber-100 text-amber-800",
  news: "bg-blue-100 text-blue-800",
  education: "bg-emerald-100 text-emerald-800",
  seasonal: "bg-rose-100 text-rose-800",
  community: "bg-violet-100 text-violet-800",
}
