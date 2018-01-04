import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import './content-box.css';

class ContentBox extends Component{
    render(){
        return(
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
            <div className="row">
                <div className="col-xs-12 col-md-8 col-md-push-2">
                        <div className="content-box">
                            <div className="content-box-body">
                                <div className="content-box-icon">
                                    <i className="fa fa-check fa-lg" aria-hidden="true"></i>
                                </div>
                                {this.props.content}
                            </div>
                        </div>

                </div>
            </div>
            </ScrollAnimation>
        );
    }
}
ContentBox.defaultProps = {
    content: ''
};

export default ContentBox;