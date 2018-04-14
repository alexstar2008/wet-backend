import React, { Component } from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Shared.css';
import './Contacts.css';

import Footer from '../../components/footer/footer.module';

import CategoryTitle from '../../components/titles/categoryTitle';
import ParagraphTitle from '../../components/titles/paragraph';

import ContactsAddress from '../../components/shared/address';
import Maps from '../../components/contact-page/maps/maps.module';

class Contacts extends Component{
    render(){
        const phoneList = <ul className="phone-list">
            <li><div>Тел./Факс:</div><div className="phone-list-item-content"> +38 044 507 07 12</div></li>
            <li><div>Водафон:</div><div className="phone-list-item-content"> +38 050 351 49 51</div></li>
            <li><div>Киевстар:</div><div className="phone-list-item-content"> +38 068 849 61 68</div></li>
        </ul>;
        const mailList = <ul className="phone-list">
            <li><div>E-mail:</div><div className="phone-list-item-content"> wet@wet.com.ua</div></li>
            <li><div>Сайт:</div><div className="phone-list-item-content"> www.wet.com.ua</div></li>
        </ul>;
        return (
            <div>
                <div className="container-fluid">
                    <div className="container contacts contacts-page">
                        <div className="row">
                            <CategoryTitle  title="Контакты" />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-8 col-md-offset-2">
                                <p className="paragraph-text blue">
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице 
                                    с начала XVI века.
                                </p>
                            </div>
                        </div>
                        <div className="contacts-info-wrapper">
                            <div className="row">
                                <ContactsAddress grid='col-xs-12 col-sm-12 col-md-4 col-md-offset-2' title='Почтовый, юридический и физический адрес:' 
                                    content='ООО “Вотер Эко Тех” Украина, 04080, г. Киев, ул. Викентия Хвойки, 18/14, корпус 1, оф. 312' marker />
                                <ContactsAddress grid='col-xs-12 col-sm-12 col-md-4' title='Поштова, юридична і фізична адреса:' 
                                    content='ТОВ “Вотер Еко Тех” Україна, 04080, м. Київ, вуд. Вікентія Хвойки, 18/14, корпус 1, оф. 312' marker  />
                            </div>
                            <div className="row">
                                <ContactsAddress grid='col-xs-12 col-sm-12 col-md-4 col-md-offset-2' title='Контактные телефоны:' list={phoneList} icon="fa-phone"  />
                                <ContactsAddress grid='ccol-xs-12 col-sm-12 col-md-4' title='Электронные контакты:' list={mailList} icon="fa-envelope-o" />
                            </div>
                        </div>
                        <div className="row">
                            <ParagraphTitle  title="КАК К НАМ ДОБРАТЬСЯ:" />
                        </div>
                        <Maps />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contacts;