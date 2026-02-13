import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import "./../styles/component/header.css"

export default function Header() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("login", handleLogin);
    return () => window.removeEventListener("login", handleLogin);
  }, []);

  async function logOut() {
    try {
      await fetch("http://localhost:3000/auth/logout", { method: "POST" });
      localStorage.removeItem("token");
      setToken(null);
      navigate("/");
    } catch (err) {
      console.error("Erreur logout :", err);
    }
  }

  return (
    <div className="headerBanner">
      <Link to="/"> <Logo/> </Link>
      <div className="leftContainer">
        {token ? (
          <Button text="Déconnexion" onClick={logOut} />
        ) : (
          <Button text="Connexion" onClick={() => navigate("/login")} />
        )}
      </div>
    </div>
  );
}
