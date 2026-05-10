import api from "../api/app";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const addProduct = async (data) => {
  const response = await api.post("/products/add", data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const updateProductPut = async (id, data) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};

export const updateProductPatch = async (id, data) => {
  const response = await api.patch(`/products/${id}`, data);
  return response.data;
};
