import React from "react";
import { getProfile } from "../api/getProfile";
import lc from "./login/localRef";

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      profile:{
        
      }
    }
  }
   getProf = async ()=>{
     console.log(this.state);
     await lc().then(data => {
     console.log('e'+data.email);
      return data.email
   }).then(async email=>{
     let prof = await getProfile(email)
     let res = await prof.json().then(data => {
       
       console.log(data[0]);
       this.setState({
         profile: data[0]
       })
       console.log(this.state.profile[0]);
     })
   })
    
  }
  componentDidMount(){
   this.getProf()
    
  }
render(){
   
  return (
  <div className="profile">
    <div>
      Welcome to your profile: {this.state.profile.fname}
     <br/>Here are your details: <pre>{`${this.state.profile.email} ${this.state.profile.about}`}</pre>
    </div>
      </div> 
      
  );
}
}

export default Profile;
