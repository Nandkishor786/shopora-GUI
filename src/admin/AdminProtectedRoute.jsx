import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  // ADMIN TOKEN
  const token = localStorage.getItem("adminToken");

  // ADMIN DATA
  const admin = JSON.parse(localStorage.getItem("admin"));

  // NOT LOGGED IN
  if (!token || !admin) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminProtectedRoute;
