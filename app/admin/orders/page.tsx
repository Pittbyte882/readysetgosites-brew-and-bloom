export default function AdminOrdersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold">Orders</h1>
        <p className="text-muted-foreground mt-1">
          Orders are emailed directly to <strong>{process.env.NOTIFY_EMAIL ?? 'your notify email'}</strong> via Resend. 
          No orders are stored in a database — check your inbox for new orders.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📬</span>
        </div>
        <h2 className="font-serif text-xl font-semibold mb-2">Orders go to your email</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
          Every order submitted through the site is sent as a formatted email notification. 
          Customers also receive an automatic confirmation. To store orders in a database, 
          connect Supabase and update <code className="bg-muted px-1 py-0.5 rounded text-xs">app/api/orders/route.ts</code>.
        </p>
      </div>
    </div>
  )
}
