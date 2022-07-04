import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router';

import { getProfiles } from '../../api/login';

function Login(props1) {
    console.log('login',props1.login,props1.profile);
   let [loggedIn, setLoggedIn] = useState({
       loggedIn: false,
       email: '',
       password: ''
   })
   console.log(loggedIn);
  
   let navigate = useNavigate()
   useEffect(() => {
       if (loggedIn.loggedIn)
           navigate('/home')
   }, [loggedIn,navigate])
   

  return (
    
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
                   props1.login({
                       loggedIn: true,
                       password: data[0].password.trim(),
                       email: data[0].email.trim()
                   })
               }
            })  

            
         }
     }>
         <input type={'email'} name='email' placeholder='email' required/>
         <input type={'password'} name='password' placeholder='password' required/>
         <button>Login</button>
     </form>
   
  );
}

export default Login;
