import { Route, Routes, useLocation, useNavigate } from "react-router";
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
import Register from "./components/login/Register";

function App() {


  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signout" element={<SignOut />}/>
        
      </Routes>
    </div>
  );
}

export default App;
