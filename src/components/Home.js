import InputPost from "./interractions/InputPost";
import Posts from "./interractions/Posts";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
function Home(props) {
  let [loggedIn, setLoggedIn] = useState(props.profile)
  console.log(useParams());
  return (
    <div className="home">
     <InputPost/> 
     <Posts/>
    </div>
  );
}

export default Home;
