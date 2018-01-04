import React from 'react';
import PropTypes from 'prop-types';

class ServiceIcon extends React.Component{
    render(){
        const iconName = "icons "+this.props.name;
        return(
            <div className="col-md-4 col-sm-6 col-xs-12 icons-item">
                <div className="icons-content">
                    <div><i className={iconName}></i></div>
                    <p className="icons-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}
ServiceIcon.propTypes = {
    name:PropTypes.string,
    desc:PropTypes.string
}
export default ServiceIcon;