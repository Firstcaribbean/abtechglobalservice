import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/admin"];
const authRoutes = ["/admin/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isAuthRoute = authRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const session = request.cookies.get("abtech_admin_session")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;
  const isAuthenticated = Boolean(secret && session === secret);

  if (isProtectedRoute && !isAuthRoute && !isAuthenticated) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isAuthenticated) {
    const adminUrl = request.nextUrl.clone();
    adminUrl.pathname = "/admin";
    adminUrl.search = "";
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
