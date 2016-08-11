import React from "react";
import Remarkable from  'remarkable'
export default class Detail extends React.Component{
  constructor(){
    super()
  }
  componentDidUpdate(){
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
  rawMarkup(text) {
      let md = new Remarkable();
      let rawMarkup = md.render(text);
      return { __html: rawMarkup };
  }
  render(){
    return (
        <div className="">
          <div className="row">  
            <div className="col-sm-11 text-left">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</h1>
                <p>Lorem ipsum | dolor sit amet,</p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="row Detail_human">
                      <div className="col-sm-2 ">
                        <img src="../../images/circle.png"/>
                      </div>
                      <div className="col-sm-8 circle">
                        <p>Được đăng bởi Quỳnh Như</p>
                      </div>   
                    </div>  
                  </div>
                  <div className="col-sm-4">
                    <div className="navbar list_socical ">
                      <i className="fa fa-twitter twitter" aria-hidden="true"></i>
                      <i className="fa fa-google-plus-official google" aria-hidden="true"></i>
                      <i className="fa fa-facebook-square facebook" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="col-sm-10 Detail_content">
                  <p>{this.props.post}</p>
                  <h2>{this.props.title}</h2>
                  <p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
                </div>     
            </div>   
          </div>
        </div>
        
    );
  }
};
