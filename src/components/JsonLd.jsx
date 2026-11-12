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
      "description": "DineX Ecopack is a premier manufacturer and exporter of kraft paper salad bowls, white paper bowls, custom printed containers, and PET lids based in Surat, Gujarat with sales in London, UK.",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "03, Laxmiba Warehouse, Valthan",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "394325",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Belmont rise",
          "addressLocality": "Cheam, London",
          "postalCode": "SM26EE",
          "addressCountry": "GB"
        }
      ],
      "knowsAbout": [
        "Paper Salad Bowl Manufacturing",
        "Kraft Paper Bowls Wholesale",
        "Disposable Food Packaging",
        "Custom Printed Food Containers",
        "HORECA Foodservice Packaging",
        "Food Delivery Packaging"
      ],
      "areaServed": ["India", "United Kingdom", "European Union", "United Arab Emirates", "United States"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91-9274748030",
          "email": "info@dinexecopack.com"
        },
        {
          "@type": "ContactPoint",
          "contactType": "international sales",
          "telephone": "+44-7879905973",
          "email": "info@dinexecopack.com"
        }
      ]
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
      "description": `Browse our ${data.categoryName} collection of sustainable paper bowls and eco-friendly packaging.`,
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
