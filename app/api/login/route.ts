import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.AUTH_PASSWORD ?? "";
const COOKIE_NAME = "portfolio-auth";

export async function POST(request: NextRequest) {
    const { password } = await request.json();

    if (password === PASSWORD) {
        const response = NextResponse.json({ ok: true });
        response.cookies.set(COOKIE_NAME, PASSWORD, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
        return response;
    }

    return NextResponse.json({ ok: false }, { status: 401 });
}