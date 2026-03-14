"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
    LogOut,
    Users,
    Mail,
    Phone,
    MessageSquare,
    Search,
    ChevronUp,
    ChevronDown,
    ChevronsUpDown,
    Tag,
    Calendar,
    ShieldCheck,
    X,
} from "lucide-react";

const STATUS_COLORS = {
    new: "bg-blue-100 text-blue-700",
    read: "bg-amber-100 text-amber-700",
    replied: "bg-green-100 text-green-700",
};

const SUBJECT_COLORS = {
    "Product Inquiry": "bg-violet-100 text-violet-700",
    "Request a Quote": "bg-orange-100 text-orange-700",
    "Technical Support": "bg-cyan-100 text-cyan-700",
    "Distributorship Inquiry": "bg-blue-100 text-blue-700",
    "Brand Labeling Inquiry": "bg-purple-100 text-purple-700",
    "Catalog Download": "bg-emerald-100 text-emerald-700",
    Other: "bg-gray-100 text-gray-600",
};

function formatDate(iso) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function SortIcon({ field, sort }) {
    if (sort.field !== field) return <ChevronsUpDown className="size-3.5 text-gray-300" />;
    return sort.dir === "asc" ? (
        <ChevronUp className="size-3.5 text-primary" />
    ) : (
        <ChevronDown className="size-3.5 text-primary" />
    );
}

