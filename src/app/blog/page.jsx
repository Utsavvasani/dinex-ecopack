import { BlogPage } from "@/components/pages/blog/BlogPage";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Sustainability Insights & Industry News | DineX Ecopack Blog",
  description:
    "Stay informed with the latest research, ROI data, and technical insights on sustainable paper packaging, kraft salad bowls, and the global shift toward eco-friendly food containers.",
};

export default function Page() {
  return (
    <>
      <JsonLd 
        type="breadcrumb" 
        data={{
          links: [
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" }
          ]
        }} 
      />
      <BlogPage />
    </>
  );
}
