import { Route, Routes, useNavigate } from "react-router";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/interractions/Posts";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Login from "./components/login/Login";
import SignOut from "./components/login/SignOut";
import { createStoreHook, useSelector, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { getProfiles } from "./api/login";

function App() {
let local = {
  loggedIn: false,
  password: '',
  email: ''
}
if(localStorage.getItem('loggein'))
  local =JSON.parse(localStorage.getItem('loggein'))
 let [loggedIn, setLoggedIn] = useState(local)
 
 //console.log(JSON.parse(localStorage.getItem('loggein')));

 let navigate = useNavigate()
 useEffect(() => {
   //setLoggedIn(localStorage.getItem('loggein'))
   if (loggedIn.loggedIn===false){
     navigate('/')
    console.log('hellooo');
   
    }
     console.log('useeffect', loggedIn, loggedIn.loggedIn);
 }, [loggedIn, navigate])
  return (
    <div className="App">
      <Header profile={loggedIn}/>
      <div style = {
        {
          display: loggedIn.loggedIn ? "none" : "block"
        }
      }>
        
      <form className='login' onSubmit={
        async (e)=>{
            e.preventDefault()
            let email= e.target[0].value
            console.log(email);
            let password=e.target[1].value
            let res= await getProfiles(email)
            res.json().then(data=>{
               if(password.trim() === data[0].password.trim()){
                   //login(email,password)
                   setLoggedIn({
                       loggedIn: true,
                        password: data[0].password.trim(),
                        email: data[0].email.trim()
                   })
                  let test = {
                     loggedIn: true,
                     password: data[0].password.trim(),
                     email: data[0].email.trim()
                   }
                   
                  localStorage.setItem('loggein',JSON.stringify(test))
                  navigate('/home')
               }
            })  

            
         }
     }>
         <input type={'email'} name='email' placeholder='email' required/>
         <input type={'password'} name='password' placeholder='password' required/>
         <button>Login</button>
     </form>
      </div>
      <Routes>
        
        <Route path="/home" element={<Home profile={loggedIn}/>}/>
        <Route path="/messages" element={<Messages profile={loggedIn}/>}/>
        <Route path="/profile" element={<Profile profile={loggedIn}/>}/>
        <Route path="/signout" element={<SignOut />}/>
        
      </Routes>
    </div>
  );
}

export default App;