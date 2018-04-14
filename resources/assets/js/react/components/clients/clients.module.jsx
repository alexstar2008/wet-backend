import React from 'react';

import CategoryTitle from '../titles/categoryTitle';
import ClientsSlider from './slider';

import './clients.css';

class Clients extends React.Component{
    render(){
        return(
            <div className="container">
                <CategoryTitle title="наши клиенты" />
                <div className="clients-slider">
                    <ClientsSlider />
                </div>
            </div>
        );   
    }
}
export default Clients;