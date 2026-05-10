import React, { useState } from "react";

const ProductList = () => {
  const [filter, setFilter] = useState("All");

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 100,
      stock: 50,
      status: "Active",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Sweater",
      price: 200,
      stock: 20,
      status: "Draft",
      image: "https://via.placeholder.com/80",
    },
  ];

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.status === filter);

  return (
    <div className="space-y-4">
      {/* 🔥 Top Bar */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Products</h2>

        <input
          type="text"
          placeholder="Search product..."
          className="border px-3 py-1 rounded"
        />
      </div>

      {/* 🔥 Tabs */}
      <div className="flex gap-3">
        {["All", "Active", "Draft"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 rounded ${
              filter === item
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 🔥 Product Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-500 text-sm">
            <tr>
              <th className="p-3">Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                {/* Product */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={p.image}
                    alt="product"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <span className="font-medium">{p.name}</span>
                </td>

                {/* Price */}
                <td>₹{p.price}</td>

                {/* Stock */}
                <td>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      p.stock > 30
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {p.stock} left
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <button className="text-blue-600 text-sm mr-3">Edit</button>
                  <button className="text-red-500 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-4">No products found</p>
        )}
      </div>

      {/* 🔥 Pagination */}
      <div className="flex justify-between items-center text-sm">
        <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
        <div className="space-x-2">
          <span className="font-semibold">1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default ProductList;
