import {
  Home,
  ProductionQuantityLimits,
  Reviews,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { assets } from "../assets/assets";
import { logoutUser } from "../services/authService";

const linkData = [
  { title: "dashboard", icon: Home },
  { title: "products", icon: ProductionQuantityLimits },
  { title: "orders", icon: Reviews },
  { title: "store", icon: Store },
  { title: "settings", icon: Settings },
];

const AdminLayout = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const page = pathname.split("/")[2] || "dashboard"; // console.log(newPathname);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
      console.log("Logout Successfull");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-52 bg-white shadow-md p-4 fixed left-0 top-0 h-screen flex flex-col">
        <Link to="/admin/dashboard">
          <img src={assets.Shopora} alt="logo" className="w-24 mb-6" />
        </Link>
        <div className="flex flex-col justify-between flex-1">
          <div className=" text-gray-700">
            {linkData.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  to={`/admin/${item.title}`}
                  key={index}
                  className={({ isActive }) => `
                ${isActive ? "bg-[#c98e8e55]" : "hover:bg-[#c6949454]"}
                flex items-center gap-2 px-2 py-1 my-2 rounded 
                `}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={
                          isActive ? "text-[#693131]" : "text-gray-600"
                        }
                      />
                      <p
                        className={`${isActive ? "text-[#693131]" : ""} capitalize font-semibold`}
                      >
                        {item.title}
                      </p>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
          <button
            onClick={handleLogout}
            className="text-lg text-red-600  hover:underline  font-semibold p-3 "
          >
            Logout
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col ml-52">
        {/* Topbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow">
          <h1 className="text-xl font-semibold capitalize">{page}</h1>

          <button
            onClick={() => navigate("/admin/add-product")}
            className="bg-black text-white px-4 py-1 rounded-md"
          >
            Add New Product
          </button>
        </div>
        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
