import React from 'react';

import CategoryTitle from '../titles/categoryTitle';
import ServiceIcon from './icon';

import './service.css';

class Services extends React.Component{
    render(){ 
        const serviceIcons = [
            {name:'icons-chooseIcon',desc:'Подбор технологий и оборудования для подготовки воды'},  
            {name:'icons-creation',desc:'Изготовление оборудования, монтаж, шефмонтаж, ПНР'},  
            {name:'icons-release',desc:'Реализация и сопровождение проектов'},  
            {name:'icons-invest',desc:'Комплексное обследование оборудования'},  
            {name:'icons-reconstruction',desc:'Реконструкция и расширение ХВО'},  
            {name:'icons-service',desc:'Профессиональный сервис'}
        ];
        const serviceIconsLayout = serviceIcons.map((item,index)=>{
            return <ServiceIcon name={item.name} desc={item.desc} key={index} />;
        });
        return(
            <div className="row">
                <div className="container services clearfix">
                    <CategoryTitle  title="что мы предлагаем" />
                    <div  className="row services-wrapper">
                        {serviceIconsLayout}
                    </div>
                </div>
            </div>
        );
    }
}
export default Services;