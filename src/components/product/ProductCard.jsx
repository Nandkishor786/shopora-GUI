import { Add } from "@mui/icons-material";

import { useEffect, useState } from "react";

const ProductCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  // MAIN IMAGE
  const firstImage = item.images?.[0]
    ? `http://localhost:5000/${item.images[0]}`
    : "";

  // SECOND IMAGE
  const secondImage = item.images?.[1]
    ? `http://localhost:5000/${item.images[1]}`
    : firstImage;

  // PRELOAD SECOND IMAGE
  useEffect(() => {
    if (secondImage) {
      const img = new Image();

      img.src = secondImage;
    }
  }, [secondImage]);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden h-[300px] sm:h-[550px]">
        <img
          src={hovered ? secondImage : firstImage}
          alt={item.name}
          className={`
            object-cover
            transition-transform
            duration-300
            w-full
            h-full
            ${hovered ? "scale-110" : "scale-100"}
          `}
        />

        <button className="absolute bottom-6 right-6 bg-white p-2">
          <Add className="text-black font-bold h-5 w-5" />
        </button>
      </div>

      {/* TEXT */}

      <div className="flex justify-between items-center pt-2">
        <p className="font-semibold text-2xl">{item.name}</p>

        <p className="font-semibold text-[#404040] text-base">
          ₹{Number(item.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
