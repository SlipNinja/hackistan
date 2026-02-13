import "./../styles/component/discutionCards.css";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Button from "../components/Button";
import api from "./../api/axios"

export default function DiscutionCards({ search }) {
  const [discutions, setDiscutions] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("/discutions");
        const discutions = response.data;
        for (let d of discutions) {
          const response2 = await api.get(`/posts/count/${d.id_discution}`);
          d["count"] = response2.data[0]["COUNT(*)"];
        }
        setDiscutions(discutions);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    let result = discutions;
    if (search) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredPosts(result);
  }, [search, discutions]);

  return (
    <div className="discutionContainer">
      <div className="divRow">
        <h2 className="discutionTitle">Dernières discussions</h2>
        <div>
          <Button text="Ajouter une discussion" />
        </div>
      </div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((discussion) => (
          <div key={discussion.id_discution} className="discutionCard">
            <Link to={`/discution/${discussion.id_discution}`}>
              <h3>{discussion.title}</h3>
              <p className="descriptionPost">{discussion.description}</p>
              <div className="discutionLoop">
                <img className="imgProfil" src={`https://i.pravatar.cc/20${discussion.id_discution}`}
                />
                <div>
                  <span className="marginPara">
                    <strong>{discussion.username}</strong>
                  </span>
                  <span>•</span>
                  <span className="marginPara">
                    {new Date(discussion.last_modified).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <span className="postCount">
                  <FaMessage /> {discussion.count}
                </span>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="noFoundDiv">
          <p className="noFound">Aucune discussion trouvée</p>
          <Button text="Ajoute ton post" />
        </div>
      )}
    </div>
  );
}