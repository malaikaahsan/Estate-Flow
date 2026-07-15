import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../services/authService";
import { saveAuth, getToken, getUser, clearAuth } from "../utils/localstorage";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  const login = (email, password, rememberMe = false) => {
    const result = loginUser(email, password);

    if (!result.success) {
      toast.error(result.message);
      return {
        success: false,
      };
    }

    setUser(result.user);
    setToken(result.token);

    saveAuth(result.token, result.user, rememberMe);

    toast.success(`Welcome ${result.user.name}!`);

    return {
      success: true,
      user: result.user,
    };
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    clearAuth();

    toast.success("Logged out successfully.");
  };

  const checkAuth = () => {
    setTimeout(() => {
      const token = getToken();
      const user = getUser();

      if (token && user) {
        setToken(token);
        setUser(user);
      }

      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    token,
    loading,

    isAuthenticated: !!token,

    login,

    logout,

    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
