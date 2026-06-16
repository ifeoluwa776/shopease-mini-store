export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "High-fidelity sound with deep bass response, crystal-clear microphones, and up to 40 hours of active battery backup.",
    price: 129.99,
    category: "Electronics",
    image: "https://unsplash.com",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    title: "Classic Sport Sneakers",
    description: "Lightweight, breathable mesh running shoes with impact-absorbing cushions designed for daily athletic performance.",
    price: 59.99,
    category: "Footwear",
    image: "https://unsplash.com",
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    title: "Minimalist Smart Watch",
    description: "Track your fitness steps, real-time sleep data, blood monitoring parameters, and notification sync across platforms.",
    price: 199.99,
    category: "Electronics",
    image: "https://unsplash.com",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    title: "Designer Leather Bag",
    description: "Handcrafted water-resistant leather shell featuring built-in 15-inch laptop sleeves and hidden asset pockets.",
    price: 89.99,
    category: "Accessories",
    image: "https://unsplash.com",
    rating: 4.0,
    inStock: false
  }
];
