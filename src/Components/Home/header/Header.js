import React from "react";

export default class Header extends React.Component{
  render(){
    return (
          <div className="row hidden-xs black_bg">
            <div className="col-sm-11">
                <ul className="nav navbar-nav navbar-right home_header">
                  <li><a href="#">TRANG CHỦ</a></li>
                  <li><a href="#">LIÊN HỆ</a></li>
                </ul>
             </div> 
          </div>   
    );
  }
};
