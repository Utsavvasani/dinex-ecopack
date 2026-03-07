import { NewsletterBox } from "@/components/pages/blog/NewsletterBox";

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <section className="container px-4 md:px-8 mx-auto max-w-7xl pb-24">
        <NewsletterBox />
      </section>
    </>
  );
}
