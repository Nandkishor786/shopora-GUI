import React from "react";
import { assets } from "../assets/assets";
import ProductGrid from "../components/product/ProductGrid";

const products = [
  {
    id: 1,
    name: "Relaxed Straight-Leg Trousers",
    description: "Relaxed Straight-Leg Trousers",

    price: 78.00,

    category: "men",
    subCategory: "trousers",

    image: assets.trouserfull,
    hoverImage: assets.relaxTrouser,

    stock: 10,
    sizes: ["S", "M", "L"],

    rating: 4.5,
    reviews: 12,

    createdAt: "2025-01-01",
  },

  {
    id: 2,
    name: "Classic Cotton Baby Tee",
    description: "Classic Cotton Baby Tee",

    price: 35.00,

    category: "women",
    subCategory: "tops",

    image: assets.babyteefull,
    hoverImage: assets.babytee,

    stock: 15,
    sizes: ["S", "M", "L"],

    rating: 4.2,
    reviews: 8,

    createdAt: "2025-01-02",
  },

  {
    id: 3,
    name: "Classic Trench Coat",
    description: "Classic Trench Coat",

    price: 260.00,

    category: "women",
    subCategory: "outerwear",

    image: assets.trenchcoatfull,
    hoverImage: assets.trenchcoat,

    stock: 5,
    sizes: ["M", "L"],

    rating: 4.8,
    reviews: 20,

    createdAt: "2025-01-03",
  },

  {
    id: 4,
    name: "Draped Mini Dress",
    description: "Draped Mini Dress",

    price: 112.00,

    category: "women",
    subCategory: "dresses",

    image: assets.dress1,
    hoverImage: assets.dresszoom,

    stock: 8,
    sizes: ["S", "M"],

    rating: 4.3,
    reviews: 10,

    createdAt: "2025-01-04",
  },
];
const AllProducts = () => {
  return <ProductGrid products={products} />;
};

export default AllProducts;
