import React, { Component } from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Shared.css';

import PhotoSlider from '../../components/main-slider/main-slider.module';
import Services from '../../components/services/service.module';
import About from '../../components/about/about.module';
import Contacts from '../../components/contacts/contacts.module';
import Clients from '../../components/clients/clients.module';
import Footer from '../../components/footer/footer.module';

class App extends Component {
  render() {
    return (
      <div>
        <PhotoSlider />
        <div className="container-fluid">  
          <Services />
          <About />
          <Contacts />
          <Clients />
          </div>
        <Footer />
      </div>
    );
  }
}
export default App;
