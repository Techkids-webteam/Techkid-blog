import React from "react";
import { IndexLink, Link, withRouter } from "react-router";

export default class RecentPosts extends React.Component{
  constructor(){
    super();
    this.state = {
      blog: []
    }
  }

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://techkids.vn:9196/api/blog/getTrendingBlog',
      cache : false,
      success: function(res){
        this.setState({
          blog: res.blog
        })
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)
    })
  }

  render(){
    var Posts = this.state.blog.map((post) =>{
        return ( 
              <div className="RecentPosts_Title_content" key={post._id}>
                <div className="col-sm-5 RecentPosts_Title_content_img">
                      <img src="../../images/imgblack.png"/>
                      <h3>
                        <Link to={`/layoutDetail/${post._id}`}>
                          {post.title}
                        </Link> 
                      </h3>
                      <p>
                        {post.content.substring(0,200)}
                      </p>
                </div>
              </div>     
            )
         })
    return(
      <div className="">
        <div className="row">  
          <div className="col-sm-10 text-left hidden-xs RecentPosts_Title_img">
            <img src="../../images/RecentPosts.png"/>
          </div>
          <div className="col-sm-10 text-center visible-xs RecentPosts_Title_img_mobile">
            <img src="../../images/RecentPostsMobile.png"/>
          </div>
          {Posts}
         </div>  
      </div>      
     )
  }
};
