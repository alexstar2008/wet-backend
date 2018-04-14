import React from 'react';

import MainTitle from './main-title';
import NavBar from './nav-bar';

import ArrowUp from './arrow-up';

class Header extends React.Component{
    render(){
        return(
            <header>
                <MainTitle />
                <NavBar />
                <ArrowUp />
            </header>
        )
    }
}
export default Header;