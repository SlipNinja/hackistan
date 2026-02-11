import { Link, useParams } from "react-router-dom";
import "./../styles/pages/discussionPage.css"
import Button from "../components/Button";
import MessageForm from "../components/forms/MessageForm";
import Aside from "../components/Aside";
import { useState } from "react";

export default function DiscussionPage(){
    const { id } = useParams();
    const [showAddPost, setShowAddPost] = useState(false);
 
  const discution = {
    id: 1,
    title: "Problème avec React",
    description:
      "Je n’arrive pas à comprendre pourquoi mon composant ne se rend pas correctement.",
  };

  const posts = [
    {
      id_post: 1,
      content: "Peux-tu montrer ton code ?",
      date_posted: "2026-02-08 15:00:00",
      status: "accepted",
      id_anwsered_post: null,
      id_discution: 1,
      id_user: 2,
    },
    {
      id_post: 2,
      content: "Oui voici mon composant...",
      date_posted: "2026-02-08 15:10:00",
      status: "accepted",
      id_anwsered_post: 1,
      id_discution: 1,
      id_user: 1,
    },
    {
      id_post: 3,
      content: "Post en attente",
      date_posted: "2026-02-08 16:00:00",
      status: "pending",
      id_anwsered_post: null,
      id_discution: 1,
      id_user: 3,
    },
  ];

  const users = [
    { id: 1, username: "Alice" },
    { id: 2, username: "Bob" },
    { id: 3, username: "Charlie" },
  ];
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
            <Button
              text="Ajouter un post"
              onClick={() => setShowAddPost(true)}
            />
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