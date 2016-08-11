import React from "react";
import ReactDOM from "react-dom";
import Header from "../../Home/header/Header";
import BlogContentBlock from "../BlogContentBlock/BlogContentBlock";
import HeaderMenu from "../../Home/HeaderMenu/HeaderMenu";
import PageRecentCatolary from "../PageRecentCatolary/PageRecentCatolary";
import NewPost from "../NewPost/NewPost";
import Footer from "../../Home/Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Scholarship from "../Scholarship/Scholarship";

export default class LayoutDetail extends React.Component{

    constructor() {
      super()
      this.state = ({
        post: []
      })
    }

    componentDidMount() {
      console.log(this.props)
      let id = this.props.params.id
      $.ajax({
          type: 'GET',
          url: 'http://techkids.vn:9196/api/blog/getBlog/'+ id, 
          cache : false,
          success: function(res){
            this.setState({
              post : res
            })
          }.bind(this),
          error: function(err){ 
            console.log(err)
          }.bind(this)
      })
    }
  
  render() {
    return (
      <div id="detail">
        <Header/>
        <HeaderMenu/>
        <BlogContentBlock><PageRecentCatolary post = {this.state.post}/></BlogContentBlock>
        <BlogContentBlock><NewPost/></BlogContentBlock>
        <BlogContentBlock background="white_bg"><Footer/></BlogContentBlock>
        <Scholarship/>
        <ScrollToTop/>
        
      </div>
    );
  }
}

