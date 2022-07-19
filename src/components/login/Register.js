import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router';
import { addProfile } from '../../api/addProfile';

import { getProfiles } from '../../api/login';
import lc from './localRef';

function Register(props){
    let [loggedIn, setLoggedIn] = useState(null)
    lc().then(local => {
        console.log(local);
        setLoggedIn(local)
    })
    let location = useLocation()
    console.log(location.pathname)
    let navigate = useNavigate()
    useEffect(() => {
        console.log('eff');
        if (loggedIn)
            navigate('/home')
    }, [loggedIn, navigate])

    return(
        <div>
            
     
     <form className = 'register'
     onSubmit = {
        async (e)=>{
            e.preventDefault()
            let fname= e.target[0].value
            let lname= e.target[1].value
            let email=e.target[2].value
            let password=e.target[3].value
            let about = e.target[4].value
            let res= await addProfile(fname,lname,email,password,about)
            res.json().then(data=>{
               console.log(data);
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
    )
}
export default Register