import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ca.css"
import MyImage from '../Assests/react.jpg';
import MyImage2 from '../Assests/angular.jpg';
import MyImage3 from '../Assests/aws.jpg'
 

function carousel() {

    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className='slider'>
      
      
      <div >
         <Slider {...settings} className='slider'>
            <div>
            
                  <img src={MyImage} alt="" />
            </div>
            <div>
            
                  <img src={MyImage2} alt="" />
            </div>
            <div>
            
                  <img src={MyImage3} alt="" />
            </div>
         </Slider>

      </div> 
     
    </div>
  )
}

export default carousel
