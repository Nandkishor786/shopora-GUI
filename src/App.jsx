import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import AllProducts from "./pages/AllProducts";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import SearchResult from "./pages/SearchResult";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CategoryLayout from "./layout/CategoryLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* categories */}
          <Route path="category" element={<CategoryLayout/>}>
          <Route path="all-products" element={<AllProducts />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
          <Route path="accessories" element={<Accessories />} />
          </Route>
          <Route path="search" element={<SearchResult />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
