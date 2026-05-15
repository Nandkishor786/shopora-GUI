import { PlusOne, Search } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import PriceFilter from "../components/PriceFilter";
import DropDown from "../components/DropDown";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";
import Loader from "../components/Loader";

const category = [
  {
    title: "All",
  },
  {
    title: "Accessories",
  },
  {
    title: "Women",
  },
  {
    title: "Men",
  },
  {
    title: "Winter Sale",
  },
  {
    title: "The Limited Collection",
  },
];

const SearchResult = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const { products, fetchProducts, loading } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategry] = useState("All");
  const [price, setPrice] = useState(5000);

  //filter the products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All"
          ? true
          : product.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchPrice = Number(product.price) <= Number(price);
      return matchSearch && matchCategory && matchPrice;
    });
  }, [products, search, selectedCategory, price]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen  max-w-7xl mx-auto sm:px-8  pb-20">
      {/* top */}
      <div className="flex flex-col items-center  space-y-6 py-10 px-4  ">
        {/* lines */}
        <div className="flex flex-col items-center gap-4  max-w-[500px] px-4 text-center">
          <h3 className="text-3xl sm:text-5xl font-medium"> Search Results</h3>
          <p className="text-center text-sm sm:text-base text-gray-600">
            {" "}
            Discover premium fashion products crafted for <br />
            comfort, style, and everyday confidence. Search, explore, and shop
            the latest trends all in one place.
          </p>
        </div>
        {/* search bar */}
        <div className=" flex items-center border px-2 rounded-md border-gray-400  bg-white w-full max-w-[550px]">
          <input
            type="text"
            placeholder="Search for accessories, and discover the latest fashion trends..."
            className="outline-none border-none py-3 w-full placeholder-gray-500 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="hover:text-blue-600 opacity-60">
            <Search />
          </button>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row items-start gap-6 px-4">
        {/* sidebar */}
        <div className="w-full md:w-[220px] shrink-0">
          <p className="py-4 border-b border-gray-400 font-semibold text-xl">
            Filter By
          </p>
          {/* category */}
          <div className=" border-b border-gray-400">
            <div className="flex  items-center justify-between py-4">
              <p className="text-base">Category</p>
              <button
                onClick={() => setCategoryOpen((prev) => !prev)}
                className="text-2xl"
              >
                {categoryOpen ? "-" : "+"}
              </button>
            </div>
            {categoryOpen && (
              <div className=" flex flex-col items-start pb-6">
                {category.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategry(item.title)}
                    className={`
                      ${selectedCategory === item.title ? "text-black" : "text-[#4a4a4a]"}
                       hover:text-gray-400 text-base font-semibold `}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* price */}
          <div className=" border-b border-gray-400 py-4  ">
            {/*  */}
            <div className="flex  items-center justify-between ">
              <p>Price</p>
              <button
                onClick={() => setPriceOpen((prev) => !prev)}
                className="text-2xl"
              >
                {priceOpen ? "-" : "+"}
              </button>
            </div>
            {priceOpen && <PriceFilter price={price} setPrice={setPrice} />}
          </div>
        </div>
        {/* product grid */}
        <div className="w-full pt-8">
          {/*grid */}
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-2xl font-semibold text-gray-700">
                No Products Found
              </p>

              <p className="text-gray-500 mt-2">
                Try searching with different keywords.
              </p>
            </div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              showQuickView={true}
              showAddButton={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
