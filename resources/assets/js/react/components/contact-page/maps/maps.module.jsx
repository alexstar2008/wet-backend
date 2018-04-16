import React from 'react';

import './maps.css';

class Maps extends React.Component{
    render(){
        return(
            <div className="maps-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 maps-wrapper-item">
                        <div className="map-label">Расположение офиса</div>
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.4949792901737!2d30.485174246633004!3d50.4847133725283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde4f882d37d%3A0x9ff144d84b8e91d6!2sWater+Eco+Tech!5e0!3m2!1suk!2sua!4v1523904777423" frameBorder="0" className="map-iframe"  allowFullScreen></iframe>
                    </div>
                    <div className="col-xs-12 col-sm-6 maps-wrapper-item">
                        <div className="map-label">Расположение склада</div>
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.5840069630112!2d30.486728234059296!3d50.486087633781075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde4c0da45a7%3A0x34f368e7a689b2cd!2z0KHQutC70LDQtCAxNS8z0JA!5e0!3m2!1suk!2sua!4v1523659712221" frameBorder="0" className="map-iframe"  allowFullScreen></iframe>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Maps;