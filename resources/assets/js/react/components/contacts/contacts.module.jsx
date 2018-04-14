import React from 'react';

import CategoryTitle from '../titles/categoryTitle';
import ContactsAddress from './address';
import ContactsMap from './map';

import './contacts.css';

class Contacts extends React.Component{
    render(){
        const phoneList = <ul className="phone-list">
            <li><div>Тел./Факс:</div><div className="phone-list-item-content"> +38 044 507 07 12</div></li>
            <li><div>Водафон:</div><div className="phone-list-item-content"> +38 050 351 49 51</div></li>
            <li><div>Киевстар:</div><div className="phone-list-item-content"> +38 050 351 49 51</div></li>
            <li><div>E-mail:</div><div className="phone-list-item-content"> wet@wet.com.ua</div></li>
            <li><div>Сайт:</div><div className="phone-list-item-content"> www.wet.com.ua</div></li>
        </ul>;
        return(
            <div className="container contacts" id="contacts">
                <CategoryTitle title="контакты" />
                <div className="row">
                    <div className="addresses-group">
                        <ContactsAddress title='Почтовый, юридический и физический адрес:' 
                            content='ООО “Вотер Эко Тех” Украина, 04080, г. Киев, ул. Викентия Хвойки, 18/14, корпус 1, оф. 312' marker />
                        <ContactsAddress title='Поштова, юридична і фізична адреса:' 
                        content='ТОВ “Вотер Еко Тех” Україна, 04080, м. Київ, вуд. Вікентія Хвойки, 18/14, корпус 1, оф. 312' marker />
                        <ContactsAddress title='Контактные телефоны:' list={phoneList}/>
                    </div>
                </div>
                <ContactsMap title="Как к нам добраться:" />
            </div>
        );
    }
}
export default Contacts;