import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token');

  if (
    (req.nextUrl.pathname === '/saved' && !token) ||
    (req.nextUrl.pathname === '/notifications' && !token) ||
    (req.nextUrl.pathname === '/settings' && !token)
  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }
};
