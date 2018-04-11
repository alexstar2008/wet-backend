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
                            <img src='./imgs/main-slider/main.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                ОАО «Мироновский Хлебопродукт»,
                                Птицефабрика «Винницкий Бройлер»
                                г. Ладыжин<br/><br/>
                                ВОДОПОДГОТОВИТЕЛЬНАЯ СТАНЦИЯ 684 м<sup>3</sup>/ч
                                Установка безнапорной фильтрации DynaSand
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="main-slider-img-wrapper">
                            <img src='./imgs/main-slider/slider_cola.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                    «Контур Глобал» (Кока-кола)<br/>
                                    пгт. Б. Дымерка, Киевская обл.<br/><br/>
                                    Комплекс ХВО 24 м<sup>3</sup>/ч обессоленной воды для
                                    парогенератора и подпитки охладительных
                                    оборотных циклов
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="main-slider-img-wrapper">
                            <img src='./imgs/main-slider/slider_miron.png' alt="main" className="main-slider-img" />
                        </div>
                        <div className="container main-slider-content-wrapper">
                            <div className="row">
                                <div className="main-slider-content">
                                    ОАО «Мироновский Хлебопродукт»,
                                    Птицефабрика «Винницкий Бройлер»
                                    г. Ладыжин<br/><br/>
                                    ВОДОПОДГОТОВИТЕЛЬНАЯ СТАНЦИЯ 684 м<sup>3</sup>/ч
                                    4-х секционные осветлители с пульсирующим
                                    режимом работы
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