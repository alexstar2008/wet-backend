import React from 'react';
import Slider from 'react-slick';
import Scrollchor from 'react-scrollchor';

import './main-slider.css';

class MainSlider extends React.Component{
    render(){
        const  settings = {
            infinite: true,
            autoplaySpeed:5000,
            speed:1800,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility:false,
            arrows:false,
            autoplay:true,
            swipe:true,
          };
       
          return(
            <div className="main-slider-wrapper">
                <Slider {...settings}>
                    <div>
                        <div  className="main-slider-img-wrapper">
                            <img src='./imgs/main.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="main-slider-img-wrapper">
                            <img src='./imgs/main.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="main-slider-img-wrapper">
                            <img src='./imgs/main.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                </div>
                            </div>
                        </div>
                    </div> 
                </Slider>
                <Scrollchor to="#contacts" animate={{duration:300}}>
                    <div className="scroll-btn">
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </Scrollchor>
            </div>
        );
    }
}

export default MainSlider;