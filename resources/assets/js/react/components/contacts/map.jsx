import React from 'react';

class ContactsMap extends React.Component{
    render(){
        return(
            <div className="row">
                <h3 className="map-title">{this.props.title}</h3>
                <div className="col-lg-12">
                    <div className="map-wrapper">
                        <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.4949792901737!2d30.485174246633004!3d50.4847133725283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde4f882d37d%3A0x9ff144d84b8e91d6!2sWater+Eco+Tech!5e0!3m2!1suk!2sua!4v1523904777423" frameBorder="0" className="map-iframe"  allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactsMap;
