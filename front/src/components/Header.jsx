import "./../styles/component/header.css"
import Logo from "./Logo"
import Button from "./Button"
import { Link } from "react-router-dom";
export default function Header() {
  return <>
   <div className="headerBanner">
      <Link to="/"> <Logo/></Link>
     <div className="leftContainer">
      <Link to="/login"> <Button text="Connexion"/></Link>
     </div>
    </div>
  </>;
}
