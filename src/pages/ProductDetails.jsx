import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Button from "../components/Button";
import { Favorite } from "@mui/icons-material";

import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const [openSetion, setOpenSection] = useState("");
  const { id } = useParams();
  const { getSingleProduct, loading } = useProducts();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSingleProduct(id);
      console.log(data);
      setSelectedImage(data.images[0]);
      console.log(data.images[0]);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen max-w-7xl mx-auto sm:px-8 px-4 flex flex-col sm:flex-row items-start mb-32">
      {/* all images */}
      <div className="flex gap-4 w-[90%]  ">
        {/* thumbnails */}
        <div className="flex flex-col gap-3 ">
          {product?.images?.map((img, index) => (
            <img
              key={index}
              onClick={() => setSelectedImage(img)}
              src={`${import.meta.env.VITE_BACKEND_URL}/${img}`}
              alt=""
              className={`
          w-20
          h-24
          object-cover
          cursor-pointer
          border
          transition
          mt-2
          hover:opacity-70
          ${selectedImage === img ? "border-black ring-1 ring-black" : "border-gray-300"}
        `}
            />
          ))}
        </div>
        {/* main image */}
        <div className="flex-1">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${selectedImage}`}
            alt={product?.name}
            className="w-full  object-cover transition duration-300"
          />
        </div>
      </div>
      {/* details */}
      <div className=" w-full sm:w-[600px] pl-12  py-6 sticky top-0">
        {/* top */}
        <div className="space-y-2 pb-4">
          <h2 className="text-3xl font-semibold">{product?.name}</h2>
          <p className="text-xl tracking-wide font-medium">
           ₹{Number(product?.price).toFixed(2)}
          </p>
        </div>
        {/* main */}
        <div className="space-y-6 mb-8">
          {/* quantity */}
          <div>
            <p className="text-base">
              Quantity <span className="text-[10px] ">*</span>
            </p>
            <div className=" flex justify-between items-center w-24 border border-black px-2 mt-1">
              <button className="text-2xl hover:opacity-50 transition font-semibold">
                –
              </button>
              1
              <button className="text-2xl hover:opacity-50 transition font-semibold">
                +
              </button>
            </div>
          </div>
          {/* buttons */}
          <div className="mt-6 flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-between w-full gap-2">
              <Button classname="bg-white text-black border rounded-sm border-black p-2">
                Add to Cart
              </Button>
              <button className="border border-black w-11 h-11 rounded-sm text-[#e0e0e0] p-2">
                <Favorite />
              </button>
            </div>
            <Button classname="bg-black text-white p-2">Buy Now</Button>
          </div>
          <p className="text-[#4d4c39] leading-5">
            This is your Product Page description. It’s a great <br />
            place to tell customers what this category is about,
            <br /> connect with your audience and draw attention to your
            products.
          </p>
        </div>
        {/* bottom */}
        <div className="mt-6">
          {/* product */}
          <div className="flex flex-col  py-3 border-b border-gray-400 font-medium">
            <div className="w-full flex justify-between items-center">
              <p className="text-base font-medium">Product Info</p>
              <button
                onClick={() =>
                  setOpenSection(openSetion === "product" ? "" : "product")
                }
                className={`text-xl transition-transform duration-300 ${openSetion === "product" ? "rotate-180 " : ""}`}
              >
                {openSetion === "product" ? "–" : "+"}
              </button>
            </div>
            <div
              className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openSetion === "product" ? "max-h-[300px] pt-2 opacity-100" : "opacity-0 max-h-0"}`}
            >
              <p className="text-black text-sm leading-relaxed font-medium font-neue">
                I'm a great place to add more information about your product,{" "}
                <br />
                such as sizing, material, care, and cleaning instructions. This{" "}
                <br />
                is also a great space to highlight what makes this product{" "}
                <br />
                special and how your customers can benefit from this item.
              </p>
            </div>
          </div>
          {/* shipping */}
          <div className="flex flex-col items-center py-3 border-b border-gray-400 font-medium">
            <div className="flex justify-between items-center w-full">
              <p>Shipping Info</p>
              <button
                onClick={() =>
                  setOpenSection(openSetion === "shipping" ? "" : "shipping")
                }
                className={`text-xl transition-transform duration-300 ${openSetion === "shipping" ? "rotate-180 " : ""}`}
              >
                {openSetion === "shipping" ? "–" : "+"}
              </button>
            </div>
            <div
              className={` overflow-hidden transition-all duration-500 ease-in-out
              ${openSetion === "shipping" ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0"}`}
            >
              <p className="text-sm font-medium font-neue">
                I’m a great place to add more information about your shipping
                methods, packaging, and cost. <br />
                <br />
                Providing straightforward information about your
                <span className="underline  "> shipping policy</span> is a great
                way to build trust and reassure your customers that they can buy
                from you with confidence.
              </p>
            </div>
          </div>
          {/* policy */}
          <div className=" relative flex flex-col items-center pt-3  font-medium w-full">
            <div className=" flex justify-between items-center w-full">
              <p>Return & Refund Policy</p>
              <button
                onClick={() =>
                  setOpenSection(openSetion === "policy" ? "" : "policy")
                }
                className={`text-xl transition-transform duration-300 ${openSetion === "policy" ? "rotate-180" : ""}`}
              >
                {openSetion === "policy" ? "–" : "+"}
              </button>
            </div>
            <div
              className={`
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${openSetion === "policy" ? "opacity-100 max-h-[500px] pt-2" : "opacity-0 max-h-0"}
  `}
            >
              <div className="text-sm font-medium font-neue w-full leading-relaxed">
                <p className="pt-2">
                  I’m a great place to let your customers know what to do in{" "}
                  <br />
                  case they are dissatisfied with their purchase.
                </p>
                <div className="flex items-center gap-3 pl-5 pt-4">
                  <span className="w-1 h-1 rounded-full bg-black"></span>
                  <p>Easy Returns & Exchanges</p>
                </div>
                <div className="flex items-center gap-3 pl-5 ">
                  <span className="w-1 h-1 rounded-full bg-black"></span>
                  <p> Hassle-Free Process</p>
                </div>
                <div className="flex items-center gap-3 pl-5 pb-4 ">
                  <span className="w-1 h-1 rounded-full bg-black"></span>
                  <p> Builds Customer Confidence</p>
                </div>
                Having a straightforward refund or exchange policy is a great{" "}
                <br />
                way to build trust and reassure your customers that they can{" "}
                <br /> buy with confidence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
