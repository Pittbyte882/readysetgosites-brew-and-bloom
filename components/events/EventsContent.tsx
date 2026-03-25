"use client"

import { useState } from "react"
import { Calendar, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig, getUpcomingEvents, eventTypeLabels, eventTypeColors } from "@/config/site"
import { cn } from "@/lib/utils"

function formatEventDate(dateString: string) {
  const date = new Date(dateString)
  return {
    day:      date.getDate().toString(),
    month:    date.toLocaleDateString("en-US", { month: "short" }),
    weekday:  date.toLocaleDateString("en-US", { weekday: "short" }),
    fullDate: date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
  }
}

const typeFilters = ["All", "Live Music", "Workshop", "Tasting", "Seasonal", "Community"]

export function EventsContent() {
  const [activeFilter, setActiveFilter] = useState("All")

  const allEvents = getUpcomingEvents()

  const filtered = activeFilter === "All"
    ? allEvents
    : allEvents.filter(e => eventTypeLabels[e.type] === activeFilter)

  return (
    <>
      <section className="py-16 bg-muted/30 border-b">
        <div className="container-botanical text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What&apos;s Happening
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Upcoming Events
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join us for workshops, live music, tastings, and community gatherings at Brew &amp; Bloom.
          </p>
        </div>
      </section>

      <section className="py-6 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container-botanical">
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-botanical">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No upcoming events in this category. Check back soon!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => {
                const { day, month, weekday, fullDate } = formatEventDate(event.date)
                return (
                  <div
                    key={event.id}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-card border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                          <div className="text-xs font-medium text-muted-foreground uppercase">{weekday}</div>
                          <div className="font-serif text-2xl font-bold">{day}</div>
                          <div className="text-xs font-medium text-primary uppercase">{month}</div>
                        </div>
                      </div>

                      <div className="aspect-[16/10] overflow-hidden">
                        {event.image ? (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Calendar className="w-20 h-20 opacity-30" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className={cn("text-xs", eventTypeColors[event.type])}>
                          {eventTypeLabels[event.type]}
                        </Badge>
                        {event.isFree
                          ? <Badge variant="outline" className="text-xs">Free</Badge>
                          : event.price && <Badge variant="outline" className="text-xs">${event.price}</Badge>
                        }
                      </div>

                      <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-xs text-muted-foreground mb-2">{fullDate}</p>

                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">
                        {event.longDescription ?? event.description}
                      </p>

                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground border-t pt-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.startTime} – {event.endTime}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{event.capacity} spots</span>
                          </div>
                        )}
                        {event.host && (
                          <span>Host: {event.host}</span>
                        )}
                      </div>

                      {event.requiresReservation ? (
                        <Button asChild size="sm" className="rounded-full w-full">
                          <a href={`mailto:${siteConfig.email}`}>
                            Reserve a Spot
                          </a>
                        </Button>
                      ) : (
                        <p className="text-xs text-center text-muted-foreground">
                          No reservation needed — just show up!
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}