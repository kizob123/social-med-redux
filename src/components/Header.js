import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import remLc from './login/localRefRem'
function Header() {
 
 let onLogin=false
 let location = useLocation()
 let navigate = useNavigate()
 if (location.pathname === '/'||location.pathname==='/register'){
   onLogin=true
 }
 
 
  return (
    <div className="navigation">
     <nav>
         <span className="logo">Social Med</span>
         <div style={{display:onLogin?'none':'block'}}>

         <ul className="far-end-nav">
             <li><NavLink to={'/home'} className="links">Home</NavLink></li>
             <li><NavLink to={'/messages'} className="links">Messages</NavLink></li>
             <li><NavLink to={'/profile'} className="links">Profile</NavLink></li>
             <li style={{cursor:'pointer'}}
               onClick = {
                async () => {
                  await remLc().then(rem=>{
                    if(rem)
                    navigate('/')
                  })
                 }
               
             }>Sign Out</li>
         </ul>
         </div>
         <div style = {
           {
             display: !onLogin ? 'none' : 'block'
           }
         } >
           <ul className = "far-end-nav">
           <li><NavLink to={'/'} className="links">Login</NavLink></li>
          <li><NavLink to={'/register'} className="links">Sign Up</NavLink></li>
         </ul>
         </div>
     </nav>
    </div>
  );
}

export default Header;
