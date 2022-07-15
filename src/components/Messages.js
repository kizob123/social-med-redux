import Message from "./interractions/Message";
import { getMessages } from "../api/getMessages";
import { useEffect, useState } from "react";
import { postMessage } from "../api/postMessage";
import { useLocation, useNavigate } from "react-router";
import local from "./login/localRef";
import lc from "./login/localRef";
function Messages(props) {
let [messages,setMessages] =useState([]);
 let getMs=async()=>{
   await lc().then(data => {
     console.log('e'+data.email);
      return data.email
   }).then(async email=>{
     console.log('d:+++' + email);
    let ms = await getMessages(email)

    await ms.json().then((data2)=>{
      console.log('d:---' + data2);
    let mgs= data2.map(d =><Message key={d.id} body={d}/>)
    setMessages(mgs)
  })
   })
 
}
useEffect(()=>{
getMs()
})
  return (
    
    <div className="messages">
      <div className="new_message">
        <form className="new_message_form" onSubmit={
          (e)=>{
            e.preventDefault()
            let title =e.target[0].value
            let email = e.target[1].value
            let email_from= props.profile.email
            let here_id = props.profile.id
            let fname = props.profile.fname
            let message = e.target[2].value
            
            postMessage(here_id,fname,email,email_from,title,message).then(res=>{
              
            }).catch(err=>{
             
            })
          }
        }>
          <input type={'text'} name="message_title" placeholder="title"/>
          <input type={'email'} name="message_to" placeholder="reciever email"/>
          <textarea name="message_body" placeholder="message body..."/>
          <button>Send</button>
        </form>
      </div>
     {messages}
    </div>
  );
}

export default Messages;
