import React from 'react';
import PropTypes from 'prop-types';

class Paragraph extends React.Component{
    render(){
        const type = this.props.type === 'white' ? 'paragraph_title white' : 'paragraph_title';
        return(
            <div>
                <h2 className={ type }>{this.props.title}</h2>
            </div>
        );
    }
}
Paragraph.defaultProps = {
    type:'blue'
};
Paragraph.propTypes = {
    text:PropTypes.string,
    type:PropTypes.string
};
export default Paragraph;