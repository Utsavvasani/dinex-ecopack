import { BlogDetail } from "@/components/pages/blog/BlogDetail";
import { BLOG_POSTS } from "@/lib/blogData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | DineX Ecopack Blog`,
    description: post.excerpt,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}
