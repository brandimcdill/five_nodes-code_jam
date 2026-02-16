import React, { createContext, useState, useEffect } from "react";
import { checkToken, signout as apiSignout } from "../auth";

// Create context
export const AuthContext = createContext();



// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // 🔹 On mount, check if token exists + validate it
  useEffect(() => {
    if (token) {
      checkToken(token)
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          handleSignout(); // invalid token, force sigout
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);
};