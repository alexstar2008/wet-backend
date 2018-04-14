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

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentCategories: ''
        };
        this.getEquipment.call(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props.location.pathname);
        }
    }

    onRouteChanged(path) {
        const seoMap = {
            '/': 'Water Eco Tech',
            '/contacts': 'КОНТАКТЫ - WET',
            '/assembling-service': 'МОНТАЖ И СЕРВИС - WET',
            '/about-us': 'О НАС - WET',
            '/we-offer': 'МЫ ПРЕДЛАГАЕМ - WET',
            '/photo-gallery': 'ФОТОГАЛЕРЕЯ - WET',
            '/reference': 'РЕФЕРЕНС - WET',
            '/technologies': 'ТЕХНОЛОГИИ - WET',
            '/technologies-content': 'ТЕХНОЛОГИИ - WET',
            '/library': 'БИБЛИОТЕКА  - WET',
        };
        const title = seoMap[path] ? seoMap[path] : seoMap['/'];
        document.title = title;
    }
    getEquipment() {
        fetch('/api/equipment')
            .then(resp => resp.json())
            .then(categories => {
                const categoriesLinks = categories.map(category => {
                    return (<Route key={category.id} path={'/' + category.name + '-' + category.id} component={Equipment} />);
                });
                this.setState({ equipmentCategories: categoriesLinks });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="main-wrapper" id="top">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/reference" component={Reference} />
                <Route path="/technologies-content" component={TechnologiesContent} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/technologies" component={Technologies} />
                <Route path="/we-offer" component={WeOffer} />
                <Route path="/assembling-service" component={AssemblingService} />
                <Route path="/photo-gallery" component={Gallery} />
                <Route path="/library" component={Library} />
                {this.state.equipmentCategories}
            </div>
        );
    }
}

export default withRouter(AppWrapper);