import { NextResponse } from 'next/server';

export function middleware(request) {
  const authCookie = request.cookies.get('tech-gear-auth');
  const isAuthenticated = authCookie && JSON.parse(authCookie.value).authenticated === true;
  const { pathname } = request.nextUrl;

  // Protect /add-item route
  if (pathname === '/add-item' && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authenticated users away from login page
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/items', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item', '/login'],
};
