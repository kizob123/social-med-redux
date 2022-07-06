import { useState } from "react";
import Posts from "./Posts";
import { editPost } from "../../api/patchPosts";
import { getPosts } from "../../api/getPosts";
function Post(props) {

  const [postState, setPostState]=useState(props.post)
  //console.log(postState);
  let edit = false
  async function addLikes(likes){
    let c = await editPost(postState.id, postState.title, postState.post,postState.time,likes)
   
    if(c.ok){
      let res= await getPosts(postState.id)
      res.json().then(d =>{
       setPostState(d)
      }
      ) 
    }
    
  }
  async function editType(post) {
    let c = await editPost(postState.id, postState.title, post, postState.time, postState.likes)

    if (c.ok) {
      let res = await getPosts(postState.id)
      res.json().then(d => {
        setPostState(d)
      })
    }

  }
  return (
    <>
    <div className="edit-post" style={{display:edit?'block':'none'}}>
      <form onSubmit={
        (e)=>{
          e.preventDefault()

        }
      }>
      <input className="post-title" type={'text'} name = 'title' 
      placeholder="edit post title" defaultValue={postState.title} />
      <textarea className="post-post" name="post" 
      placeholder="edit post body" defaultValue={postState.post}/>
      <button>update</button>
      </form>
    </div>
    <div className="post" style={{display:edit?'none':'block'}}>
      <img src="" alt="profile pix" className="profile-pix"/>
      <p className="title-post">{postState.title}</p>
      <p className="comment-post">{postState.post}</p>
      <span className="time">{postState.time}</span>
      <button className="like" onClick={
        ()=>{
          let l= postState.likes+1
          console.log(l);
          addLikes(l)
        }
      }>like {postState.likes}</button>
      <button className="edit" onClick={
        ()=>{
          let s = postState.post
          console.log(s);
          editType(s)
        }
      }>edit</button>
    </div>
    </>
  );
}

export default Post;
