import { Add, Opacity } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, showAddButton, showQuickView }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const firstImage = item?.images?.[0]
    ? `${import.meta.env.VITE_BACKEND_URL}/${item.images[0]}`
    : "";

  const secondImage = item?.images?.[1]
    ? `${import.meta.env.VITE_BACKEND_URL}/${item.images[1]}`
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
      onClick={() => navigate(`/product-page/${item._id}`)}
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden h-[300px] sm:h-[550px]">
        <img
          src={firstImage}
          alt={item.name}
          className={`
            absolute inset-0
            object-cover
            transition-all
            duration-300
            w-full
            h-full
            ${hovered ? " opacity-0 scale-110" : " opacity-100 scale-100 "}
          `}
        />
        <img
          src={secondImage}
          alt={item.name}
          className={`
            absolute
             inset-0
            object-cover
            transition-all
            duration-300
            w-full  
            h-full
            ${hovered ? "scale-110 opacity-100" : " opacity-0 scale-100 "}
          `}
        />
        {showAddButton && (
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute bottom-6 right-6 bg-white p-2"
          >
            <Add className="text-black font-bold h-5 w-5" />
          </button>
        )}
        {showQuickView && (
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`absolute bottom-0 left-0 w-full bg-[#eaebe6dd] text-black font-semibold text-sm py-3 transition-all duration-300  ease-in-out ${hovered ? "opacity-100 translate-y-0  " : "opacity-0 translate-y-full"}`}
          >
            Quick View
          </button>
        )}
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
