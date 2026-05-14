import { Navigate } from "react-router-dom";
import { errorToast } from "../utils/toast";
const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    errorToast("Please login to continue.");
    return <Navigate to="/login" />;
  }

  return children;
};

export default UserProtectedRoute;
