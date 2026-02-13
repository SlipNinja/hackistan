import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
 import Cookies from "js-cookie"
 import api from "./../api/axios"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = Cookies.get("token");
    console.log(token)
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
const login = async (email,password) => {
    
                const body={
                  email:email,
                  password:password
                }
                console.log(body)
                const response=await api.post("/auth/login", body)
                const token=response.data.token
                  Cookies.set("token", token , { expires: 1 });    
                  setUser(jwtDecode(token))
                  console.log (response.data)
          }

  
  const logout = () => {
  Cookies.remove("token");
  setUser(null);
};

  return (
    <AuthContext.Provider value={{ user, login, setUser, logout,  loading }}>
      {children}
    </AuthContext.Provider>
  );
};


 