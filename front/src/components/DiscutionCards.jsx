import "./../styles/component/discutionCards.css";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function DiscutionCards() {

  const [discutions, setDiscutions] = useState([]);
  console.log(discutions)
   
  useEffect(() => {
      loadData()
  }, []);

     async function loadData(){
        async function fetchDiscutions() {
      try {
        const response = await fetch("http://localhost:3000/discutions");
        const data = await response.json();
        
        for (let d of data) {
          const response2 = await fetch(`http://localhost:3000/posts/count/${d.id_discution}`);
          const data2 = await response2.json()
          d["count"] = data2[0]["COUNT(*)"]; 
        }
        setDiscutions(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      } 
    }
   fetchDiscutions()
  }

  return (
    <div className="discutionContainer">
      <h2 className="discutionTitle">Dernières discussions</h2>

      {discutions.map((discussion) => {

        return (

          <div key={discussion.id_discution} className="discutionCard">
            <Link to={`/discution/${discussion.id_discution}`} key={discussion.id_discution}  >
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>

            <div className="discutionLoop">
              <span>{discussion.username}</span>
              <span>•</span>
              <span>{discussion.last_modified}</span>
              <span className="postCount"><FaMessage /> {discussion["count"]}</span>
            </div>
          </Link>

          </div>
        );
      })}
    </div>
  );
}
