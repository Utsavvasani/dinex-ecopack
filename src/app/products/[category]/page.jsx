export const dynamic = 'force-dynamic';
export const dynamicParams = true;
import { products, categories } from "@/lib/productData";
import { ProductDetails } from "@/components/pages/products/ProductDetails";
import { CategoryHeader } from "@/components/pages/products/CategoryHeader";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) return { title: "Category Not Found" };

  return {
    title: `${currentCategory.name} | Premium Sugarcane Bagasse Sustainable Solutions`,
    description: `Browse our high-quality collection of ${currentCategory.name}. Sustainable, compostable, and eco-friendly tableware by DineX Ecopack.`,
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
