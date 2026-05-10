import React from "react";
import {
  ShoppingCart,
  CurrencyRupee,
  Inventory,
  People,
} from "@mui/icons-material";

const stats = [
  {
    title: "Total Revenue",
    value: "₹45,000",
    icon: CurrencyRupee,
  },
  {
    title: "Orders",
    value: "120",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    value: "80",
    icon: Inventory,
  },
  {
    title: "Users",
    value: "350",
    icon: People,
  },
];

const orders = [
  { id: "#1234", user: "Rahul", amount: 1200, status: "Completed" },
  { id: "#1235", user: "Amit", amount: 800, status: "Pending" },
  { id: "#1236", user: "Priya", amount: 1500, status: "Cancelled" },
];

const getStatusStyle = (status) => {
  if (status === "Completed") return "text-green-600";
  if (status === "Pending") return "text-yellow-500";
  return "text-red-500";
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* 🔥 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
            >
              <div>
                <p className="text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
              </div>

              <div className="bg-gray-100 p-2 rounded-full">
                <Icon className="text-gray-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔥 Recent Orders */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button className="text-sm text-blue-600">View All</button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">Order ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.user}</td>
                <td>₹{order.amount}</td>
                <td className={getStatusStyle(order.status)}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
