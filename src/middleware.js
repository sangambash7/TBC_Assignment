import { NextResponse } from "next/server";

export function middleware(request) {
  // ვამოწმებთ არის თუ არა ტოკენი ქუქისებში
  const token = request.cookies.get("token");
  const isAuthenticated = token && true;

  const url = request.nextUrl.clone();
  url.pathname = "/Login";
  if (!isAuthenticated) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/About", "/Contact", "/Products", "/Blogs", "/Profile"],
};
