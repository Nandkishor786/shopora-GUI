import React from "react";

const PriceFilter = ({price ,setPrice}) => {
   return (
    <div className="w-full max-w-sm py-4">
      <input
        type="range"
        min="0"
        max="5000"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className=" w-full cursor-pointer text-black h-[4px]"
      />
      <div className=" flex justify-between font-semibold">
        <p>₹0</p>
        <p>₹{price}</p>
      </div>

    </div>
  );
};

export default PriceFilter;
