import { signToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (
            !email ||
            !password ||
            email.trim().toLowerCase() !== adminEmail?.toLowerCase() ||
            password !== adminPassword
        ) {
            return Response.json(
                { success: false, message: "Invalid email or password." },
                { status: 401 }
            );
        }

        // Sign a JWT
        const token = await signToken({ email: adminEmail, role: "superadmin" });

        // Set the cookie
        const cookieStore = await cookies();
        cookieStore.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 8, // 8 hours
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Admin login error:", error);
        return Response.json(
            { success: false, message: "Something went wrong." },
            { status: 500 }
        );
    }
}
