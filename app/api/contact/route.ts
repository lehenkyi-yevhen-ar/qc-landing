import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  // Forward the payload to a webhook or email handler configured via environment.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    // In development, just acknowledge without forwarding.
    return NextResponse.json({ ok: true });
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

