import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/footer/footer.module';
import CategoryTitle from '../../components/titles/categoryTitle';

import '../../Shared.css';
import './Reference.css';

class Reference extends Component {
    render() {
        return (
            <div className="body-test">
                <div className="references container">
                    <div className="row">
                        <CategoryTitle title="референс"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <p className="paragraph-text blue">
                                За последние 12 лет работы нашими специалистами установлено и успешно введено в
                                эксплуатацию оборудование:
                            </p>
                        </div>
                    </div>
                    <ScrollAnimation animateOnce={true} animateIn="fadeInUp" duration={2}>
                        <div className="row">
                            <div className="col-xs-12 references_table_wrapper">
                                <table className="references_table">
                                    <thead>
                                    <tr>
                                        <th>Название предприятия</th>
                                        <th>Предназначения</th>
                                        <th>Оборудование/работы</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td colSpan="3" className="references_section_header">МЕТАЛЛУРГИЧЕСКАЯ
                                            ПРОМьіШЛЕННОСТЬ
                                        </td>
                                    </tr>
                                    <tr className="references_row references_row_colored">
                                        <td>Днепрококс</td>
                                        <td>ТЭЦ, подпитка котлов</td>
                                        <td>фильтрация 160 м<sup>3</sup>/ч<br/> умягчение 2 ступени 150 м<sup>3</sup>/ч
                                        </td>
                                    </tr>
                                    <tr className="references_row">
                                        <td>ИСД, Алчевский МК</td>
                                        <td>ГТС КЦ</td>
                                        <td>Оборудование для станции очистки производственно-дождевых стоков</td>
                                    </tr>
                                    <tr className="references_row references_row_colored">
                                        <td>ИСД, Алчевсккокс</td>
                                        <td>Сервисные работы</td>
                                        <td>Замена мембран установок обратного осмоса</td>
                                    </tr>
                                    <tr className="references_row">
                                        <td rowSpan="3" className="references_cell_colored">Метинвест, МКАзовсталь</td>
                                        <td>Энергоблок ККЦ, подпитка котлов</td>
                                        <td>фильтрация 240 м<sup>3</sup>/ч <br/>
                                            ультрафильтрация 220 м<sup>3</sup>/ч<br/>
                                            обратный осмос 160 м<sup>3</sup>/ч<br/>
                                            умягчение 130 м<sup>3</sup>/ч
                                        </td>
                                    </tr>
                                    <tr className="references_row references_row_colored">
                                        <td>ТЛЦ, оборотный цикл</td>
                                        <td>фильтрация 2800 м<sup>3</sup>/ч (5 фильтров D=5000мм)</td>
                                    </tr>
                                    <tr className="references_row">
                                        <td>БОС-2</td>
                                        <td>
                                            фильтрация 750 м<sup>3</sup>/ч<br/>
                                            ультрафильтрация 675 м<sup>3</sup>/ч<br/>
                                            обратный осмос 600 м<sup>3</sup>/ч
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan="3" className="references_section_header">ЭНЕРГЕТИКА</td>
                                    </tr>
                                    <tr className="references_row">
                                        <td>Биогазэнерго</td>
                                        <td>ТЭС на биотопливе, Подпитка котлов</td>
                                        <td>Фильтрация, Н-Naкатионирование 15 м<sup>3</sup>/ч</td>
                                    </tr>
                                    <tr className="references_row references_row_colored">
                                        <td>Донбассэнерго, Старобешевская ТЭС</td>
                                        <td>Строительство станции питьевого водоснабжения «под ключ»</td>
                                        <td>Фильтрация, обратный осмос 100 м<sup>3</sup>/сутки</td>
                                    </tr>
                                    <tr className="references_row">
                                        <td>Кременчугская ТЭЦ</td>
                                        <td>Подготовка воды для котлов</td>
                                        <td>Реконструкция осветлителей и Н-катионированияIIст, 300 м<sup>3</sup>/ч</td>
                                    </tr>
                                    <tr className="references_row references_row_colored">
                                        <td>Шосткинская ТЭЦ</td>
                                        <td>Подпитка котлов высокого давления, Уникальное решение по утилизации стоков
                                        </td>
                                        <td>
                                            фильтрация 110 м<sup>3</sup>/ч,<br/>
                                            ультрафильтрация 90 м<sup>3</sup>/ч,<br/>
                                            умягчение 85 м<sup>3</sup>/ч, <br/>
                                            обратный осмос 41 м<sup>3</sup>/ч + 36 м<sup>3</sup>/ч
                                        </td>
                                    </tr>
                                    <tr className="references_row">
                                        <td>VKG ENERGIJA OU Эстония</td>
                                        <td>
                                            VKG ENERGIJA OU Эстония Комплекс водоподготовки подпитки котлов:
                                            Кондесатоочистка 80 м<sup>3</sup>/ч<br/>
                                            Деминерализованная вода 40 м<sup>3</sup>/ч<br/>
                                            Для конденсатоочистки 80 м<sup>3</sup>/ч<br/>
                                            сорбционные фильтры 80 м<sup>3</sup>/ч<br/>
                                            установка ФСД 80 м<sup>3</sup>/ч<br/>
                                        </td>
                                        <td>
                                            Для конденсатоочистки 80 м<sup>3</sup>/ч<br/>
                                            сорбционные фильтры 80 м<sup>3</sup>/ч<br/>
                                            установка ФСД 80 м<sup>3</sup>/ч<br/>
                                            Деминерализация 40 м<sup>3</sup>/ч<br/>
                                            ультрафильтрация 55 м<sup>3</sup>/ч<br/>
                                            обратный осмос 47 м<sup>3</sup>/ч<br/>
                                            установка ЭДИ 40 м<sup>3</sup>/ч
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <h4 className="paragraph-header">Специалистами отдела Химической обработки воды разработаны
                                и успешно внедрены программы реагентной обработки:</h4>
                            <div>
                                <div className="paragraph-list-header">
                                    Для охладительных циклов, общим объемом более 28000 м<sup>3</sup>:
                                </div>
                                <div className="paragraph-list-item">
                                    ДМКД, Северодонецкий Азот, Одесский припортовый завод, Концерн Стирол, РовноАзот,
                                    предприятия Укрнафты (Качановский и Гнединцевский ГПЗ), Coca-Cola, Глобинский МПК,
                                    Интеркорн и пр..
                                </div>
                            </div>
                            <div>
                                <div className="paragraph-list-header">
                                    Для обратных осмосов, общей производительностью более 1200 м<sup>3</sup>/ч:
                                </div>
                                <div className="paragraph-list-item">
                                    ДМКД, Северодонецкий Азот, Одесский припортовый завод, Концерн Стирол, РовноАзот,
                                    предприятия Укрнафты (Качановский и Гнединцевский ГПЗ), Coca-Cola, Глобинский МПК,
                                    Интеркорн и пр..
                                </div>
                            </div>
                            <div>
                                <div className="paragraph-list-header">
                                    Несколько десятков котелен используют наши реагентные:
                                </div>
                                <div className="paragraph-list-item">
                                    программы для защиты от накипи, коррозии, связывания кислорода, хим. промывок
                                    оборудования и пр.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Reference;