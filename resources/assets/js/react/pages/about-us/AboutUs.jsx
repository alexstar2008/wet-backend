import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';
import ContentBox from '../../components/content-box/content-box';

import '../../Shared.css';
import './about-us.css';

class AboutUs extends Component {
    render() {
        const experience = new Date().getFullYear() - 2004;
        const content2 = 'Наши специалисты имеют ' + experience + '-летний успешный опыт подбора, установки и запуска промышленных систем подготовки и очистки воды в Украине, странах СНГ и Балтии во всех отраслях промышленности требующих подготовленной воды;';
        return (
            <div>
                <div className="about-us container">
                    <div className="row">
                        <div className="col-xs-12">
                            <CategoryTitle title="О нас" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 about-us_list">
                            <div>
                                <div className="about-us_list-header">
                                    Компания ООО «Вотер Эко Тех»
                                </div>
                                <div className="about-us_list-item">
                                    образована в июне 2015 г.  на базе коллектива сотрудников ООО «Джурби Вотер Тех»,
                                    в которую вошли отделы инжиниринга, химической обработки воды, монтажа и сервиса.
                                </div>
                            </div>
                            <div>
                                <div className="about-us_list-header">
                                    Сегодня мы -
                                </div>
                                <div className="about-us_list-item">
                                    активно развивающаяся компания, предлагающая свои продукты и услуги
                                    в области подготовки и химической обработки воды во всех отраслях промышленности.
                                </div>
                            </div>
                            <div>
                                <div className="about-us_list-header">
                                    Наша миссия -
                                </div>
                                <div className="about-us_list-item">
                                    это комплексное решение проблем и задач, связанных с использованием воды,
                                    наиболее современными и экономически эффективными способами,
                                с учетоминдивидуальных запросов клиентов и экологических требований к рациональному потреблению воды.                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Paragraph title="почему мы:" />
                        </div>
                    </div>
                    <ContentBox content="Использование наших технологий даст вам максимально безаварийную работу оборудования при минимальных эксплуатационных затратах;" />
                    <ContentBox content={content2} />
                    <ContentBox content="Мы предлагаем весь комплекс работ и продукции для решения любой вашей задачи, связанной с использованием воды – вам не нужны 10 подрядчиков, просто обратитесь к нам;" />
                    <ContentBox content="Мы предлагаем европейское качество продуктов и сервиса по украинским ценам." />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutUs;