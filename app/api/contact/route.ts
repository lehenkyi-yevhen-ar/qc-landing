import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') ?? '';
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  let payload: Record<string, unknown>;

  if (contentType.includes('multipart/form-data')) {
    const data = await request.formData();
    payload = {};
    const fileEntries: { filename: string; content: string }[] = [];

    for (const [key, value] of data.entries()) {
      if (value instanceof File) {
        if (value.size > 0) {
          const buf = await value.arrayBuffer();
          fileEntries.push({
            filename: value.name,
            content: Buffer.from(buf).toString('base64'),
          });
        }
      } else {
        payload[key] = value;
      }
    }

    if (fileEntries.length > 0) payload.attachments = fileEntries;
  } else {
    payload = await request.json();
  }

  if (!webhookUrl) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[contact] MAKE_WEBHOOK_URL is not set in production');
      return NextResponse.json({ ok: false, error: 'Webhook not configured' }, { status: 500 });
    }
    // Dev mode — no webhook configured, return success to allow UI testing
    console.warn('[contact] MAKE_WEBHOOK_URL not set — skipping webhook (dev mode)');
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[contact] Webhook error:', err);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  } catch (err) {
    console.error('[contact] Webhook failed:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
