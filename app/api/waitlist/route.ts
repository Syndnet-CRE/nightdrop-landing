const GAS_URL = 'https://script.google.com/macros/s/AKfycbys2x4rtCG_zMXhxIiF5rTEYUsEoobsKv3TnnnVQNoIbLhqaDSTeXDyW6S5SRiZoZDHMw/exec'

export async function POST(req: Request) {
  const body = await req.json()

  const nightdropApiUrl = process.env.NIGHTDROP_API_URL
  const webhookSecret = process.env.NIGHTDROP_WEBHOOK_SECRET

  const gasPromise = fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    redirect: 'follow',
  })

  const nightdropPromise = nightdropApiUrl && webhookSecret
    ? fetch(`${nightdropApiUrl}/api/dealfeed/webhooks/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-secret': webhookSecret,
        },
        body: JSON.stringify({
          email: body.email,
          full_name: `${body.firstName || ''} ${body.lastName || ''}`.trim(),
        }),
      }).catch(() => null)
    : Promise.resolve(null)

  const [gasRes] = await Promise.all([gasPromise, nightdropPromise])

  if (!gasRes.ok) {
    return Response.json({ error: 'Submission failed. Please try again.' }, { status: 502 })
  }
  return Response.json({ ok: true })
}
