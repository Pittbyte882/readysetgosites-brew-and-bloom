'use client'

import { siteConfig, getUpcomingEvents } from '@/config/site'

export default function AdminEventsPage() {
  const upcoming = getUpcomingEvents()
  const past = siteConfig.events.filter(e => {
    const today = new Date().toISOString().split('T')[0]
    return e.date < today
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold">Events</h1>
        <p className="text-muted-foreground mt-1">
          Events are managed in <code className="text-xs bg-muted px-1.5 py-0.5 rounded">config/site.ts</code> under the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">events</code> array.
        </p>
      </div>

      <h2 className="font-serif text-xl font-semibold mb-4">Upcoming ({upcoming.length})</h2>
      <div className="space-y-4 mb-10">
        {upcoming.length === 0 ? (
          <p className="text-muted-foreground">No upcoming events. Add some in siteConfig.</p>
        ) : upcoming.map(e => (
          <div key={e.id} className="bg-card border rounded-2xl p-6 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-serif text-lg font-semibold">{e.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{e.category}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{e.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>📅 {e.date}</span>
                <span>🕐 {e.time}</span>
                {e.price !== null && <span>💰 ${e.price}</span>}
                {e.capacity !== null && <span>👥 {e.capacity} max</span>}
                {e.registrationRequired && <span className="text-amber-500">Registration required</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {past.length > 0 && (
        <>
          <h2 className="font-serif text-xl font-semibold mb-4 text-muted-foreground">Past Events ({past.length})</h2>
          <div className="space-y-3 opacity-60">
            {past.map(e => (
              <div key={e.id} className="bg-card border rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.date} · {e.category}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}