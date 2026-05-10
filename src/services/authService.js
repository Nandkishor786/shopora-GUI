import api from "../api/app";

export const signupUser = async (data) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  return response.data;
};
