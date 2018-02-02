import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {
    Link
} from 'react-router-dom';

import '../../Shared.css';

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';
import CardBoxPicture from '../../components/content-box/card-box-picture';

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.items = [
            { name: "Осветление воды", img: "./imgs/lipetsk.png", desc: "1Desc" },
            { name: "Механическая фильтрация", img: "./imgs/lipetsk.png", desc: "2Desc" },
            { name: "Удаление железа / марганца на фильтрах WET- FE", img: "./imgs/lipetsk.png", desc: "3Desc" },
            { name: "Сорбция - фильтры с активированным углем WET-AC", img: "./imgs/lipetsk.png", desc: "4Desc" },
            { name: "Умягчение (Na – катионирование)", img: "./imgs/lipetsk.png", desc: "5Desc" },
            { name: "Декарбонизация (Н – катионирование)", img: "./imgs/lipetsk.png", desc: "6Desc" },
            { name: "Обратный осмосё", img: "./imgs/lipetsk.png", desc: "6Desc" },
            { name: "Ультрафильтрация", img: "./imgs/lipetsk.png", desc: "6Desc" },
            { name: "Комплекс оборудования водоподготовки", img: "./imgs/lipetsk.png", desc: "6Desc" },
        ];

    }

    render() {
        const itemsRendered = this.items.map((item, index) => {
            return (
                <Link to="technologies-content">
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