import React from "react";
import { assets } from "../assets/assets";

const Store = () => {
  return (
    <div className="space-y-6">

      {/* 🔥 Store Banner */}
      <div className="bg-gradient-to-r from-black to-gray-700 text-white p-6 rounded-xl flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Shopora Store</h2>
          <p className="text-sm opacity-80">Manage your products & sales</p>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
          View Live
        </button>
      </div>

      {/* 🔹 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Products", value: 80 },
          { label: "Orders", value: 120 },
          { label: "Revenue", value: "₹45,000" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500">{item.label}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* 🔥 Category Tabs */}
      <div className="flex gap-4 border-b pb-2">
        <button className="font-semibold border-b-2 border-black">
          All
        </button>
        <button className="text-gray-500 hover:text-black">Clothing</button>
        <button className="text-gray-500 hover:text-black">Accessories</button>
      </div>

      {/* 🔥 Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Product Card */}
        {[ 
          { img: assets.dress, name: "Mini Dress", price: 799 },
          { img: assets.shocks1, name: "Shocks", price: 1999 },
          { img: assets.trouser, name: "Trouser", price: 1499 },
          { img: assets.sweater, name: "Sweater", price: 999 },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-3 group hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={product.img}
                alt="product"
                className="w-full h-36 object-cover rounded"
              />

              {/* 🔥 Hover Actions */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white px-2 py-1 text-sm rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                  Delete
                </button>
              </div>
            </div>

            <p className="mt-2 font-semibold">{product.name}</p>
            <p className="text-gray-500 text-sm">₹{product.price}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Store;