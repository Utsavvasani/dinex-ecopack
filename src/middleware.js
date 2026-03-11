import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // Protect /admin/dashboard routes
    if (pathname.startsWith("/admin/dashboard")) {
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        const payload = await verifyToken(token);
        if (!payload) {
            const response = NextResponse.redirect(
                new URL("/admin/login", request.url)
            );
            response.cookies.delete("admin_token");
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
