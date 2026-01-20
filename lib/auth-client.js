'use client';

export async function isAuthenticated() {
  if (typeof document === 'undefined') return false;
  
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => cookie.trim().startsWith('tech-gear-auth='));
  
  if (!authCookie) return false;
  
  try {
    // Handle cookie value that might contain = signs
    const cookieValue = authCookie.split('=').slice(1).join('=');
    const decodedValue = decodeURIComponent(cookieValue);
    const authData = JSON.parse(decodedValue);
    return authData.authenticated === true;
  } catch {
    return false;
  }
}

export function logout() {
  document.cookie = 'tech-gear-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  window.location.href = '/login';
}
