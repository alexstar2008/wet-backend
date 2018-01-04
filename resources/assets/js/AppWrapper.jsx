import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/header/header.module';

import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import Reference from './pages/reference/Reference';
import AssemblingService from './pages/assembling-service/AssemblingService';
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/about-us/AboutUs';
import WeOffer from './pages/we-offer/we-offer';

import ScrollToTop from './components/header/ScrollToTop';

class AppWrapper extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <ScrollToTop>
                        <div className="main-wrapper" id="top">
                            <Header/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/reference" component={Reference}/>
                            <Route path="/about-us" component={AboutUs}/>
                            <Route path="/we-offer" component={WeOffer}/>
                            <Route path="/assembling-service" component={AssemblingService}/>
                            <Route path="/photo-gallery" component={Gallery}/>
                        </div>
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}

export default AppWrapper;