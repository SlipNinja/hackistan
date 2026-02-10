import "./../styles/component/logo.css"
import logo from "../assets/logo.png"
export default function Logo(){


    return(
       <>
      
       <div className="header">
        <img src={logo} alt="logo" className="imgLogo"/>
        <div className="textBlock">
        <h1 className="logo">Hackistan</h1>
        <div className="forumContainer">
            <span className="bar"></span>
            <span className="forum">FORUM</span>
            <span className="bar"></span>
        </div>
        </div>
       </div>
       </> 
    )
}