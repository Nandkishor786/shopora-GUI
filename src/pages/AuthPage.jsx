import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

const AuthPage = ({ setAuthOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center  relative">
      <div className="px-8 space-y-4">
        {/* close button */}
        <button
          onClick={() => setAuthOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500  hover:text-black"
        >
          <CloseIcon />
        </button>
        {/* top part */}
        <div className="space-y-6 text-center w-full">
          <h3 className="text-5xl font-semibold">Sign Up</h3>
          <div className="text-lg">
            <p className="inline-block">Already a member?</p>
            <Link to="/login" className="px-1 text-[#e60000]">
              Log In
            </Link>
          </div>
        </div>

        {/* google part */}
        <div className="w-[300px]">
          <div className="flex flex-col  justify-center gap-2 pt-4 px-4 ">
            <button className="cursor-pointer hover:scale-110 transition-all duration-300 flex  justify-center items-center gap-8 border p-2">
              <FcGoogle size={30} />
              <span className="text-base font-medium">
                Sign up with Facebook{" "}
              </span>
            </button>
            <button className="cursor-pointer hover:scale-110 transition-all duration-300 flex  justify-center items-center gap-8 border p-2">
              <FaFacebook size={30} color="#1877F2" />
              <span className="text-base font-medium">
                Sign up with Google{" "}
              </span>
            </button>
            {/* email part */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-gray-300 flex-1"></div>
              <p className="text-base text-gray-600">or</p>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <button
              onClick={() => navigate("/signup")}
              className="cursor-pointer hover:scale-110 transition-all duration-300 flex  justify-center items-center gap-8 border p-2"
            >
              <span className="text-base text-black font-medium">
                Sign up with Email
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
