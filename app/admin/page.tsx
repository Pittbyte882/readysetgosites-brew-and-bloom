import { siteConfig, getUpcomingEvents } from '@/config/site'
import { Coffee, Calendar, ShoppingBag, Users } from 'lucide-react'

export default function AdminDashboard() {
  const upcomingEvents = getUpcomingEvents()
  const menuItems = siteConfig.menuItems.filter(i => i.available)
  const featuredItems = siteConfig.menuItems.filter(i => i.featured)

  const stats = [
    { label: 'Menu Items',      value: menuItems.length,     icon: Coffee,     color: 'text-pink-400' },
    { label: 'Featured Items',  value: featuredItems.length, icon: ShoppingBag,color: 'text-green-400' },
    { label: 'Upcoming Events', value: upcomingEvents.length,icon: Calendar,   color: 'text-amber-400' },
    { label: 'Team Members',    value: siteConfig.team.length,icon: Users,     color: 'text-blue-400' },
  ]

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold mb-1">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back to {siteConfig.name} admin.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map(s => {
          const Icon = s.icon
          return (
            <div key={s.label} className="bg-card border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
                <Icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className={`font-serif text-4xl font-bold ${s.color}`}>{s.value}</div>
            </div>
          )
        })}
      </div>

      {/* Upcoming events preview */}
      {upcomingEvents.length > 0 && (
        <div className="bg-card border rounded-2xl p-6">
          <h2 className="font-serif text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.slice(0, 3).map(e => (
              <div key={e.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.date} · {e.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-primary">{e.category}</p>
                  <p className="text-xs text-muted-foreground">{e.price ? `$${e.price}` : 'Free'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}