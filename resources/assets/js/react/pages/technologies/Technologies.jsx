import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import "animate.css/animate.min.css";

import '../../Shared.css';

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';
import CardBoxPicture from '../../components/content-box/card-box-picture';

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.items = [
            { name: "Осветление воды", img: "./imgs/technologies/menu/menu_1.png", desc: "1Desc", link: "technologies-content#clarification" },
            { name: "Механическая фильтрация", img: "./imgs/technologies/menu/menu_2.png", desc: "2Desc", link: "technologies-content#filtration" },
            { name: "Удаление железа / марганца на фильтрах WET- FE", img: "./imgs/technologies/menu/menu_3.png", desc: "3Desc", link: "technologies-content#ferum-remove" },
            { name: "Сорбция - фильтры с активированным углем WET-AC", img: "./imgs/technologies/menu/menu_4.png", desc: "4Desc", link: "technologies-content#sorbtion" },
            { name: "Умягчение (Na – катионирование)", img: "./imgs/technologies/menu/menu_5.png", desc: "5Desc", link: "technologies-content#softening" },
            { name: "Декарбонизация (Н – катионирование)", img: "./imgs/technologies/menu/menu_6.png", desc: "6Desc", link: "technologies-content#decarbonization" },
            { name: "Обратный осмос", img: "./imgs/technologies/menu/menu_7.png", desc: "6Desc", link: "technologies-content#reverse-osmos" },
            { name: "Ультрафильтрация", img: "./imgs/technologies/menu/menu_8.png", desc: "6Desc", link: "technologies-content#ultrafiltration" },
            { name: "Комплекс оборудования водоподготовки", img: "./imgs/technologies/menu/menu_9.png", desc: "6Desc", link: "technologies-content#complex-water-equipment" },
        ];

    }

    render() {
        const itemsRendered = this.items.map((item, index) => {
            return (
                <Link to={item.link} key={index} >
                    <CardBoxPicture item={item} />
                </Link>
            );
        });
        return (
            <div>
                <div className="container technologies">
                    <div className="row margin_bottom_50">
                        <div className="col-xs-12">
                            <CategoryTitle title="технологии" />
                        </div>
                    </div>
                    <div className="row">
                        {itemsRendered}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Technologies;