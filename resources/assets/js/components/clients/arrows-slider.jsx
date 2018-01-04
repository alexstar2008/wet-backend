import React from 'react';

function PrevArrow(props){
    const {className, style, onClick} = props;
    return(
        <div className={className} 
            style={{...style, display: 'block', color: '#23748e'}} onClick={onClick}>
        </div>
    );
}
function NextArrow(props){
    const {className, style, onClick} = props;
    return(
        <div   className={className}
            style={{...style, display: 'block', color: '#23748e !important'}} onClick={onClick}>
        </div>
    );
}
export {PrevArrow,NextArrow};