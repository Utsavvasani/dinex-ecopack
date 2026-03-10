import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
    // Auth check
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) redirect("/admin/login");

    const payload = await verifyToken(token);
    if (!payload) redirect("/admin/login");

    // Fetch contacts
    await connectToDatabase();
    const contacts = await Contact.find({})
        .sort({ createdAt: -1 })
        .select("-__v")
        .lean();

    // Serialize for client (convert ObjectId + Date to strings)
    const serialized = contacts.map((c) => ({
        ...c,
        _id: c._id.toString(),
        createdAt: c.createdAt?.toISOString() ?? null,
        updatedAt: c.updatedAt?.toISOString() ?? null,
    }));

    return (
        <DashboardClient
            contacts={serialized}
            adminEmail={payload.email}
        />
    );
}
