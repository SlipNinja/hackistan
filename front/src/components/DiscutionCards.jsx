import "./../styles/component/discutionCards.css";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import api from "./../api/axios"
export default function DiscutionCards() {

  const [discutions, setDiscutions] = useState([]);
  console.log(discutions)
   
  useEffect(() => {
      loadData()
  }, []);

     async function loadData(){
        async function fetchDiscutions() {
      try {
        const response = await api.get("/discutions");
        const discutions = response.data;
        for (let d of discutions) {
          const response2 = await api.get(`/posts/count/${d.id_discution}`);
          d["count"] = response2.data[0]["COUNT(*)"]; 
        }
        setDiscutions(discutions);
        console.log(discutions)
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
