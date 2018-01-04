import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from './AppWrapper.jsx';

if(document.getElementById('root')){
    ReactDOM.render(<AppWrapper />, document.getElementById('root'));
}