import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthenticated } from "@/utils/auth";

const protectedRoutes = [ "/settings" ];

export default function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}