import { useParams } from "react-router-dom";
import "./../styles/pages/discussionPage.css"
import Button from "../components/Button";
import MessageForm from "../components/forms/MessageForm";
import Aside from "../components/Aside";
import { useState } from "react";

export default function DiscutionPage(){
    const { id } = useParams();
    const [showAddPost, setShowAddPost] = useState(false);
 
const [discutions, setDiscutions] = useState([]);
   
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
   
  const handleSubmitPost = (data) => {
    setShowAddPost(false)
  };
    return(
        <>
        <div className="contentPage">
        <Aside className="aside"/>
        <div className="discutionPage">
        <div className="discutionTitle">
            <h2>{discution.title}</h2>
            <p>{discution.description}</p>
        </div>

      <hr />

      <div className="postsContainer">
        {posts.map((post) => {
          const user = users.find((u) => u.id === post.id_user);
          return (
            <div>
            <div key={post.id_post} className="reply" >
              <p>{post.content}</p>
              <div className="postName">
                <span className="postUserName">{user?.username}</span>
                <span>{post.date_posted}</span>
              </div>
            </div>        
            </div>
          );
        })}
        {!showAddPost && (
          <div className="buttonAddPost">
            <Button text="Ajouter un post" onClick={() => setShowAddPost(true)} />
          </div>
        )}
        {showAddPost && (
          <MessageForm onSubmit={handleSubmitPost} />
        )}
      </div>
    </div>
    </div>
        </>
    )
}