import React from "react";

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      test:''
    }
  }
render(){ 
  return (
    <div className="profile" onClick={
      ()=>{
        this.setState({test:'test'})
      }
    }>
     hello: {this.state.test}
    </div>
  );
}
}

export default Profile;
