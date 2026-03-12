import { products, categories } from "@/lib/productData";
import { ProductDetails } from "@/components/pages/products/ProductDetails";
import { CategoryHeader } from "@/components/pages/products/CategoryHeader";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryHeader title={currentCategory.name} />

      <div className="space-y-16">
        {filteredProducts.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
