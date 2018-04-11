import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './content-box-picture.css';

class ContentBoxPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false
        };
        this.toggleList = this.toggleList.bind(this);
    }

    toggleList() {
        this.setState((prevState) => ({
            showList: !prevState.showList
        }));
    }

    render() {
        const listItem = this.props.list.map((item, index) => {
            return <li key={index} dangerouslySetInnerHTML={{__html:item}}></li>;
        });
        let animatedList = null;
        // if(this.state.showList){
        animatedList =
            <ul className={this.state.showList ? "cbp-list" : "cbp-list-hidden"}>
                {listItem}
            </ul>
        // }
        const imgStyles = this.props.imgStyles || '';
        return (
            <div className="col-xs-12 col-md-6">
                <div className="cbp-wrapper">
                    <div className={"cbp-img " + imgStyles}>
                        <img src={this.props.picture} />
                    </div>
                    <div className="cbp-title">
                        {this.props.title}
                    </div>
                    {animatedList}
                    <div className="show-more-btn" onClick={this.toggleList}>
                        <i className={this.state.showList && "fa fa-chevron-down fa-rotate-180" || "fa fa-chevron-down"}
                            aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBoxPicture;