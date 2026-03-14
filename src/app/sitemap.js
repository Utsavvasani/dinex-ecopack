import { BLOG_POSTS } from "@/lib/blogData";
import { categories } from "@/lib/productData";

export default async function sitemap() {
  const baseUrl = "https://dinexecopack.com";

  // Static routes
  const staticRoutes = ["", "about", "contact", "products", "blog"].map(
    (route) => ({
      url: `${baseUrl}${route ? `/${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  // Dynamic products routes
  const productRoutes = categories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
