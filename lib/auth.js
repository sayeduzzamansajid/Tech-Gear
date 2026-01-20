import { cookies } from 'next/headers';

const AUTH_COOKIE_NAME = 'tech-gear-auth';
const AUTH_EMAIL = 'admin@techgear.com';
const AUTH_PASSWORD = '123456';

export async function login(email, password) {
  if (email === AUTH_EMAIL && password === AUTH_PASSWORD) {
    return true;
  }
  return false;
}

export async function setAuthCookie(email) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, JSON.stringify({ email, authenticated: true }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getAuthUser() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);
  
  if (!authCookie) {
    return null;
  }
  
  try {
    const authData = JSON.parse(authCookie.value);
    return authData;
  } catch {
    return null;
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated() {
  const user = await getAuthUser();
  return user?.authenticated === true;
}
