import { NextResponse } from 'next/server';
import { login } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const isValid = await login(email, password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Set cookie in response (non-httpOnly so client can read it for demo purposes)
    const response = NextResponse.json({ success: true });
    response.cookies.set('tech-gear-auth', JSON.stringify({ email, authenticated: true }), {
      httpOnly: false, // Allow client-side access for demo
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
