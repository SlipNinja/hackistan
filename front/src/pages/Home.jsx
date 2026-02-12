import { useState } from "react";
import Aside from "../components/Aside";
import SearchBar from "../components/SearchBar";
import DiscutionCards from "../components/DiscutionCards";
import "./../styles/pages/home.css";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="homeContainer">
      <Aside />
      <div className="mainContent">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <DiscutionCards search={search} />
      </div>
    </div>
  );
}
