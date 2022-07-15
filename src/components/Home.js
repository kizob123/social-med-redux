import InputPost from "./interractions/InputPost";
import Posts from "./interractions/Posts";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
function Home(props) {
  let [loggedIn, setLoggedIn] = useState(props.profile)
  
  let navigate = useNavigate()
  let location = useLocation()
  useEffect(()=>{
    !loggedIn.email&&navigate('/')

  })
  return (
    <div className="home">
     <InputPost/> 
     <Posts/>
    </div>
  );
}

export default Home;
