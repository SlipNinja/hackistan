import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
 import Cookies from "js-cookie"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = Cookies.get("token");

  if (token) {
    try {
      setUser(jwtDecode(token));
    } catch (error) {
      Cookies.remove("token");
      console.error(error);
    }
  }

  setLoading(false);
}, []); 

  const login = (token) => {
    Cookies.set("token", token, { expires: "2h" });
    setUser(jwtDecode(token));
  };
 
  const logout = () => {
  Cookies.remove("token");
  setUser(null);
};
  return (
    <AuthContext.Provider value={{ user, setUser, logout, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
