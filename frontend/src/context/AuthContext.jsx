import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/client";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load profile on app start
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/vendor/profile");
        setVendor(res.data.data);
      } catch (err) {
        setVendor(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/vendor/login", { email, password });
    setVendor(res.data.data);
    return res.data;
  };

  const register = async (payload) => {
    const res = await api.post("/vendor/register", payload);
    return res.data;
  };

  const logout = async () => {
    await api.post("/vendor/logout");
    setVendor(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ vendor, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
