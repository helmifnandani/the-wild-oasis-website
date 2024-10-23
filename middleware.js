/* import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  // Output: semua request yang terjadi

  return NextResponse.redirect(new URL("/about", request.url));
} */

import { auth } from "./app/_lib/auth";
// karena middlewarenya diset ini, maka akan di redirect ke halaman sign in
export const middleware = auth;

// matcher ini fungsinya, middleware ini dijalanin di route apa aja. Jadi kalau user ke page ini, function callback authorization di auth.js akan di execute
export const config = {
  matcher: ["/account"],
};
