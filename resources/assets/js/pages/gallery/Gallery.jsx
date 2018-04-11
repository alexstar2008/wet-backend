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
            current: 0,
            sliderOpened: false,
            items: []
        };
        this.getPhotos = this.getPhotos.bind(this);
        this.getPhotos();

        this.toggleSlider = this.toggleSlider.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }
    getPhotos(){
        fetch('/api/photos')
            .then(response => response.json())
            .then(data=>{
                this.setState({items : data});
            })
            .catch(err=>console.log(err));
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
                current: prevState.current >= this.state.items.length - 1 ? 0 : prevState.current + 1
            }
        });
    }

    prevSlide() {
        this.setState((prevState) => {
            return {
                current: prevState.current <= 0 ? this.state.items.length - 1 : prevState.current - 1
            }
        });
    }


    render() {
        if(this.state.items.length===0){
            return (
                <div>
                    <div className="gallery container">
                        <div className="sliderWrapper">
                            {sliderTemplate}
                        </div>
                        <div className="row margin_bottom_50">
                            <div className="col-xs-12">
                                <CategoryTitle title="галерея"/>
                            </div>
                        </div>
                        <div className="row">
                        <img src="./imgs/Loading.svg"/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            );
        }
        const sliderItem = this.state.items[this.state.current];

        const sliderTemplate = <div className={this.state.sliderOpened ? "slider-template" : "slider-hidden"}>
            <div className="slider-arrow" onClick={this.prevSlide}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="slider-photo">
                <img src={'/photos/'+sliderItem.img}/>
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

        const itemsRendered = this.state.items.map((item, index) => {
            return <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="gallery-item" onClick={() => {
                    this.toggleSlider(index);
                }}>
                    <div className="gallery-photo">
                        <img src={'/photos/'+item.img} alt={item.name}/>
                    </div>
                    <h3 className="gallery-title">{item.name}</h3>
                </div>
            </div>
        });

        return (
            <div>
                <div className="gallery container">
                    <div className="sliderWrapper">
                        {sliderTemplate}
                    </div>
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