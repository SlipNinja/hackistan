import { useParams } from "react-router-dom";
import "./../styles/pages/discussionPage.css"
import Button from "../components/Button";
import MessageForm from "../components/forms/MessageForm";
import Aside from "../components/Aside";
import { useState, useEffect } from "react";


export default function DiscutionPage() {
  const { id } = useParams();
  const [showAddPost, setShowAddPost] = useState(false);

  const [discutions, setDiscutions] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchDiscutionsbyId() {
      try {

        const response = await fetch(`http://localhost:3000/discutions/${id}`);
        const data = await response.json();
        setDiscutions(data);
        console.log(data)
        console.log(discutions[0].title)
      } catch (err) {
        console.log(err);
      }
    }
    fetchDiscutionsbyId();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`http://localhost:3000/posts/discution/${id}`);
        const data = await response.json();
        setPosts(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);


  const handleSubmitPost = (data) => {
    setShowAddPost(false)
  };
  return (

    <div className="contentPage">
      <Aside className="aside" />
      <div className="discutionPage">

        <div className="discutionTitle">
          <h2>{discutions[0].title}</h2>
          <p>{discutions[0].description}</p>
        </div>

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

          <div className="postsContainer">
            {posts.map((post) => {
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
    </div>
  )
}