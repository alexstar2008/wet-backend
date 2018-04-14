import React from 'react';

import './maps.css';

class Maps extends React.Component{
    render(){
        return(
            <div className="maps-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 maps-wrapper-item">
                        <div className="map-label">Маршрут к офису</div>
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.1300709057612!2d30.487092303758!3d50.4839788528683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI5JzAyLjkiTiAzMMKwMjknMTAuNyJF!5e0!3m2!1suk!2sua!4v1508779394044" frameBorder="0" className="map-iframe"  allowFullScreen></iframe>
                    </div>
                    <div className="col-xs-12 col-sm-6 maps-wrapper-item">
                        <div className="map-label">Проложенный маршрут к складу</div>
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.5840069630112!2d30.486728234059296!3d50.486087633781075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde4c0da45a7%3A0x34f368e7a689b2cd!2z0KHQutC70LDQtCAxNS8z0JA!5e0!3m2!1suk!2sua!4v1523659712221" frameBorder="0" className="map-iframe"  allowFullScreen></iframe>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Maps;