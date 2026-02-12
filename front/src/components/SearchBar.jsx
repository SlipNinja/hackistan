import "./../styles/component/searchBar.css";
import { FaSearch } from "react-icons/fa"; 

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchBar">
      <FaSearch className="searchIcon" />
      <input
        type="text"
        placeholder="Rechercher..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
