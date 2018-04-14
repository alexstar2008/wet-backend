import React from 'react';
import PropTypes from 'prop-types';

class CategoryTitle extends React.Component{
    render(){
        const type = this.props.type === 'white' ? 'category_title white' : 'category_title';
        return(
            <div>
                <h2 className={ type }>{this.props.title}</h2>
            </div>
        );
    }
}
CategoryTitle.defaultProps = {
    type:'blue'
};
CategoryTitle.propTypes = {
    title:PropTypes.string,
    type:PropTypes.string
};
export default CategoryTitle;