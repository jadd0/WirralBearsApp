import type { JWT } from "./types";

function generateExpiry() {
  return Date.now() + 1000 * 60 * 60; // 1 hour
}

export function generateCookie(): string {
  const key = Math.random().toString(36).substr(2, 9);

  const cookie = `type=${key}; path=/; Expires=${generateExpiry()}; HostOnly=false; Secure=lax; httpOnly=true; SameSite=Strict;`;

  return cookie;
}