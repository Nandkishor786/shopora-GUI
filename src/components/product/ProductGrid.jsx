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

const ProductGrid = ({ products }) => {
  const [sortType, setSortType] = useState("Recommended");

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
        {products.map((item, index) => (
          <ProductCard item={item} key={item.id || index} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
