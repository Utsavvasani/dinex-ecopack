export const dynamic = 'force-dynamic';
export const dynamicParams = true;
import { products, categories } from "@/lib/productData";
import { ProductDetails } from "@/components/pages/products/ProductDetails";
import { CategoryHeader } from "@/components/pages/products/CategoryHeader";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";

const categorySEO = {
  "kraft-paper-salad-bowls": {
    title: "Kraft Paper Salad Bowls Wholesale | Manufacturer & Supplier - DineX Ecopack",
    description: "Wholesale kraft paper salad bowls in 500ml, 750ml, and 1000ml sizes with food-grade PE lining and snap-fit PET lids. Direct factory manufacturer in Surat, Gujarat.",
    keywords: [
      "kraft paper bowl manufacturer",
      "kraft paper bowls wholesale",
      "kraft salad bowl manufacturer",
      "disposable kraft paper bowls",
      "kraft paper bowls with lids",
      "500ml kraft bowl with lid",
      "750ml kraft bowl with lid",
      "1000ml kraft bowl with lid",
      "kraft takeaway food bowls",
      "kraft food packaging containers",
      "paper bowl manufacturer Gujarat",
      "paper bowl manufacturer Surat",
      "buy kraft paper bowls in bulk",
      "HORECA food packaging supplier",
    ],
  },
  "white-paper-bowls": {
    title: "White Paper Salad Bowls Wholesale | Manufacturer & Exporter - DineX Ecopack",
    description: "High-quality white paper salad bowls in 500ml, 750ml, and 1000ml. Clean medical-grade aesthetic, leak-proof rolled rim for delivery, takeaway, and catering.",
    keywords: [
      "white paper bowl manufacturer",
      "white paper bowl supplier",
      "white paper salad bowls",
      "white disposable food bowls",
      "white paper bowls wholesale",
      "white paper bowls with lids",
      "premium white paper salad bowls wholesale",
      "white paper salad bowl manufacturer Gujarat",
      "disposable food packaging wholesale India",
    ],
  },
  "printed-bowls": {
    title: "Custom Printed Paper Bowls & Branded Salad Packaging | DineX Ecopack",
    description: "Custom logo printed kraft and white paper bowls in 500ml, 750ml, and 1000ml. High-definition flexo printing with food-safe inks for restaurant chains, QSRs, and cloud kitchens.",
    keywords: [
      "custom printed paper bowls",
      "branded paper salad bowls",
      "printed kraft paper bowls",
      "logo printed paper bowls",
      "private label paper bowls",
      "OEM paper bowl manufacturer",
      "custom printed paper bowls India",
      "custom printed paper bowls Gujarat",
      "custom logo food packaging India",
      "private label food packaging manufacturer India",
    ],
  },
  "pet-lids": {
    title: "150mm Anti-Fog PET Lids for Paper Bowls | DineX Ecopack",
    description: "Universal 150mm crystal-clear anti-fog PET lids engineered for 500ml, 750ml, and 1000ml paper salad bowls. Leak-proof snap-fit for takeaway and food delivery.",
    keywords: [
      "paper bowls with PET lids",
      "PET lid paper containers",
      "disposable bowl with transparent lid",
      "paper salad container with clear lid",
      "takeaway bowls with transparent lids",
      "food packaging containers with lids",
      "paper food packaging with lids",
      "leak resistant takeaway containers",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) return { title: "Category Not Found" };

  const custom = categorySEO[category];
  if (custom) {
    return {
      title: custom.title,
      description: custom.description,
      keywords: custom.keywords,
    };
  }

  return {
    title: `${currentCategory.name} | Premium Paper Bowls & Sustainable Packaging Solutions`,
    description: `Browse our high-quality collection of ${currentCategory.name}. Sustainable, biodegradable, and eco-friendly paper bowls by DineX Ecopack.`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd 
        type="product-list" 
        data={{
          categoryName: currentCategory.name,
          products: filteredProducts
        }} 
      />
      <JsonLd 
        type="breadcrumb" 
        data={{
          links: [
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" },
            { name: currentCategory.name, url: `/products/${category}` }
          ]
        }} 
      />
      <CategoryHeader title={currentCategory.name} />

      <div className="space-y-16">
        {filteredProducts.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
