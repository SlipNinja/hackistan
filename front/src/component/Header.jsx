import "./../styles/component/header.css"
import Logo from "./Logo"
import Button from "./Button"
export default function Header() {
  return <>
   <div className="headerBanner">
     <Logo/>
     <div className="leftContainer">
       <Button text="Connexion"/>
     </div>
    </div>
  </>;
}