function DetailModal({ contact, onClose }) {
    if (!contact) return null;
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
                <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
                    <h2 className="font-bold text-gray-900 text-lg">Submission Detail</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                    >
                        <X className="size-5" />
                    </button>
                </div>
                <div className="p-7 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">First Name</p>
                            <p className="text-sm font-medium text-gray-900">{contact.firstName}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Last Name</p>
                            <p className="text-sm font-medium text-gray-900">{contact.lastName}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-900">{contact.email}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                        <p className="text-sm font-medium text-gray-900">{contact.dialCode} {contact.phone}</p>
                    </div>
                    {contact.companyName && (
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Company</p>
                            <p className="text-sm font-medium text-gray-900">{contact.companyName}</p>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        {contact.industry && (
                            <div>
                                <p className="font-semibold text-gray-400 uppercase tracking-wide mb-1">Industry</p>
                                <p className="font-medium text-gray-900">{contact.industry}</p>
                            </div>
                        )}
                        {contact.region && (
                            <div>
                                <p className="font-semibold text-gray-400 uppercase tracking-wide mb-1">Target Region</p>
                                <p className="font-medium text-gray-900">{contact.region}</p>
                            </div>
                        )}
                        {contact.businessYear && (
                            <div>
                                <p className="font-semibold text-gray-400 uppercase tracking-wide mb-1">Years in Business</p>
                                <p className="font-medium text-gray-900">{contact.businessYear}</p>
                            </div>
                        )}
                        {contact.labelingType && (
                            <div>
                                <p className="font-semibold text-gray-400 uppercase tracking-wide mb-1">Labeling Type</p>
                                <p className="font-medium text-gray-900">{contact.labelingType}</p>
                            </div>
                        )}
                        {contact.quantity && (
                            <div>
                                <p className="font-semibold text-gray-400 uppercase tracking-wide mb-1">Est. Quantity</p>
                                <p className="font-medium text-gray-900">{contact.quantity}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Subject</p>
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${SUBJECT_COLORS[contact.subject] ?? "bg-gray-100 text-gray-600"}`}>
                            {contact.subject}
                        </span>
                    </div>
                    {contact.message && (
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Message / Requirements</p>
                            <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-4 leading-relaxed whitespace-pre-wrap">{contact.message}</p>
                        </div>
                    )}
                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-50">
                        <span>Received: {formatDate(contact.createdAt)}</span>
                        <span className="capitalize font-medium text-gray-500">Status: {contact.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DashboardClient({ contacts, adminEmail }) {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState({ field: "createdAt", dir: "desc" });
    const [filterSubject, setFilterSubject] = useState("All");
    const [detail, setDetail] = useState(null);
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = async () => {
        setLoggingOut(true);
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const toggleSort = (field) => {
        setSort((s) =>
            s.field === field ? { field, dir: s.dir === "asc" ? "desc" : "asc" } : { field, dir: "asc" }
        );
    };

    const subjects = useMemo(
        () => ["All", ...Array.from(new Set(contacts.map((c) => c.subject)))],
        [contacts]
    );

    const filtered = useMemo(() => {
        let data = [...contacts];
        if (search.trim()) {
            const q = search.toLowerCase();
            data = data.filter(
                (c) =>
                    c.firstName.toLowerCase().includes(q) ||
                    c.lastName.toLowerCase().includes(q) ||
                    c.email.toLowerCase().includes(q) ||
                    c.phone.includes(q) ||
                    c.subject.toLowerCase().includes(q) ||
                    c.message?.toLowerCase().includes(q) ||
                    c.companyName?.toLowerCase().includes(q) ||
                    c.industry?.toLowerCase().includes(q) ||
                    c.region?.toLowerCase().includes(q)
            );
        }
        if (filterSubject !== "All") {
            data = data.filter((c) => c.subject === filterSubject);
        }
        data.sort((a, b) => {
            const va = a[sort.field] ?? "";
            const vb = b[sort.field] ?? "";
            return sort.dir === "asc"
                ? String(va).localeCompare(String(vb))
                : String(vb).localeCompare(String(va));
        });
        return data;
    }, [contacts, search, filterSubject, sort]);

    const stats = useMemo(() => ({
        total: contacts.length,
        new: contacts.filter((c) => c.status === "new").length,
        replied: contacts.filter((c) => c.status === "replied").length,
    }), [contacts]);

    const thClass =
        "px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap cursor-pointer select-none hover:text-gray-700 transition-colors";
    const tdClass = "px-4 py-4 text-sm text-gray-700 align-top";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top navbar */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
                            <ShieldCheck className="size-5 text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 leading-none">Admin Dashboard</p>
                            <p className="text-xs text-gray-400 mt-0.5">Dinex Ecopack</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="hidden sm:inline text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg font-medium">
                            {adminEmail}
                        </span>
                        <button
                            onClick={handleLogout}
                            disabled={loggingOut}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition-colors disabled:opacity-60"
                        >
                            <LogOut className="size-4" />
                            <span className="hidden sm:inline">{loggingOut ? "Logging out…" : "Logout"}</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                    {[
                        { label: "Total Submissions", value: stats.total, icon: Users, color: "bg-blue-50 text-blue-600" },
                        { label: "New / Unread", value: stats.new, icon: MessageSquare, color: "bg-amber-50 text-amber-600" },
                        { label: "Replied", value: stats.replied, icon: Mail, color: "bg-green-50 text-green-600" },
                    ].map(({ label, value, icon: Icon, color }) => (
                        <div
                            key={label}
                            className="bg-white rounded-2xl p-5 ring-1 ring-gray-100 shadow-sm flex items-center gap-4"
                        >
                            <div className={`p-3 rounded-xl ${color}`}>
                                <Icon className="size-5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{value}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters bar */}
                <div className="bg-white rounded-2xl ring-1 ring-gray-100 shadow-sm mb-4 p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, email, phone, message…"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 focus:bg-white placeholder:text-gray-400"
                        />
                    </div>
                    {/* Subject filter */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <Tag className="size-4 text-gray-400 shrink-0" />
                        {subjects.map((s) => (
                            <button
                                key={s}
                                onClick={() => setFilterSubject(s)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterSubject === s
                                        ? "bg-primary text-white shadow-sm"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl ring-1 ring-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className={thClass} onClick={() => toggleSort("firstName")}>
                                        <div className="flex items-center gap-1.5">Name <SortIcon field="firstName" sort={sort} /></div>
                                    </th>
                                    <th className={thClass} onClick={() => toggleSort("email")}>
                                        <div className="flex items-center gap-1.5">Email <SortIcon field="email" sort={sort} /></div>
                                    </th>
                                    <th className={thClass}>Phone</th>
                                    <th className={thClass} onClick={() => toggleSort("subject")}>
                                        <div className="flex items-center gap-1.5">Subject <SortIcon field="subject" sort={sort} /></div>
                                    </th>
                                    <th className={thClass}>Message</th>
                                    <th className={thClass} onClick={() => toggleSort("createdAt")}>
                                        <div className="flex items-center gap-1.5"><Calendar className="size-3.5" /> Date <SortIcon field="createdAt" sort={sort} /></div>
                                    </th>
                                    <th className={thClass} onClick={() => toggleSort("status")}>
                                        <div className="flex items-center gap-1.5">Status <SortIcon field="status" sort={sort} /></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-16 text-center text-gray-400">
                                            <MessageSquare className="size-10 mx-auto mb-3 opacity-30" strokeWidth={1} />
                                            <p className="text-sm font-medium">No submissions found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((c) => (
                                        <tr
                                            key={c._id}
                                            onClick={() => setDetail(c)}
                                            className="hover:bg-gray-50/80 cursor-pointer transition-colors"
                                        >
                                            <td className={tdClass}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-xs">
                                                        {c.firstName?.[0]?.toUpperCase()}{c.lastName?.[0]?.toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900 text-sm">{c.firstName} {c.lastName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={tdClass}>
                                                <span className="text-gray-600">{c.email}</span>
                                            </td>
                                            <td className={tdClass}>
                                                <span className="text-gray-600 text-xs font-mono">{c.dialCode} {c.phone}</span>
                                            </td>
                                            <td className={tdClass}>
                                                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${SUBJECT_COLORS[c.subject] ?? "bg-gray-100 text-gray-600"}`}>
                                                    {c.subject}
                                                </span>
                                            </td>
                                            <td className={tdClass}>
                                                <p className="text-gray-500 text-xs max-w-xs truncate">{c.message}</p>
                                            </td>
                                            <td className={tdClass}>
                                                <span className="text-xs text-gray-500">{formatDate(c.createdAt)}</span>
                                            </td>
                                            <td className={tdClass}>
                                                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${STATUS_COLORS[c.status] ?? "bg-gray-100 text-gray-600"}`}>
                                                    {c.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {filtered.length > 0 && (
                        <div className="px-6 py-3 border-t border-gray-50 text-xs text-gray-400">
                            Showing {filtered.length} of {contacts.length} submission{contacts.length !== 1 ? "s" : ""}
                        </div>
                    )}
                </div>
            </main>

            {/* Detail modal */}
            {detail && <DetailModal contact={detail} onClose={() => setDetail(null)} />}
        </div>
    );
}
