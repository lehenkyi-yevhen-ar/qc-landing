import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.formData();

  const firstName  = (data.get('firstName')  as string) ?? '';
  const lastName   = (data.get('lastName')   as string) ?? '';
  const linkedin   = (data.get('linkedin')   as string) ?? '';
  const message    = (data.get('message')    as string) ?? '';
  const sourceUrl  = (data.get('sourceUrl')  as string) ?? '';
  const role       = (data.get('role')       as string) ?? '';
  const cvFile     = data.get('cvFile') as File | null;

  const fields = [
    `• First Name: ${firstName}`,
    `• Last Name: ${lastName}`,
    `• LinkedIn Profile: ${linkedin || '—'}`,
    `• CV: ${cvFile && cvFile.size > 0 ? cvFile.name : '—'}`,
    `• Source URL: ${sourceUrl || '—'}`,
    ...(role ? [`• Role: ${role}`] : []),
    `• Comment: ${message || '—'}`,
  ].join('\n');

  const errors: string[] = [];

  // ── Make.com webhook (handles email) ─────────────────────────────────────
  const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!makeWebhookUrl && process.env.NODE_ENV === 'production') {
    console.error('[apply] MAKE_WEBHOOK_URL is not set in production');
    return NextResponse.json({ ok: false, error: 'Webhook not configured' }, { status: 500 });
  }
  if (makeWebhookUrl) {
    let cvBase64: string | null = null;
    let cvFilename: string | null = null;
    if (cvFile && cvFile.size > 0) {
      const buf = await cvFile.arrayBuffer();
      cvBase64 = Buffer.from(buf).toString('base64');
      cvFilename = cvFile.name;
    }

    try {
      const makeRes = await fetch(makeWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          linkedin,
          message,
          sourceUrl,
          role,
          cvFilename,
          cvBase64,
          to_hr: 'yes',
        }),
      });

      if (!makeRes.ok) {
        const err = await makeRes.text();
        console.error('[apply] Make webhook error:', err);
        errors.push('email');
      }
    } catch (err) {
      console.error('[apply] Make webhook failed:', err);
      errors.push('email');
    }
  }

  // If any configured integration failed, return 500 so the form shows an error
  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, failed: errors },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
