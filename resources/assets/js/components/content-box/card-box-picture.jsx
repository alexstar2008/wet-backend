import React from 'react';


import './content-box-picture.css';


function CardBoxPucture({ item }) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="gallery-item">
                <div className="gallery-photo">
                    <img src={item.img} alt={item.name} />
                </div>
                <h3 className="gallery-title">{item.name}</h3>
            </div>
        </div>
    );
}

export default CardBoxPucture;