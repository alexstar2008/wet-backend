import React from 'react';
import Slider from 'react-slick';

import { PrevArrow, NextArrow } from './arrows-slider';

class ClientsSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [
                {name:'Ovostar Union',src:'./imgs/clients/ovostart.png',alt:'client'},
                {name:'ООО "КЛИАР ЭНЕРДЖИ"',src:'./imgs/clients/clearenergy.png',alt:'client'},
                {name:'Carlsberg Group',src:'./imgs/clients/Lvovskoe.png',alt:'client'},
                { name: 'Перша Приватна Броварня', src: './imgs/clients/PershaPrivatna.png', alt: 'client' },
                { name: 'Оболонь', src: './imgs/clients/Obolon.png', alt: 'client' },
                { name: 'МХП', src: './imgs/clients/МХП.png', alt: 'client' },
                { name: 'Перечинский ЛХК', src: './imgs/clients/PerechenskiiLHK.png', alt: 'client' },
                { name: 'Нидан-Фудс Берегово', src: './imgs/nidan-juices.png', alt: 'client' },
                { name: 'CarlsbergGroup ПЗ Славутич', src: './imgs/clients/Slavutych.png', alt: 'client' },
                { name: 'Rusnac - MoldAqua', src: './imgs/clients/Rusnac – MoldAqua.png', alt: 'client' },
                { name: 'Донбасэнерго, Старобешевская ТЭС', src: './imgs/clients/Донбассэнерго.png', alt: 'client' },
                { name: 'Камелия-PR', src: './imgs/clients/Камелия-PR.png', alt: 'client' },
                { name: 'Луцьк Фудз', src: './imgs/clients/Луцьк Фудз.png', alt: 'client' },
                { name: 'ИСД', src: './imgs/clients/ИСД.png', alt: 'client' },
                { name: 'Инкерман, Крым', src: './imgs/clients/Инкерман.png', alt: 'client' },
                { name: 'ПрАТ "Вентс', src: './imgs/clients/ПрАТ «Вентс».png', alt: 'client' },
                { name: 'ООО НПП "Гетьман"', src: './imgs/clients/ООО НПП «Гетьман».png', alt: 'client' },
                { name: 'Биогазэнерго', src: './imgs/clients/Биогазэнерго.png', alt: 'client' },
            ]
        }
    }

    render() {
        const clientsLayout = this.state.clients.map((client, index) => {
            return (
                <div key={index}>
                    <img src={client.src} alt={client.alt} className="slider-img" />
                    <div className="slider-title">{client.name}</div>
                </div>
            );

        });
        const settings = {
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            accessibility: true,
            arrows: true,
            autoplay: true,
            swipe: true,
            responsive: [
                { breakpoint: 575, settings: { slidesToShow: 1 } },
                { breakpoint: 991, settings: { slidesToShow: 2 } },
                { breakpoint: 1199, settings: { slidesToShow: 3 } },
            ]
        };

        return (
            <Slider {...settings}>
                {clientsLayout}
            </Slider>
        );
    }
}
export default ClientsSlider;