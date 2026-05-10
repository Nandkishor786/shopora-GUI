import api from "../api/app";

export const adminLogin = async (formData) => {
  const response = await api.post("/auth/login", formData);
  
  return response.data;
};
