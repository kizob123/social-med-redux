import React from "react";
import { getProfile } from "../api/getProfile";

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      profile:{
        email:'',
        about:''
      },
      prop:props.profile
    }
  }
   getProf = async ()=>{
     console.log(this.state);
    let prof = await getProfile(this.state.prop.email)
    let res = await prof.json().then(data => {
      this.setState({profile:data[0]})
      console.log(this.state.profile.fname);
    })
  }
  componentDidMount(){
   
    
  }
render(){
   this.getProf()
  return (
  <div className="profile">
    <div>
      Welcome to your profile: {this.state.prop.loggedIn&& this.state.profile.fname}
     <br/>Here are your details: <pre>{`${this.state.prop.loggedIn&&this.state.profile.email} ${this.state.prop.loggedIn&&this.state.profile.about}`}</pre>
    </div>
      </div> 
      
  );
}
}

export default Profile;
