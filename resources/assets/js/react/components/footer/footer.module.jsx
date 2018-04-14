import React from 'react';

import './footer.css';

class Footer extends React.Component {
    render() {
        const year = new Date().getFullYear();
        const rightsSection = `Copyrights © ${year} WET Все права защищены`;
        return (
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