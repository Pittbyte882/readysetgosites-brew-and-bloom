export type EventType = "music" | "workshop" | "tasting" | "seasonal" | "community"

export interface CafeEvent {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string // ISO date string
  startTime: string
  endTime: string
  type: EventType
  image: string
  capacity?: number
  price?: number
  isFree: boolean
  requiresReservation: boolean
  host?: string
}

export const events: CafeEvent[] = [
  // March Events
  {
    id: "spring-menu-launch",
    title: "Spring Menu Launch Party",
    description: "Be the first to taste our new Cherry Blossom Latte and Spring Garden specialties",
    longDescription: "Join us as we unveil our spring menu featuring delicate floral flavors and fresh seasonal ingredients. Enjoy complimentary samples, live acoustic music, and a chance to win free drinks for a month!",
    date: "2026-03-21",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    type: "seasonal",
    image: "/images/events/spring-launch.jpg",
    capacity: 50,
    isFree: true,
    requiresReservation: true,
  },
  {
    id: "latte-art-workshop-march",
    title: "Latte Art Workshop",
    description: "Learn the basics of pouring beautiful latte art with our head barista",
    longDescription: "In this hands-on workshop, you'll learn the fundamentals of steaming milk and pouring basic latte art designs including hearts, tulips, and rosettas. All materials provided, and you take home a pound of our house blend!",
    date: "2026-03-28",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    type: "workshop",
    image: "/images/events/latte-art.jpg",
    capacity: 12,
    price: 45,
    isFree: false,
    requiresReservation: true,
    host: "Elena Rosewood",
  },

  // April Events
  {
    id: "jazz-night-april",
    title: "Jazz in the Garden",
    description: "Live jazz trio performing smooth spring melodies",
    date: "2026-04-04",
    startTime: "7:00 PM",
    endTime: "10:00 PM",
    type: "music",
    image: "/images/events/jazz-night.jpg",
    isFree: true,
    requiresReservation: false,
  },
  {
    id: "plant-swap",
    title: "Community Plant Swap",
    description: "Bring a plant, take a plant! Connect with fellow plant lovers",
    longDescription: "Our semi-annual plant swap is back! Bring your plant cuttings, seedlings, or potted plants to trade with other green thumbs. Our floral designer Sofia will be offering free repotting tips.",
    date: "2026-04-12",
    startTime: "11:00 AM",
    endTime: "3:00 PM",
    type: "community",
    image: "/images/events/plant-swap.jpg",
    isFree: true,
    requiresReservation: false,
  },
  {
    id: "coffee-origins-april",
    title: "Coffee Origins: Ethiopia Tasting",
    description: "Explore the birthplace of coffee with a guided tasting flight",
    longDescription: "Journey to Ethiopia, the birthplace of coffee, through our curated tasting flight featuring three distinct Ethiopian origins. Learn about processing methods, flavor profiles, and brewing techniques.",
    date: "2026-04-19",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    type: "tasting",
    image: "/images/events/coffee-tasting.jpg",
    capacity: 20,
    price: 35,
    isFree: false,
    requiresReservation: true,
    host: "Elena Rosewood",
  },
  {
    id: "acoustic-evening-april",
    title: "Acoustic Evening",
    description: "Local singer-songwriters showcase their original music",
    date: "2026-04-25",
    startTime: "7:00 PM",
    endTime: "9:30 PM",
    type: "music",
    image: "/images/events/acoustic.jpg",
    isFree: true,
    requiresReservation: false,
  },

  // May Events
  {
    id: "mothers-day-brunch",
    title: "Mother's Day Botanical Brunch",
    description: "Treat mom to a special brunch surrounded by blooms",
    longDescription: "Celebrate the special women in your life with our prix-fixe brunch menu featuring seasonal dishes, bottomless mimosas, and live harp music. Each mom receives a complimentary succulent arrangement.",
    date: "2026-05-10",
    startTime: "10:00 AM",
    endTime: "2:00 PM",
    type: "seasonal",
    image: "/images/events/mothers-day.jpg",
    capacity: 40,
    price: 55,
    isFree: false,
    requiresReservation: true,
  },
  {
    id: "terrarium-workshop",
    title: "DIY Terrarium Workshop",
    description: "Create your own mini garden with our floral designer",
    longDescription: "Learn the art of terrarium building with our in-house floral designer Sofia. Choose from a variety of succulents, moss, and decorative elements to create your own mini ecosystem. All materials included.",
    date: "2026-05-17",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    type: "workshop",
    image: "/images/events/terrarium.jpg",
    capacity: 15,
    price: 65,
    isFree: false,
    requiresReservation: true,
    host: "Sofia Mendez",
  },
  {
    id: "poetry-open-mic",
    title: "Poetry & Pour Over",
    description: "Open mic poetry night with featured poet",
    date: "2026-05-23",
    startTime: "6:30 PM",
    endTime: "9:00 PM",
    type: "community",
    image: "/images/events/poetry.jpg",
    isFree: true,
    requiresReservation: false,
  },

  // June Events (Summer begins)
  {
    id: "summer-menu-launch",
    title: "Summer Sips Launch",
    description: "Cool down with our new tropical and refreshing summer drinks",
    date: "2026-06-20",
    startTime: "4:00 PM",
    endTime: "8:00 PM",
    type: "seasonal",
    image: "/images/events/summer-launch.jpg",
    isFree: true,
    requiresReservation: false,
  },
  {
    id: "cold-brew-class",
    title: "Cold Brew Masterclass",
    description: "Learn to make perfect cold brew at home",
    longDescription: "Discover the secrets to crafting smooth, flavorful cold brew coffee at home. We'll cover different brewing methods, ratios, and infusion techniques. Take home a cold brew kit!",
    date: "2026-06-27",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    type: "workshop",
    image: "/images/events/cold-brew-class.jpg",
    capacity: 12,
    price: 40,
    isFree: false,
    requiresReservation: true,
    host: "Elena Rosewood",
  },

  // July Events
  {
    id: "fourth-july",
    title: "Fourth of July Celebration",
    description: "Red, white, and brew! Special patriotic drinks and treats",
    date: "2026-07-04",
    startTime: "8:00 AM",
    endTime: "6:00 PM",
    type: "seasonal",
    image: "/images/events/fourth-july.jpg",
    isFree: true,
    requiresReservation: false,
  },
  {
    id: "summer-movie-night",
    title: "Garden Movie Night",
    description: "Outdoor screening of a classic film under the stars",
    date: "2026-07-18",
    startTime: "8:30 PM",
    endTime: "11:00 PM",
    type: "community",
    image: "/images/events/movie-night.jpg",
    isFree: true,
    requiresReservation: true,
    capacity: 60,
  },
]

// Helper functions
export function getUpcomingEvents(limit?: number): CafeEvent[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const upcoming = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  
  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getEventsByMonth(year: number, month: number): CafeEvent[] {
  return events.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month
  })
}

export function getEventById(id: string): CafeEvent | undefined {
  return events.find(event => event.id === id)
}

export function getEventsByType(type: EventType): CafeEvent[] {
  return events.filter(event => event.type === type)
}

export const eventTypeLabels: Record<EventType, string> = {
  music: "Live Music",
  workshop: "Workshop",
  tasting: "Tasting",
  seasonal: "Seasonal",
  community: "Community",
}

export const eventTypeColors: Record<EventType, string> = {
  music: "bg-purple-100 text-purple-800",
  workshop: "bg-blue-100 text-blue-800",
  tasting: "bg-amber-100 text-amber-800",
  seasonal: "bg-green-100 text-green-800",
  community: "bg-rose-100 text-rose-800",
}
