import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    category: "Accessories",
    imageUrl: "/images/headphones.jpg",
    inStock: true,
    rating: 5,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smart watch with health monitoring.",
    price: 199.99,
    category: "Accessories",
    imageUrl: "/images/smart-watch.jpg",
    inStock: true,
    rating: 4,
  },
  {
    id: 3,
    name: "VoltNest 65W GaN Charger",
    description: "A compact fast charger for phones, tablets, and laptops.",
    price: 49.99,
    category: "Chargers",
    imageUrl: "/products/65w-gan-charger.jpg",
    inStock: true,
    rating: 4.6,
  },
];
