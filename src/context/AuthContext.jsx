import React, { createContext, useEffect, useState } from "react";
import * as authServices from "../services/authService";
import { successToast, errorToast } from "../utils/toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //user
  const [user, setUser] = useState(null);

  //loading
  const [loading, setLoading] = useState(false);

  //login
  const login = async (formData) => {
    try {
      setLoading(true);
      const data = await authServices.loginUser(formData);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      successToast("Login Successfull");
      return data.user;
    } catch (error) {
      errorToast(error.response?.data?.message || "Login Failed !");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //register
  const register = async (formData) => {
    try {
      setLoading(true);
      const data = await authServices.signupUser(formData);
      successToast("Account Created ");
      return data;
    } catch (error) {
      errorToast(error.response?.data?.message || "Register Failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      setUser(null);

      successToast("Logout Successful");
    } catch {
      errorToast("Logout Failed");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  //check user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.stringify(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
