/**
 * Navigation constants.
 * Add, remove, or reorder nav items here.
 */

export const NAV_TRIGGER_STYLE =
  "bg-transparent text-foreground/80 hover:!bg-transparent hover:text-primary focus:!bg-transparent focus:text-primary data-[state=open]:!bg-transparent data-[state=open]:text-primary data-[active]:!bg-transparent data-[active]:text-primary text-xs lg:text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide uppercase transition-colors px-2 xl:px-4";

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
];

export const navDropdowns = [
  {
    title: "PRODUCTS",
    key: "products",
    isGrid: true,
    items: [
      {
        title: "Round Plates",
        href: "/products/round-plates",
        image: "/assets/square_plate.png",
      },
      {
        title: "Compartment Plates",
        href: "/products/compartment-plates",
        image:
          "/assets/square_plate.png",
      },
      {
        title: "Square Plates",
        href: "/products/square-plates",
        image: "/assets/square_plate.png",
      },
      {
        title: "Bowls",
        href: "/products/bowls",
        image: "/assets/square_plate.png",
      },
      {
        title: "Clamshell",
        href: "/products/clamshell",
        image: "/assets/square_plate.png",
      },
    ],
  },

  {
    title: "BUSINESS INQUIRY",
    key: "inquiry",
    items: [
      {
        title: "Partnerships",
        href: "/inquiry/partnerships",
        description: "Partner with us for a greener future.",
      },
      {
        title: "Distributorship",
        href: "/inquiry/distributorship",
        description: "Become an official distributor.",
      },
    ],
  },
];
