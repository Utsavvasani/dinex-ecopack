import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();

    // Explicitly expire the cookie so browsers remove it immediately
    cookieStore.set("admin_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0, // immediately expired
    });

    return Response.json({ success: true });
}
