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
            <p className="descriptionPost">{discussion.description}</p>

            <div className="discutionLoop">
              <img className="imgProfil" src={`https://i.pravatar.cc/20${discussion.id_discution}`}></img>
              <div>
                <span className="marginPara"><strong>{discussion.username}</strong></span>
                <span>•</span>
                <span className="marginPara">{new Date(discussion.last_modified).toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric', day: 'numeric', })}</span>
              </div>
              <span className="postCount"><FaMessage /> {discussion["count"]}</span>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
