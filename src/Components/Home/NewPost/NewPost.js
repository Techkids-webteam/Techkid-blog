import React from "react";
import { IndexLink, Link, withRouter } from "react-router";
export default class NewPost extends React.Component{
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

    $('#slick_slider').slick({
      dots: false,
      infinite: false,
      arrows:false,  
      //        centerMode: true,
      slidesToShow: 3 ,
      //        slidesToScroll: 1
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      }]
    });  
  }

  render(){
    var Posts = this.state.blog.map((post) =>{
      
      return ( 
              <div className="col-sm-4" key={post._id}>
                  <img src="../../images/imgblack.png"/>
                    <h3>
                    <Link to={`/layoutDetail/${post._id}`}>{post.title}</Link> 
                    </h3>
                    <p>
                      {post.content.substring(0,200)}
                    </p>
              </div>
      )
    })
    return (
      <div className="NewPost_Title" >
          <div className="row">
            <div className="col-sm-12">
              <img className="text-center" src="../../images/titleblock.png"/>
            </div>  
          </div>
          <div className="NewPost_content">
            <div className="row NewPost_content_posts" id="slick_slider">  
              {Posts}
            </div>
          </div>
      </div>      
    )
    
  }
};
