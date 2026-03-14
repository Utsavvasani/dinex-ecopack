import { BlogPage } from "@/components/pages/blog/BlogPage";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Sustainability Insights & Industry News | DineX Ecopack Blog",
  description:
    "Stay informed with the latest research, ROI data, and technical insights on sugarcane bagasse and the global shift toward sustainable food packaging.",
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
