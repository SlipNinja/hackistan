import "./../styles/component/discutionCards.css";
import { FaMessage } from "react-icons/fa6";
import api from './../api/axios';
import { useState, useEffect } from "react";

export default function discutionCards() {
    const [discutions, setDiscutions] = useState([]);
  
    const users = [
      { id: 1, username: "Alice" },
      { id: 2, username: "Bob" },
      { id: 3, username: "Charlie" },
      { id: 4, username: "Diane" }
    ];
    const post={
       post_count:1
    }
  useEffect(() => {
async function getDiscution(){
  try{
    const data= await api.get("/discussions")
    setDiscutions(data)
    
  } catch(err){
    console.log(err)
  }
}
getDiscution()
  },[])

  return (
    <div className="discutionContainer">
      <h2 className="discutionTitle">Dernières discussions</h2>

      {discutions.map(discussion => {
        const user = users.find(u => u.id === discussion.id_user);

        return (
          <div key={discussion.id} className="discutionCard">
            <h3>{discussion.title}</h3>
            <p>{discussion.description}</p>

            <div className="discutionLoop">
              <span>{user?.username}</span>
              <span>•</span>
              <span>{discussion.last_modified}</span>
              <span className="postCount"><FaMessage /> {post?.post_count}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
