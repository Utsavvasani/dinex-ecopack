// Admin pages get their own clean layout — no site Navbar or Footer.
// Next.js App Router will use this layout for all /admin/* routes
// instead of the root layout's Navbar/Footer.

export const metadata = {
    title: "Admin — Dinex Ecopack",
    description: "Admin portal for Dinex Ecopack",
};

export default function AdminLayout({ children }) {
    return children;
}
