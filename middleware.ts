import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token');

  // if (req.nextUrl.pathname === '/' && !token) {
  //   return NextResponse.rewrite(new URL('/auth/sign-in', req.url));
  // }

  if (req.nextUrl.pathname === '/auth/sign-in' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (req.nextUrl.pathname === '/auth/sign-up' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }
};
