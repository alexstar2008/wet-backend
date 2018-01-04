import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


import CategoryTitle from '../titles/categoryTitle';

import './about.css'

class About extends React.Component{
    render(){
        const contentParagraphs = [
              [<strong key="1">Компания ООО «Вотер Эко Тех»</strong>," образована в июне 2015 г. на базе коллектива сотрудников ООО «Джурби Вотер Тех», в которую вошли сотрудники отделов инжиниринга, реализации проектов, химической обработки воды, монтажа и сервиса."],
              ["С 2004 года было успешно реализовно более 100 проектов различной степени сложности в Украине, странах СНГ и Балтии, для этого был применен весь широкий диапозон современных технологий подготовки воды."],
              [<strong key="2">Сегодня мы</strong>," – активно развивающаяся компания, предлагающая свои продукты и услуги в области подготовки и химической обработки воды во всех отраслях промышленности."],
              [<strong key="3">Наша миссия</strong>," – это комплексное решение проблем и задач, связанных с использованием воды, наиболее современными и экономически эффективными способами, с учетом индивидуальных запросов клиентов и экологических требований к рациональному потреблению воды."]
        ];
        const contentParagrapsLayout = contentParagraphs.map((item,index)=>{
            return <p className="about-desc" key={index}>{item}</p>;
        });
        return (
            <div className="row about">
                <div className="container">
                    <div className="row">
                        <div className="logo-wrapper">
                            <i className="icons icons-logo-white"></i>
                        </div>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce>
                            <div className="about-line"></div>
                        </ScrollAnimation>
                        <div className="about-desc-wrapper">
                            <CategoryTitle type="white" title="о компании"/>            
                                {contentParagrapsLayout}
                        </div>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce >
                            <div className="about-line"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;