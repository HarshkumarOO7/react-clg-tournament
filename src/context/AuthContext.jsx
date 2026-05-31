<<<<<<< HEAD
import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/axiosConfig";
import socket from "../utils/socket";
=======
import { createContext, useContext, useState } from "react";
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  /* ================= FETCH USER ON LOAD ================= */
  useEffect(() => {
    const fetchUser = async () => {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      
      // If we have a stored user, use it immediately while fetching
      if (storedUser && storedToken) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
        } catch (e) {
          console.error("Failed to parse stored user", e);
        }
      }
      
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        // Verify token is still valid
        const res = await api.get("/profile/me");
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        // Register socket after user is loaded
        socket.emit("register", res.data._id);
      } catch (err) {
        console.error("Fetch user error:", err);
        // Token is invalid - clear everything
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Run only once on mount

  /* ================= REGISTER SOCKET WHEN USER CHANGES ================= */
  useEffect(() => {
    if (user?._id) {
      socket.emit("register", user._id);
    }
  }, [user]);

  /* ================= LOGIN FUNCTION ================= */
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    socket.emit("register", userData._id);
  };

  /* ================= LOGOUT FUNCTION ================= */
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  /* ================= UPDATE USER FUNCTION ================= */
  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateUser, loading }}>
=======
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const login = (userData, jwtToken) => {
    if (!jwtToken) {
      console.error("JWT token missing during login");
      return;
    }

    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
=======
export const useAuth = () => useContext(AuthContext);
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
