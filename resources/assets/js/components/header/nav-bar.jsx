import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './header.css';
class NavBar extends React.Component{ 
    render(){
        const links = [
            {title:"о компании",href:"#",submenu:[
              {title:"о нас",href:"/about-us"},
              {title:"мы предлагаем",href:"/we-offer"},
              {title:"референс",href:"/reference"},
              {title:"фотогалерея",href:"/photo-gallery"},
            ]},
            {title:"технологии",href:"/about-us"},
            {title:"оборудование",href:"/#"},
            {title:"монтаж и сервис",href:"/assembling-service"},
            {title:"библиотека",href:"#"},
            {title:"контакты",href:"/contacts"},
        ];
        const linksLayout = links.map((item,index)=>{
          if(item.submenu){
            return <li className="dropdown">
            <a className="dropdown-toggle nav-item" data-toggle="dropdown" href="#">{item.title}
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
              {item.submenu.map((subitem)=> <li><Link to={subitem.href} className="nav-sub-item">{subitem.title}</Link></li> )}
            </ul>
          </li>
          }
          return <li key={index}><Link to={item.href} className="nav-item">{item.title}</Link></li>
        });
        return(
            <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> 
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    {linksLayout}
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
export default NavBar;