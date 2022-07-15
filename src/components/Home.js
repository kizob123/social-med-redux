import InputPost from "./interractions/InputPost";
import Posts from "./interractions/Posts";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import local from "./login/localRef";
function Home() {
  console.log(JSON.parse(localStorage.getItem('loggein')))
  return (
    <div className="home">
     <InputPost/> 
     <Posts/>
    </div>
  );
}

export default Home;
