import { NextResponse } from 'next/server';

const OPSWYSE_URL =
  'https://api.opswyse.com/api/metric-tracker/templates/c4709f29-1460-43a5-b04d-ceb72a789dd7/data/?workspace_uid=7298953e-2f2e-4a67-bbac-d5d5f023c873';

const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgzMjEwNjE3LCJpYXQiOjE3ODMxOTI2MTcsImp0aSI6ImRmMzk5NGYxNTg4NDRhNzdiM2ZhMTAzMDc2OWVkZmQzIiwidXNlcl9pZCI6NSwidG9rZW5fdmVyc2lvbiI6NjksImFjY291bnRfdWlkIjoiOGY2ODM2MTktZjI4YS00ZTljLThhZjMtM2M3NTUyMDI3M2UzIn0.DlV6wzFdZWt0PfqIYwFGFQkn3o__TK95YTN2vfvY5zI';

export async function POST(request: Request) {
  try {
    const values = await request.json();

    const res = await fetch(OPSWYSE_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
        authorization: TOKEN,
      },
      body: JSON.stringify({ values }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: 'Submission failed', details: text },
        { status: res.status },
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
