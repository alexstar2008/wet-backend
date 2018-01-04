import React from 'react';

import './footer.css';

class Footer extends React.Component{
    render(){
        const rightsSection = 'Copyrights &copy; 2017 WET Все права защищены';
        return(
            <footer className="clearfix">
                <div className="container">
                    <div className="row">
                        <div className="footer-text">
                        {rightsSection}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;