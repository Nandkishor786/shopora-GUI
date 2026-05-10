import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import AllProducts from "./pages/AllProducts";
import SearchResult from "./pages/SearchResult";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CategoryLayout from "./layout/CategoryLayout";
import ScrollToTop from "./components/ScrollToTop";
import AdminLayout from "./admin/AdminLayout";
import ProductList from "./admin/ProductList";
import AdminDashboard from "./admin/AdminDashboard";
import Orders from "./admin/Orders";
import Store from "./admin/Store";
import Settings from "./admin/Settings";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";
import UserProtectedRoute from "./pages/UserProtectedRoute";
import AddProduct from "./admin/AddProduct";
import AdminLogin from "./admin/AdminLogin";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* User Website */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* categories */}
          <Route path="category" element={<CategoryLayout />}>
            <Route path=":category" element={<AllProducts />} />
          </Route>
          <Route path="search" element={<SearchResult />} />
          <Route
            path="cart"
            element={
              <UserProtectedRoute>
                <Cart />
              </UserProtectedRoute>
            }
          />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        {/* Admin Website*/}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="store" element={<Store />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
