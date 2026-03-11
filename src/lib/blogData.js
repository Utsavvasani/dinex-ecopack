export const BLOG_CATEGORIES = [
  "All",
  "Eco-Friendly",
  "Sustainability",
  "Product Innovation",
  "Event",
  "Industry Trends",
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "benefits-of-sugarcane-bagasse-tableware",
    title: "Why Sugarcane Bagasse is the Future of Sustainable Dining",
    excerpt:
      "Discover how agricultural waste is being transformed into premium, eco-friendly tableware that's 100% compostable.",
    content: `
      <h2>The Rise of Bagasse</h2>
      <p>In the quest for sustainable alternatives to plastic and styrofoam, sugarcane bagasse has emerged as a frontrunner. But what exactly is it? Bagasse is the fibrous residue left over after sugarcane stalks are crushed to extract their juice.</p>
      
      <blockquote>
        Converting what was once agricultural waste into high-quality dining products is the essence of the circular economy.
      </blockquote>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>100% Compostable:</strong> Breaks down in as little as 90 days in commercial composting facilities.</li>
        <li><strong>Sturdy & Reliable:</strong> Heat resistant and microwave safe.</li>
        <li><strong>Natural Look:</strong> Provides a premium, organic feel to any dining experience.</li>
      </ul>

      <p>At Dinex Ecopack, we leverage advanced manufacturing processes to ensure that every plate and bowl meets the highest standards of quality and sustainability.</p>
    `,
    category: "Eco-Friendly",
    tags: ["Sustainable", "Bagasse", "Eco-Dining"],
    date: "March 15, 2024",
    author: {
      name: "Sustain Team",
      role: "Product Research",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sustain",
    },
    readTime: "5 min read",
    image: "/landing/bamboo.jpg", // Using existing asset if available
  },
  {
    id: 2,
    slug: "composting-guide-for-home-and-business",
    title: "A Complete Guide to Composting Eco-Friendly Tableware",
    excerpt:
      "Learn how to properly dispose of your biodegradable products to ensure they return to the earth as nutrient-rich soil.",
    content: `
      <h2>Closing the Loop</h2>
      <p>Transitioning to eco-friendly products is just the first step. The true magic happens when these products return to the soil, completing the lifecycle.</p>
      
      <h3>Home vs. Industrial Composting</h3>
      <p>Not all biodegradable products are created equal. While many are home-compostable, some require the high heat of industrial facilities to break down efficiently.</p>
    `,
    category: "Sustainability",
    tags: ["Compost", "Waste-Management", "Green-Life"],
    date: "April 02, 2024",
    author: {
      name: "Eco Expert",
      role: "Sustainability Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Expert",
    },
    readTime: "7 min read",
    image: "/landing/bamboo.jpg",
  },
  {
    id: 3,
    slug: "innovation-in-pulp-processing",
    title: "The Science Behind Our Eco-Pulp Transformation",
    excerpt:
      "Going inside the factory to see how raw fibers are processed into the sturdy tableware you use every day.",
    content: "Content for the science of pulp processing...",
    category: "Product Innovation",
    tags: ["Innovation", "Factory", "Quality Control"],
    date: "May 10, 2024",
    author: {
      name: "Factory Manager",
      role: "Operations Head",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager",
    },
    readTime: "6 min read",
    image: "/landing/bamboo.jpg",
  },
];
