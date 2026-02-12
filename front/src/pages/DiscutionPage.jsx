import { useParams, Link } from "react-router-dom";
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
        const response = await api.get(`/posts/discution/${id}`);
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
          <Link to="/"><p className="returnPosts">← Retourner aux posts</p></Link>
          <h2>{discutions[0].title}</h2>
          <div className="profilDiv">
            <img className="imgProfil" src={`https://i.pravatar.cc/20${discutions[0].id_discution}`}/>
            <div className="column">
              <span className="username"><strong>{discutions[0].username}</strong></span>
              <span className="date">Modifié le {new Date(discutions[0].last_modified).toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric', day: 'numeric', })}</span>
            </div>
          </div>
          <p className="descriptionPara">{discutions[0].description}</p>
        </div>
        )}

        <div className="divAddComments">
            {!showAddPost && (
                <Button text="Ajouter un commentaire" onClick={() => setShowAddPost(true)} />
            )}
        </div>


        <div className="postsContainer">
          {posts.map((post) => {
            return (
              <div>
                <div key={post.id_post} className="reply" >
                  <div className="profilDiv">
                      <img className="imgProfil" src={`https://i.pravatar.cc/20${post.id_user}`}></img>
                    <div className="column">
                      <span className="postUserName">{post.username}</span>
                      <span className="date">{new Date(post.date_posted).toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric', day: 'numeric', })}</span>
                    </div>
                  </div>
                  <p className="descriptionPara">{post.content}</p>
                </div>
              </div>
            );
          })}
          </div>
            {showAddPost && (
              <MessageForm onSubmit={handleSubmitPost} />
            )}
        </div>
      </div>
  )
}