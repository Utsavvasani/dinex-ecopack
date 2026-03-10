"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import PageLoader from "@/components/PageLoader";

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        // Admin pages: clean slate, no navbar or footer
        return <>{children}</>;
    }

    return (
        <>
            <PageLoader />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
