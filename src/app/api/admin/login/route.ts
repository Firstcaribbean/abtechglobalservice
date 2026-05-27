import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!adminEmail || !adminPassword || !sessionSecret) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", "Admin login is not configured.");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  if (email !== adminEmail || password !== adminPassword) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", "Invalid admin credentials.");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const redirectUrl = new URL(next.startsWith("/admin") ? next : "/admin", request.url);
  const response = NextResponse.redirect(redirectUrl, { status: 303 });
  response.cookies.set("abtech_admin_session", sessionSecret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/"
  });

  return response;
}
