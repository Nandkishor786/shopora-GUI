import { createContext, useState } from "react";

import * as productServices from "../services/productService";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  // GET ALL PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productServices.getProducts();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // get single product
  const getSingleProduct = async (id) => {
    try {
      const data = await productServices.getProductById(id);

      return data.product;
    } catch (error) {
      console.log(error);
    }
  };
  // ADD PRODUCT
  const createProduct = async (formData) => {
    try {
      await productServices.addProduct(formData);

      await fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE PRODUCT
  const removeProduct = async (id) => {
    try {
      await productServices.deleteProduct(id);

      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //update  product
  const updateProduct = async (id, formData) => {
    try {
      await productServices.updateProductPut(id, formData);

      await fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        createProduct,
        removeProduct,
        updateProduct,
        getSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
