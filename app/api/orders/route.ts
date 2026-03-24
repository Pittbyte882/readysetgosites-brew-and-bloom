import { NextRequest, NextResponse } from 'next/server'
import { siteConfig, formatPrice } from '@/config/site'

interface OrderItem {
  id:              string
  name:            string
  quantity:        number
  price:           number
  customizations?: Record<string, string>
}

// POST /api/orders — email notification via Resend
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { customerName, customerEmail, customerPhone, items, total, pickupTime, notes, orderType } = body

    if (!customerName || !customerEmail || !items?.length) {
      return NextResponse.json({ error: 'Name, email, and items are required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const orderNumber = `BB-${Date.now().toString().slice(-6)}`
    const orderDate = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })

    const itemsHtml = (items as OrderItem[]).map(item => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #E8DFD3">${item.name}${item.customizations ? `<br><span style="font-size:12px;color:#7A6B5A">${Object.values(item.customizations).join(', ')}</span>` : ''}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #E8DFD3;text-align:center">${item.quantity}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #E8DFD3;text-align:right">${formatPrice(item.price * item.quantity)}</td>
      </tr>
    `).join('')

    // Notify the café owner
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:    `${siteConfig.name} Orders <${siteConfig.fromEmail}>`,
        to:      [siteConfig.notifyEmail],
        subject: `New Order ${orderNumber} — ${customerName}`,
        reply_to: customerEmail,
        html: `
          <div style="font-family:'Lato',sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:32px 40px;border-bottom:3px solid #E8A4B8">
              <h1 style="font-family:Georgia,serif;font-size:24px;margin:0;color:#4A3728">${siteConfig.name}</h1>
              <p style="color:#7A6B5A;font-size:13px;margin:4px 0 0;letter-spacing:0.08em">New Order Received — ${orderNumber}</p>
            </div>
            <div style="padding:32px 40px;background:#FFFBF5;border:1px solid #E8DFD3">
              <div style="display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap">
                <div><span style="font-size:11px;color:#7A6B5A;text-transform:uppercase;letter-spacing:0.1em">Customer</span><br><strong>${customerName}</strong></div>
                <div><span style="font-size:11px;color:#7A6B5A;text-transform:uppercase;letter-spacing:0.1em">Email</span><br><a href="mailto:${customerEmail}" style="color:#E8A4B8">${customerEmail}</a></div>
                ${customerPhone ? `<div><span style="font-size:11px;color:#7A6B5A;text-transform:uppercase;letter-spacing:0.1em">Phone</span><br>${customerPhone}</div>` : ''}
                <div><span style="font-size:11px;color:#7A6B5A;text-transform:uppercase;letter-spacing:0.1em">Type</span><br>${orderType ?? 'Pickup'}</div>
                ${pickupTime ? `<div><span style="font-size:11px;color:#7A6B5A;text-transform:uppercase;letter-spacing:0.1em">Pickup Time</span><br>${pickupTime}</div>` : ''}
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <thead>
                  <tr style="background:#F5EDE4">
                    <th style="padding:10px 12px;text-align:left;font-weight:600">Item</th>
                    <th style="padding:10px 12px;text-align:center;font-weight:600">Qty</th>
                    <th style="padding:10px 12px;text-align:right;font-weight:600">Price</th>
                  </tr>
                </thead>
                <tbody>${itemsHtml}</tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" style="padding:12px;text-align:right;font-weight:600">Total</td>
                    <td style="padding:12px;text-align:right;font-size:18px;font-family:Georgia,serif;font-weight:700;color:#E8A4B8">${formatPrice(total)}</td>
                  </tr>
                </tfoot>
              </table>
              ${notes ? `<div style="margin-top:20px;padding:16px;background:#FFF8E7;border-left:3px solid #E8A4B8"><p style="font-size:12px;color:#7A6B5A;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em">Notes</p><p style="margin:0;font-size:14px">${notes}</p></div>` : ''}
              <p style="margin-top:24px;font-size:12px;color:#7A6B5A">Order placed: ${orderDate}</p>
            </div>
          </div>
        `,
      }),
    })

    // Confirmation to customer
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from:    `${siteConfig.name} <${siteConfig.fromEmail}>`,
        to:      [customerEmail],
        subject: `Order Confirmed — ${orderNumber}`,
        html: `
          <div style="font-family:'Lato',sans-serif;max-width:600px;margin:0 auto;color:#4A3728">
            <div style="background:linear-gradient(135deg,#FDF2F8,#F0FDF4);padding:32px 40px">
              <h1 style="font-family:Georgia,serif;font-size:24px;margin:0">${siteConfig.name}</h1>
              <p style="color:#7A6B5A;font-size:13px;margin:4px 0 0">Order Confirmed</p>
            </div>
            <div style="padding:32px 40px;background:#FFFBF5;border:1px solid #E8DFD3">
              <p style="font-family:Georgia,serif;font-size:18px;font-style:italic">Thank you, ${customerName.split(' ')[0]}!</p>
              <p style="color:#7A6B5A;line-height:1.7">Your order <strong>${orderNumber}</strong> has been received and is being prepared with love.</p>
              ${pickupTime ? `<p style="color:#7A6B5A">Your estimated pickup time is <strong>${pickupTime}</strong>.</p>` : ''}
              <div style="margin:24px 0;padding:20px;background:#F5EDE4;border-radius:8px">
                <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#7A6B5A;margin:0 0 8px">Order Summary</p>
                ${(items as OrderItem[]).map(i => `<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0"><span>${i.name} x${i.quantity}</span><span>${formatPrice(i.price * i.quantity)}</span></div>`).join('')}
                <div style="border-top:1px solid #E8DFD3;margin-top:8px;padding-top:8px;display:flex;justify-content:space-between;font-weight:700"><span>Total</span><span>${formatPrice(total)}</span></div>
              </div>
              <p style="color:#7A6B5A;font-size:14px">Questions? Call us at <a href="tel:${siteConfig.phone}" style="color:#E8A4B8">${siteConfig.phone}</a> or reply to this email.</p>
            </div>
            <div style="padding:20px 40px;background:#E8A4B8;text-align:center">
              <p style="font-family:Georgia,serif;font-style:italic;color:#4A3728;margin:0">See you soon — the Brew & Bloom team 🌸</p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true, orderNumber })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}