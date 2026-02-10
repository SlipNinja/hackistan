import Aside from "./../component/Aside"
import SearchBar from "../component/SearchBar"
import DiscutionCards from"../component/DiscutionCards"
import "./../styles/pages/home.css"
export default function (){


    return(
       <>
       <div className="homeContainer">
        <Aside/>
       <div className="mainContent">
        <SearchBar/>
        <DiscutionCards/>
       </div>
       </div>
       </> 
    )
}