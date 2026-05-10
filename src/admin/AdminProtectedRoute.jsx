import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  // TOKEN
  const token = localStorage.getItem("accessToken");

  // USER DATA
  const admin = JSON.parse(localStorage.getItem("user"));

  // NOT LOGGED IN
  if (!token || !admin) {
    return <Navigate to="/admin/login" />;
  }

  // NOT ADMIN
  if (admin.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminProtectedRoute;
