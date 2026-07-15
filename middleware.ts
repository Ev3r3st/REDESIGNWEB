export const config = {
  matcher: '/dashboard/:path*',
};

export default function protectDashboard(request: Request) {
  const authorization = request.headers.get('authorization');
  const expectedPassword = process.env.DASHBOARD_PASSWORD;

  if (authorization?.startsWith('Basic ') && expectedPassword) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(':');
      const username = decoded.slice(0, separator);
      const password = decoded.slice(separator + 1);

      if (username === 'tameteq' && password === expectedPassword) {
        return;
      }
    } catch {
      // Invalid Basic authentication payload; return the login challenge below.
    }
  }

  return new Response('Tato část webu je přístupná pouze oprávněným uživatelům.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="TameTeq Dashboard", charset="UTF-8"',
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
