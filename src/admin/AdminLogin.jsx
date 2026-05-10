import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      // ADMIN CHECK
      if (data.user.role !== "admin") {
        alert("Admin access only");

        return;
      }

      // STORE TOKEN
      localStorage.setItem("accessToken", data.accessToken);

      // STORE USER
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Admin Login Successful");
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          shadow-xl
          rounded-2xl
          p-10
          w-[400px]
          flex
          flex-col
          gap-5
        "
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Admin Panel</h1>

          <p className="text-gray-500 mt-2">Shopora Dashboard</p>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          className="
            border
            p-3
            rounded-lg
            outline-none
          "
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
            border
            p-3
            rounded-lg
            outline-none
          "
          required
        />

        <button
          type="submit"
          className="
            bg-black
            text-white
            py-3
            rounded-lg
          "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
