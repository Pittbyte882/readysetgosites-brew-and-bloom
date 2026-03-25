"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig, getUpcomingEvents, eventTypeLabels, eventTypeColors } from "@/config/site"
import { cn } from "@/lib/utils"

function formatEventDate(dateString: string): { day: string; month: string; weekday: string } {
  const date = new Date(dateString)
  return {
    day:     date.getDate().toString(),
    month:   date.toLocaleDateString("en-US", { month: "short" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
  }
}

export function EventsPreview() {
  if (!siteConfig.features.events) return null

  const upcomingEvents = getUpcomingEvents(3)

  if (upcomingEvents.length === 0) return null

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-botanical">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              What&apos;s Happening
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Join us for workshops, live music, tastings, and community gatherings.
            </p>
          </div>
          <Button variant="outline" asChild className="rounded-full self-start md:self-auto">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
            const { day, month, weekday } = formatEventDate(event.date)
            return (
              <div
                key={event.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                    <div className="text-xs font-medium text-muted-foreground uppercase">{weekday}</div>
                    <div className="font-serif text-2xl font-bold">{day}</div>
                    <div className="text-xs font-medium text-primary uppercase">{month}</div>
                  </div>
                </div>

                <div className="aspect-[16/10] relative overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Calendar className="w-20 h-20 opacity-30" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className={cn("text-xs", eventTypeColors[event.type])}>
                      {eventTypeLabels[event.type]}
                    </Badge>
                    {event.isFree && (
                      <Badge variant="outline" className="text-xs">Free</Badge>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.startTime}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.capacity} spots</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}