import { SignJWT, jwtVerify } from "jose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI && process.env.NODE_ENV === "production") {
    // Only throw in production if it's not a build phase or if you really need it.
    // However, for Next.js build, we can sometimes allow it to be missing if the page is dynamic.
    console.warn("MONGODB_URI is not defined. Database connectivity will be unavailable.");
}

const getSecret = () => {
    const secret = process.env.JWT_SECRET || "fallback_secret_for_build_purposes_only";
    if (!secret && process.env.NODE_ENV === "production") {
        console.warn("JWT_SECRET is not defined. Auth will be broken.");
    }
    return new TextEncoder().encode(secret);
};

/**
 * Sign a JWT token with 8-hour expiry.
 */
export async function signToken(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("8h")
        .sign(getSecret());
}

/**
 * Verify and decode a JWT token.
 * Returns the payload or null if invalid/expired.
 */
export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, getSecret());
        return payload;
    } catch {
        return null;
    }
}
