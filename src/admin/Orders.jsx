import React, { useState } from "react";

const Orders = () => {
  const [filter, setFilter] = useState("All");

  const orders = [
    {
      id: "#1001",
      user: "Rahul",
      product: "T-Shirt",
      amount: 799,
      status: "Completed",
      date: "05 May 2026",
    },
    {
      id: "#1002",
      user: "Amit",
      product: "Shoes",
      amount: 1999,
      status: "Pending",
      date: "04 May 2026",
    },
    {
      id: "#1003",
      user: "Priya",
      product: "Watch",
      amount: 1499,
      status: "Cancelled",
      date: "03 May 2026",
    },
  ];

  const filteredOrders =
    filter === "All" ? orders : orders.filter((o) => o.status === filter);

  const getStatusStyle = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-600";
    if (status === "Pending") return "bg-yellow-100 text-yellow-600";
    return "bg-red-100 text-red-600";
  };

  return (
    <div className="space-y-4">
      {/* 🔹 Top Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">All Orders</h2>

        <input
          type="text"
          placeholder="Search orders..."
          className="border px-3 py-1 rounded"
        />
      </div>

      {/* 🔹 Filters */}
      <div className="flex gap-3">
        {["All", "Pending", "Completed", "Cancelled"].map((item) => (
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

      {/* 🔹 Table */}
      <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">Order ID</th>
              <th>User</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.user}</td>
                <td>{order.product}</td>
                <td>₹{order.amount}</td>
                <td>
                  <span
                    className={`${getStatusStyle(
                      order.status,
                    )} px-2 py-1 rounded text-sm`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="text-blue-600 text-sm mr-2">View</button>
                  <button className="text-red-500 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
