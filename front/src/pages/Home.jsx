import Aside from "../components/Aside"
import SearchBar from "../components/SearchBar"
import DiscutionCards from"../components/DiscutionCards"
import "./../styles/pages/home.css"
export default function Home (){


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