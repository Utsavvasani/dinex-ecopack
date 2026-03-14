import React from 'react';

export default function JsonLd({ type, data }) {
  let schema = null;

  if (type === 'organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DineX Ecopack",
      "url": "https://dinexecopack.com",
      "logo": "https://dinexecopack.com/logo.png",
      "description": "Premium eco-friendly packaging solutions specializing in sugarcane bagasse tableware.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "UAE",
        "addressRegion": "Dubai",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@dinexecopack.com",
      }
    };
  }

  if (type === 'website') {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DineX Ecopack",
      "url": "https://dinexecopack.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dinexecopack.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  }

  if (type === 'article' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.excerpt,
      "image": data.image || "https://dinexecopack.com/logo.png",
      "author": {
        "@type": "Organization",
        "name": "DineX Ecopack Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "DineX Ecopack",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dinexecopack.com/logo.png"
        }
      },
      "datePublished": data.datePublished || "2026-03-14",
      "url": `https://dinexecopack.com/blog/${data.slug}`
    };
  }

  if (type === 'product-list' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": data.categoryName,
      "description": `Browse our ${data.categoryName} collection of sustainable sugarcane bagasse tableware.`,
      "itemListElement": data.products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.images ? `https://dinexecopack.com${product.images[0]}` : "https://dinexecopack.com/logo.png",
          "brand": {
            "@type": "Brand",
            "name": "DineX Ecopack"
          },
          "material": product.material,
          "url": `https://dinexecopack.com/products/${product.category}`
        }
      }))
    };
  }

  if (type === 'breadcrumb' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.links.map((link, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": link.name,
        "item": `https://dinexecopack.com${link.url}`
      }))
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
