import React, { useEffect } from "react";
// import { assets } from "../assets/assets";
import ProductGrid from "../components/product/ProductGrid";
import { useParams } from "react-router-dom";

import useProducts from "../hooks/useProducts";
import Loader from "../components/Loader";

// const products = [
//   {
//     id: 1,
//     name: "Relaxed Straight-Leg Trousers",
//     description: "Relaxed Straight-Leg Trousers",

//     price: 78.0,

//     category: "women",
//     subCategory: "trousers",

//     image: assets.trouserfull,
//     hoverImage: assets.relaxTrouser,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },

//   {
//     id: 2,
//     name: "Classic Cotton Baby Tee",
//     description: "Classic Cotton Baby Tee",

//     price: 35.0,

//     category: "women",
//     subCategory: "tops",

//     image: assets.babyteefull,
//     hoverImage: assets.babytee,

//     stock: 15,
//     sizes: ["S", "M", "L"],

//     rating: 4.2,
//     reviews: 8,

//     createdAt: "2025-01-02",
//   },

//   {
//     id: 3,
//     name: "Classic Trench Coat",
//     description: "Classic Trench Coat",

//     price: 260.0,

//     category: "women",
//     subCategory: "outerwear",

//     image: assets.trenchcoatfull,
//     hoverImage: assets.trenchcoat,

//     stock: 5,
//     sizes: ["M", "L"],

//     rating: 4.8,
//     reviews: 20,

//     createdAt: "2025-01-03",
//   },

//   {
//     id: 4,
//     name: "Draped Mini Dress",
//     description: "Draped Mini Dress",

//     price: 112.0,

//     category: "women",
//     subCategory: "dresses",

//     image: assets.dress1,
//     hoverImage: assets.dresszoom,

//     stock: 8,
//     sizes: ["S", "M"],

//     rating: 4.3,
//     reviews: 10,

//     createdAt: "2025-01-04",
//   },

//   {
//     id: 5,
//     name: "Tailored Pleated Trousers",
//     description: "Tailored Pleated Trousers",

//     price: 78.0,

//     category: "men",
//     subCategory: "trousers",

//     image: assets.trouser2,
//     hoverImage: assets.trouser2hover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 6,
//     name: "Textured Crewneck Knit",
//     description: "Textured Crewneck Knit",

//     price: 78.0,

//     category: "men",
//     subCategory: "Knit",

//     image: assets.knit,
//     hoverImage: assets.knithover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 7,
//     name: "Soft Linen Blouse",
//     description: "Soft Linen Blouse",

//     price: 88.0,

//     category: "women",
//     subCategory: "blouse",

//     image: assets.blousefull,
//     hoverImage: assets.blousehover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 8,
//     name: "Merino V-Neck Sweater",
//     description: "Merino V-Neck Sweater",

//     price: 130.0,

//     category: "women",
//     subCategory: "sweater",

//     image: assets.sweater,
//     hoverImage: assets.sweaterhover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 9,
//     name: "Ribbed Wool Socks",
//     description: "Ribbed Wool Socks",

//     price: 30.0,

//     category: "accessories",
//     subCategory: "shocks",

//     image: assets.shocks1,
//     hoverImage: assets.shocks,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 10,
//     name: "The Mini Handbag",
//     description: "The Mini Handbag",

//     price: 210.0,

//     category: "accessories",
//     subCategory: "handbag",

//     image: assets.handbag,
//     hoverImage: assets.handbaghover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
//   {
//     id: 11,
//     name: "Lightweight Turtleneck Top",
//     description: "Lightweight Turtleneck Top",

//     price: 80.0,

//     category: "women",
//     subCategory: "top",

//     image: assets.top,
//     hoverImage: assets.tophover,

//     stock: 10,
//     sizes: ["S", "M", "L"],

//     rating: 4.5,
//     reviews: 12,

//     createdAt: "2025-01-01",
//   },
// ];

const AllProducts = () => {
  const { category } = useParams();
  const { products, loading, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts =
    category === "all-products"
      ? products
      : products.filter((item) => item.category === category);

  if (loading) {
    return <Loader />;
  }
  return (
    <ProductGrid
      products={filterProducts}
      showAddButton={true}
      showQuickView={false}
    />
  );
};

export default AllProducts;
