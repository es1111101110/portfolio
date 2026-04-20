import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.AUTH_PASSWORD ?? "";
const COOKIE_NAME = "portfolio-auth";

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get(COOKIE_NAME);

    if (cookie?.value === PASSWORD) {
        return NextResponse.next();
    }

    const { pathname } = request.nextUrl;
    if (pathname === "/login" || pathname.startsWith("/api/")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};