export type Snack = { id: string; handle: string; name: string; category: string; description: string; price: number; currency: string; image: string; badge?: string; available: boolean };
export const snacks: Snack[] = [
  {
    id: "classic-cookie",
    handle: "classic-chocolate-chip",
    name: "The chocolate chip",
    category: "Cookies",
    description: "Golden edges. A soft middle. Generous chocolate chunks. Our take on the forever favorite. Pack of 6; contains wheat, milk, eggs and soy.",
    price: 12,
    currency: "USD",
    image: "/images/cookies.jpg",
    badge: "THE CLASSIC",
    available: true
  },
  {
    id: "sea-salt-chips",
    handle: "sea-salt-crunch",
    name: "Sea salt & sunshine",
    category: "Chips",
    description: "Thin-cut cassava chips with a satisfying crunch and a sprinkle of sea salt. 150g bag.",
    price: 4.5,
    currency: "USD",
    image: "/images/chips.jpg",
    badge: "SALTY SIDE",
    available: true
  },
  {
    id: "double-chocolate-cookie",
    handle: "double-chocolate",
    name: "Double the chocolate",
    category: "Cookies",
    description: "For the chocolate-first kind of person. A rich cocoa cookie with melting chocolate chunks. Pack of 6; contains wheat, milk, eggs and soy.",
    price: 14,
    currency: "USD",
    image: "/images/cookies.jpg",
    badge: "CHOCOLATE LOVERS",
    available: true
  },
  {
    id: "sweet-salty-bundle",
    handle: "sweet-salty-box",
    name: "A little bit of both",
    category: "Bundles",
    description: "Why choose? Your favorite chocolate chip cookies meet our sea salt cassava chips. Contains wheat, milk, eggs and soy.",
    price: 20,
    currency: "USD",
    image: "/images/chips.jpg",
    badge: "THE PERFECT PAIR",
    available: true
  }
];
export const money = (price: number, currency = "EUR") => new Intl.NumberFormat("en-IE", { style: "currency", currency }).format(price);
