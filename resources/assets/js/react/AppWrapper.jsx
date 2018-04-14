import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

import Header from './components/header/header.module';

import Home from './pages/home/Home';
import Equipment from './pages/equipment/Equipment';
import Contacts from './pages/contacts/Contacts';
import Reference from './pages/reference/Reference';
import AssemblingService from './pages/assembling-service/AssemblingService';
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/about-us/AboutUs';
import WeOffer from './pages/we-offer/we-offer';
import Technologies from './pages/technologies/Technologies';
import TechnologiesContent from './pages/technologies/TechnologiesWrapper';
import Library from './pages/library/Library';
import ScrollToTop from './components/header/ScrollToTop';
import Routes from './routes';


class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <ScrollToTop>
                        <Routes></Routes>
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}

export default (AppWrapper);