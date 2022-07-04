import React from "react";
import Post from "./Post";
import { getPosts } from "../../api/getPosts";
class Posts extends React.Component {
    constructor(){
      console.log('test iiit');
        super()
        this.state = {
            posts:[]
        }
        this.getPosts.bind(this.getPosts)
        
    }
      
    componentDidMount(){
      
      this.getPosts()
    }
    getPosts = async function () {
      let res = await getPosts(null)
      res.json().then(d =>
        this.setState({
        posts: d
      })
      )

    }
    componentDidUpdate(){
      //console.log('xx');
      // this.getPosts()
    }
    
    
 render(){
   let posts=[]
   if(this.state.posts.length){
   //console.log( this.state.posts );
   let sortedState = this.state.posts.sort((a,b)=>b.id-a.id)
   posts = sortedState.map(post=><Post key = {post.id} post={post}/>)
  }
  return (

    <div className="posts">
     {posts}
    </div>
  );}
}

export default Posts;
