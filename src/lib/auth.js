import { SignJWT, jwtVerify } from "jose";

const getSecret = () => {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET is not defined in .env.local");
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
