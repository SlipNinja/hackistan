import "./../styles/component/discutionCards.css";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function discutionCards() {

  const [discutions, setDiscutions] = useState([]);
  const [postCount, setPostCount] = useState([]);

  
   
  useEffect(() => {
    async function fetchDiscutions() {
      try {
        const response = await fetch("http://localhost:3000/discutions");
        const data = await response.json();
        setDiscutions(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      } 
    }
    fetchDiscutions();
  }, []);

   useEffect(() => {
    async function fetchPostCount() {
      try {     
        const response = await fetch(`http://localhost:3000/posts/count/${discutions.id_discution}`);
        const data = await response.json();
        setPostCount(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      } 
    }
    fetchPostCount();
  }, []);

  return (
    <div className="discutionContainer">
      <h2 className="discutionTitle">Dernières discussions</h2>

      {discutions.map(discussion => {
        // const user = users.find(u => u.id === discussion.id_user);

        return (
          <div key={discussion.id_discution} className="discutionCard">
            <Link to={`/discution/${discussion.id_discution}`} key={discussion.id_discution}  >
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>

            <div className="discutionLoop">
              <span>{discussion.username}</span>
              <span>•</span>
              <span>{discussion.last_modified}</span>
              <span className="postCount"><FaMessage /> {postCount?.post_count}</span>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
