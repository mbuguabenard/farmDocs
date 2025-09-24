// middleware.ts (place this in the ROOT of your project, same level as your app/ folder)
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const pathname = req.nextUrl.pathname;

  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return res;
  }

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Define protected routes
  const protectedPaths = ["/dashboard", "/onboarding", "/profile"];
  const authPaths = ["/signin", "/signup"];
  
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));
  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  // If accessing protected route without session, redirect to signin
  if (isProtectedPath && !session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/signin";
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If accessing auth pages while logged in, redirect to dashboard
  if (isAuthPath && session) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  // Handle onboarding flow
  if (session && pathname === "/dashboard") {
    // Check if user has completed onboarding
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, farming_type, farm_size, location, experience")
      .eq("id", session.user.id)
      .single();

    const isProfileComplete = profile && 
      profile.full_name && 
      profile.farming_type && 
      profile.farm_size && 
      profile.location && 
      profile.experience;

    if (!isProfileComplete) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/onboarding";
      return NextResponse.redirect(redirectUrl);
    }
  }

  // If user is on onboarding but has already completed it, redirect to dashboard
  if (session && pathname === "/onboarding") {
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, farming_type, farm_size, location, experience")
      .eq("id", session.user.id)
      .single();

    const isProfileComplete = profile && 
      profile.full_name && 
      profile.farming_type && 
      profile.farm_size && 
      profile.location && 
      profile.experience;

    if (isProfileComplete) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/dashboard";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};