import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable in .env.local"
    );
}

/**
 * Global cache to avoid re-connecting on every API call in development
 * (Next.js hot-reloads modules, so we cache on the global object).
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                bufferCommands: false,
            })
            .then((m) => m);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
