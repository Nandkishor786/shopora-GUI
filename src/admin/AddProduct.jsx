import { useState } from "react";

import useProducts from "../hooks/useProducts";

const AddProduct = () => {
  const { createProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    stock: "",
    rating: "",
    reviews: "",
    status: "Draft",
  });

  const [sizes, setSizes] = useState([]);

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSizeChange = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((item) => item !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();

      productData.append("name", formData.name);

      productData.append("description", formData.description);

      productData.append("price", formData.price);

      productData.append("category", formData.category);

      productData.append("subCategory", formData.subCategory);

      productData.append("stock", formData.stock);

      productData.append("rating", formData.rating);

      productData.append("reviews", formData.reviews);

      productData.append("status", formData.status);

      productData.append("sizes", JSON.stringify(sizes));

      images.forEach((image) => {
        productData.append("images", image);
      });

      await createProduct(productData);

      alert("Product Added Successfully");

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        subCategory: "",
        stock: "",
        rating: "",
        reviews: "",
        status: "Draft",
      });

      setSizes([]);

      setImages([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[500px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="text"
          name="subCategory"
          placeholder="Sub Category"
          value={formData.subCategory}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2"
        />

        <div>
          <h2 className="mb-2">Select Sizes</h2>

          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <label key={size} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={sizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />

                {size}
              </label>
            ))}
          </div>
        </div>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="Draft">Draft</option>

          <option value="Active">Active</option>
        </select>

        <div>
          <p>Product Images</p>

          <input
            type="file"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
          />
        </div>

        <button type="submit" className="bg-black text-white p-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
