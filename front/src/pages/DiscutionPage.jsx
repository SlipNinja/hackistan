import { useParams } from "react-router-dom";
import "./../styles/pages/discussionPage.css"
import Button from "../components/Button";
import MessageForm from "../components/forms/MessageForm";
import Aside from "../components/Aside";
import { useState, useEffect } from "react";
import api from "./../api/axios"


export default function DiscutionPage() {
  const { id } = useParams();
  const [showAddPost, setShowAddPost] = useState(false);
  const [discutions, setDiscutions] = useState([{
    title:"",
    description:""
  }]);
  const [posts, setPosts] = useState([]);
  console.log(discutions)
  useEffect(() => {
    async function fetchDiscutionsbyId() {
      try {
        const response = await api.get(`/discutions/${id}`);
        setDiscutions(response.data);
        console.log(response.data)
      
      } catch (err) {
        console.log(err);
      }
    }
    fetchDiscutionsbyId();
  }, [id]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`http://localhost:3000/posts/discution/${id}`);
        setPosts(response.data);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [id]);
    

  const handleSubmitPost = (data) => {
    setShowAddPost(false)
  };
  return (

    <div className="contentPage">
      <Aside className="aside" />
      <div className="discutionPage">
        {discutions && (
        <div className="discutionTitle">
          <h2>{discutions[0].title}</h2>
          <p>{discutions[0].description}</p>
        </div>
        )}

        <hr />

        <div className="postsContainer">
          {posts.map((post) => {
            return (
              <div>
                <div key={post.id_post} className="reply" >
                  <p>{post.content}</p>
                  <div className="postName">
                    <span className="postUserName">{post.username}</span>
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
          <hr />
            {showAddPost && (
              <MessageForm onSubmit={handleSubmitPost} />
            )}
          </div>
        </div>
      </div>
  )
}