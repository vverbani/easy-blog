// /src/pages/api/signup.js
export const prerender = false;

export async function post({ request }) {
  const contentType = request.headers.get('content-type') || '';
  let data;

  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await request.text();
      data = Object.fromEntries(new URLSearchParams(text));
    } else {
      const text = await request.text();
      data = Object.fromEntries(new URLSearchParams(text));
    }
  } catch (err) {
    // Use referer header as fallback redirect
    const redirectUrl = request.headers.get('referer') || '/';
    return new Response(null, {
      status: 303,
      headers: { Location: `${redirectUrl}?newsletterStatus=error&newsletterMessage=invalid_request` }
    });
  }

  const { email, 'hp-field': honeypot } = data;
  const redirectUrl = request.headers.get('referer') || '/';

  if (honeypot) {
    return new Response(null, {
      status: 303,
      headers: { Location: `${redirectUrl}?newsletterStatus=error&newsletterMessage=bot_detected` }
    });
  }
  if (!email) {
    return new Response(null, {
      status: 303,
      headers: { Location: `${redirectUrl}?newsletterStatus=error&newsletterMessage=email_required` }
    });
  }

  const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
  const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed'
    }),
  });

  if (response.ok) {
    return new Response(null, {
      status: 303,
      headers: { Location: `${redirectUrl}?newsletterStatus=success` }
    });
  } else {
    return new Response(null, {
      status: 303,
      headers: { Location: `${redirectUrl}?newsletterStatus=error&newsletterMessage=failed` }
    });
  }
}
