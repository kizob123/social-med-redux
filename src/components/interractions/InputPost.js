import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../api/addPosts";
import { getProfiles } from "../../api/login";
function InputPost() {
  const initState = useSelector(state => state)
  let [hide, setHide]=useState('none')
  
  function post(post,file){

  }
  return (
    <React.Fragment>
    <div className={"alert-form"} style={{display:hide}} onClick={
      (e)=>{
        let targets = ["post-title","post-text", "post-px", "post-button"]
       console.log(targets.includes(e.target.className));
       if (!targets.includes(e.target.className)) {
         setHide('none')
       }
        
      }
    }>
    <form className="enter-post" onSubmit={async(e)=>{
      e.preventDefault()
      console.log('hem');
      
      let login_name = await getProfiles(initState.email)
        let profile = await login_name.json().then(profile=>{
        let post = e.target[1].value;
        let title = e.target[0].value;
        let author = profile.fname;
        let time = new Date()
        console.log(post,title,author,time);
         addPost(author,title,post,time,0)

      })
      
      
      setHide('none')
    }}>
      <input type={"text"} name="post-title" className='post-title'/><br/>
      <input type={"text"} name="post-text" className='post-text'/><br/>
      <input type={'file'} name="post-px" className="post-px"/>
      <button className="post-button">post</button>
    </form>

    </div>
    <div className="input-post" onClick={
        ()=>{

            setHide('flex')
            console.log(initState);
        }
    }>
     <span className="enter-post-placeholder">Enter new post...</span>
    </div>
    </React.Fragment>
  );
}

export default InputPost;
