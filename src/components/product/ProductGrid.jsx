import { useState } from "react";
import DropDown from "../DropDown";
import ProductCard from "./ProductCard";

const options = [
  "Recommended",
  "Price (Low to High)",
  "Price (High to Low)",
  "Name A-Z",
  "Name Z-A",
];

const ProductGrid = ({ products,showAddButton=false,showQuickView =false }) => {
  const [sortType, setSortType] = useState("Recommended");

  //retrun= 0=>same order,-1=>low to high ,+1=>high-low
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "Price (Low to High)") return a.price - b.price;
    if (sortType === "Price (High to Low)") return b.price - a.price;
    if (sortType === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortType === "Name Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="w-full flex flex-col gap-6">
      {/* top */}
      <div className="flex justify-between items-center ">
        <p className="text-sm text-[#404040] font-semibold">
          {products.length} products
        </p>
        {/* dropdown */}  
        <div>
          <DropDown options={options} onSelect={setSortType} />
        </div>
      </div>
      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedProducts.map((item, index) => (
          <ProductCard item={item} key={item.id || index} showAddButton={showAddButton} showQuickView={showQuickView} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
