import React from 'react';

class ContactsAddress extends React.Component{
    render(){
        let marker = ''; 
        let content = '';
        if(this.props.marker){
            marker=<i className="fa fa-map-marker" aria-hidden="true"></i>;
        }else if(this.props.icon){
            marker=<i className={"fa "+this.props.icon} aria-hidden="true"></i>;
        }
        if(this.props.content){
            content= <p className="address-content">
                        {this.props.content}
                    </p>;
        }
        return(
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 address-item">
                <div className="address-inline address-marker">
                    {marker}
                </div>
                <div className="address-inline">
                    <h6 className="address-title">{this.props.title}</h6>
                    {content}
                    {this.props.list}
                </div>
            </div>
        );
    }
}
export default ContactsAddress;