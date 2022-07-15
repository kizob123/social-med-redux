import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router';

import { getProfiles } from '../../api/login';
import lc from './localRef';

function Login(props1) {
   
   let [loggedIn, setLoggedIn] = useState(null)
   lc().then(local=>{
      console.log(local);
      setLoggedIn(local)
   })
   let location = useLocation()
   let navigate = useNavigate()
   useEffect(() => {
      console.log('eff');
       if (loggedIn)
           navigate('/home')
   }, [loggedIn,navigate])
   

  return (
    
     <div>
        
      <form className='login' style={{display:location.pathname==='/'?'block':'none'}} onSubmit={
        async (e)=>{
            e.preventDefault()
            let email= e.target[0].value
           
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
     <form className = 'register'style={{display: location.pathname === '/register' ? 'block' : 'none'}}
     onSubmit = {
        async (e)=>{
            e.preventDefault()
            let email= e.target[0].value
           
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
          <input type={'text'} name='fname' placeholder='firstname' required/>
          <input type={'text'} name='text' placeholder='lastname'/>
         <input type={'email'} name='email' placeholder='email' required/>
         <input type={'password'} name='password' placeholder='password' required/>
         <textarea name='about' placeholder='tell us about you...' required/>
         <button>Login</button>
     </form>
     </div>
   
  );
}

export default Login;
