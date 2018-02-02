import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';

import '../../Shared.css';
import './gallery.css';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 3,
            sliderOpened: false
        };
        this.items = [
            {name: "1", img: "./imgs/lipetsk.png", desc: "1Desc"},
            {name: "2", img: "./imgs/lipetsk.png", desc: "2Desc"},
            {name: "3", img: "./imgs/lipetsk.png", desc: "3Desc"},
            {name: "4", img: "./imgs/lipetsk.png", desc: "4Desc"},
            {name: "5", img: "./imgs/lipetsk.png", desc: "5Desc"},
            {name: "6", img: "./imgs/lipetsk.png", desc: "6Desc"},
        ];
        this.toggleSlider = this.toggleSlider.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    toggleSlider(currentSlider) {
        this.setState((prevState) => {
            return {
                sliderOpened: !prevState.sliderOpened,
                current: currentSlider || prevState.current
            }
        });
    }

    nextSlide() {
        this.setState((prevState) => {
            return {
                current: prevState.current >= this.items.length - 1 ? 0 : prevState.current + 1
            }
        });
    }

    prevSlide() {
        this.setState((prevState) => {
            return {
                current: prevState.current <= 0 ? this.items.length - 1 : prevState.current - 1
            }
        });
    }


    render() {

        const sliderItem = this.items[this.state.current];
        const sliderTemplate = <div className={this.state.sliderOpened ? "slider-template" : "slider-hidden"}>
            <div className="slider-arrow" onClick={this.prevSlide}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="slider-photo">
                <img src={sliderItem.img}/>
            </div>
            <div className="slider-close" onClick={() => this.toggleSlider()}>
                <i className="fa fa-lg fa-times" aria-hidden="true"></i>
            </div>
            <div className="slider-arrow right" onClick={this.nextSlide}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            <div className="slider-desc">
                <span>{sliderItem.name}</span><br/>
                {sliderItem.desc}
            </div>
        </div>;

        const itemsRendered = this.items.map((item, index) => {
            return <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="gallery-item" onClick={() => {
                    this.toggleSlider(index);
                }}>
                    <div className="gallery-photo">
                        <img src={item.img} alt={item.name}/>
                    </div>
                    <h3 className="gallery-title">{item.name}</h3>
                </div>
            </div>
        });

        return (
            <div>
                <div className="gallery container">
                    {sliderTemplate}
                    <div className="row margin_bottom_50">
                        <div className="col-xs-12">
                            <CategoryTitle title="галерея"/>
                        </div>
                    </div>
                    <div className="row">
                        {itemsRendered}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Gallery;