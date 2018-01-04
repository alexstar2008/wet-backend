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
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5077.170306945716!2d30.481484490079392!3d50.4860662921178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x40d4cdfbd2ea035b%3A0x43791b0e3a517f26!2z0JzQvtGB0LrQvtCy0YHRjNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAyMSwg0JrQuNGX0LIsINC80ZbRgdGC0L4g0JrQuNGX0LI!3m2!1d50.489582899999995!2d30.4929882!4m5!1s0x40d4cde4c5665971%3A0x2b4c6bae44045038!2z0LLRg9C7LiDQktGW0LrQtdC90YLRltGPINCl0LLQvtC50LrQuCwgMjEsINCa0LjRl9Cy!3m2!1d50.485564499999995!2d30.4885584!5e0!3m2!1suk!2sua!4v1457992118730" frameBorder="0" className="map-iframe"  allowFullScreen></iframe>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Maps;