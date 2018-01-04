import React from 'react';
import Slider from 'react-slick';

import {PrevArrow,NextArrow} from './arrows-slider';

class ClientsSlider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clients : [
                {name:'Нидан-Фудс Берегово',src:'./imgs/nidan-juices.png',alt:'client'},
                {name:'Нидан-Фудс Берегово',src:'./imgs/nidan-juices.png',alt:'client'},
                {name:'Нидан-Фудс Берегово',src:'./imgs/nidan-juices.png',alt:'client'},
            ]
        }
    }

    render(){
        const clientsLayout = this.state.clients.map((client,index)=>{
            return( 
                <div key={index}>
                    <img src={client.src} alt={client.alt} className="slider-img" />
                    <div className="slider-title">{client.name}</div>
                </div>
            );

        });
        const  settings = {
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            accessibility:true,
            arrows:true,
            autoplay:true,
            swipe:true,
            responsive:[
                { breakpoint: 575, settings: { slidesToShow: 1 } }, 
                { breakpoint: 991, settings: { slidesToShow: 2 } },
                { breakpoint: 1199, settings: { slidesToShow: 3 } },
            ]
          };
       
          return(
            <Slider {...settings}>
                {clientsLayout}
            </Slider>
        );
    }
}
export default ClientsSlider;