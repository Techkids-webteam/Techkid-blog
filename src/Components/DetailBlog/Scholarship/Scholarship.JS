import React from "react";

export default class Scholarship extends React.Component{
  componentDidMount(){
    $(window).scroll(function(event) {

    // height of the document (total height)
    var d = $(document).height();

    // height of the window (visible page)
    var w = $(window).height();

    // scroll level
    var s = $(this).scrollTop();

    // bottom bound - or the width of your 'big footer'
    var bottomBound = 258;

    var width = $(window).width();
    var height = $(window).height();
    // if ((width <= 1023) && (height >= 768)) {
    //     alert('Do things');
    // } else {
    //     alert('Do nothing');
    // }

    // are we beneath the bottom bound?
    if(d - (w + s) < bottomBound) {
        // if yes, start scrolling our own way, which is the
        // bottom bound minus where we are in the page
        $('.sticky_bottom_footer .container').css({
            bottom: bottomBound - (d - (w + s))
        });
    } else {
        // if we're beneath the bottom bound, then anchor ourselves
        // to the bottom of the page in traditional footer style
        $('.sticky_bottom_footer .container').css({
            bottom: 0
        });
    }

  });

  $(document).ready(function(){
    $("#close").click(function(){
      $("#fade-out").fadeOut(800);
    });
  })
}
  render(){
    return (
      <div>
        <div id ="fade-out" className="sticky_bottom_footer hidden-xs hidden-sm hidden-md">
          <div className="container">
            <button type="button" id="close">×</button>
            <img src="../../images/letter.png"/>
            <h4>Muốn đọc nhiều hơn những bài viết hay từ TechKids? Đăng ký theo dõi nhé!</h4>
            <input type="text" className="Scholarship_input" placeholder="Địa Chỉ Email..."/>
            <button type="button" className="register">ĐĂNG KÝ NGAY</button>
          </div>
        </div>
      </div>  
    );
  }
};
