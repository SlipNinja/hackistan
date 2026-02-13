import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import "./../styles/component/header.css"
import { useAuth } from "../hook/useAuth";


export default function Header() {
  const {user, logout} =useAuth()
  const navigate = useNavigate();

  

 

  return (
    <div className="headerBanner">
      <Link to="/"> <Logo/> </Link>
      <div className="leftContainer">
        {user ? (
          <Button text="Déconnexion" onClick={logout} />
        ) : (
          <Button text="Connexion" onClick={() => navigate("/login")} />
        )}
      </div>
    </div>
  );
}
