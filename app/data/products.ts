// The shape of one product. Everything in the app is typed against this.
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string; // CSS color used for the card art background
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description:
      "A lightweight daily trainer with a springy foam midsole and a breathable knit upper. Comfortable from the first mile to the last.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "trail-blazer",
    name: "Trail Blazer",
    tagline: "Grippy off-road shoes for rough terrain.",
    price: 149,
    category: "Sneakers",
    emoji: "🥾",
    accent: "#2f9e6f",
    description:
      "Aggressive lugs and a rock plate keep you steady on trails, while a water-resistant upper handles mud and puddles.",
    specs: ["Rock plate", "6mm lugs", "Water-resistant", "Reinforced toe"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description:
      "Compact earbuds with active noise cancellation and an eight-hour battery. The charging case adds a full day of listening.",
    specs: ["Active noise cancel", "8h battery", "USB-C case", "IPX4 sweatproof"],
  },
  {
    id: "echo-speaker",
    name: "Echo Speaker",
    tagline: "A pocket speaker that fills a room.",
    price: 59,
    category: "Audio",
    emoji: "🔊",
    accent: "#e8820c",
    description:
      "A rugged little speaker with surprising volume and a twelve-hour battery. Clips to a bag so your sound travels with you.",
    specs: ["12h battery", "Bluetooth 5.3", "Clip-on loop", "Splashproof"],
  },
  {
    id: "time-keeper",
    name: "Time Keeper",
    tagline: "A smartwatch that tracks everything.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    accent: "#d64d7a",
    description:
      "Heart rate, sleep, and workouts on a bright always-on display. A week of battery means you can leave the charger at home.",
    specs: ["Always-on display", "7-day battery", "Heart + sleep", "50m water rating"],
  },
  {
    id: "focus-band",
    name: "Focus Band",
    tagline: "A minimalist fitness tracker.",
    price: 69,
    category: "Wearables",
    emoji: "📿",
    accent: "#1fae9e",
    description:
      "A slim band that counts steps and tracks sleep without the distraction of a full smartwatch. Light enough to forget you are wearing it.",
    specs: ["Step + sleep", "14-day battery", "15g weight", "Swappable strap"],
  },
  {
    id: "power-brick",
    name: "Power Brick",
    tagline: "A fast charger for every device.",
    price: 49,
    category: "Gadgets",
    emoji: "🔋",
    accent: "#4b63d6",
    description:
      "A 20,000mAh battery with two USB-C ports that charges a phone three times over. Small enough to live in a daily bag.",
    specs: ["20000mAh", "Dual USB-C", "65W output", "LED charge meter"],
  },
  {
    id: "clip-cam",
    name: "Clip Cam",
    tagline: "A tiny action camera for any adventure.",
    price: 119,
    category: "Gadgets",
    emoji: "📷",
    accent: "#e85d5d",
    description:
      "A magnetic action camera that clips anywhere and shoots stabilized 4K. Waterproof out of the box, no case needed.",
    specs: ["4K stabilized", "Magnetic mount", "Waterproof 10m", "Voice control"],
  },
];

// Helper: look up one product by its id. Returns undefined if not found.
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
