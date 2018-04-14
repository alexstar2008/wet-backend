import React from 'react';

class ContactsMap extends React.Component{
    render(){
        return(
            <div className="row">
                <h3 className="map-title">{this.props.title}</h3>
                <div className="col-lg-12">
                    <div className="map-wrapper">
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.1300709057612!2d30.487092303758!3d50.4839788528683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI5JzAyLjkiTiAzMMKwMjknMTAuNyJF!5e0!3m2!1suk!2sua!4v1508779394044" frameBorder="0" className="map-iframe"  allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactsMap;
