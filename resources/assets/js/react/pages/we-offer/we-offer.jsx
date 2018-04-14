import React, {Component} from 'react';

import CategoryTitle from '../../components/titles/categoryTitle';
import ParagraphTitle from '../../components/titles/paragraph';
import Footer from '../../components/footer/footer.module';
import ContentBoxPicture from '../../components/content-box/content-box-picture';

import '../../Shared.css';
import './we-offer.css';

class WeOffer extends  Component{

    render(){
        const services = [
            {title:'Инжиниринг',img:'./imgs/icons/Engineering.png',list:[
                ' подбор и проектирование оборудования под индивидуальный запрос клиента;',
                ' полный спектр технологий подготовки воды, в т.ч.: '
                + '<br/>&nbsp;&nbsp;&nbsp; ● осветление, напорную/ безнапорную фильтрацию, удаление железа и марганца;'
                + '<br/>&nbsp;&nbsp;&nbsp; ● умягчение, удаление нитратов,декарбонизацию, обессоливание воды;'
                + '<br/>&nbsp;&nbsp;&nbsp; ● мембранные технологии ультрафильтрации и обратного осмоса;',
                ' поставку расходных материалов;'
            ]},
            {title:'Монтажные / сервисные работы:',img:'./imgs/icons/Montazh&Service.png',list:[
                ' монтажные и пусконаладочные работы (технология, электромонтаж,КИПиА, отладка программного обеспечения);',
                ' шефмонтаж, подбор и работа с подрядными организациями, сопровождение проекта, корректировка проектной документации;',
                ' обследование, реконструкция, модернизация, автоматизация существующего оборудования с целью уменьшения эксплуатационных затрат;',
                ' сервис: послепродажный, послегарантийный, периодичный, существующего оборудования, замену фильтрующих загрузок и мембран.'
            ]},
            {title:'Химическая обработка воды: ',img:'./imgs/icons/Chemical.png',list:[
                ' анализ воднохимического режима оборудования (паровые котлы, открытые и закрытыe охладительные циклы, системы обратного осмоса)',
                ' подбор и расчет программхимической обработки воды реагентами EPC<sup>TM</sup>(борьба с коррозией, накипеобразованием, биообрастанием, отмывка существующих отложений и пр.);',
                ' подбор, установку и обслуживание дозирующего оборудования;',
                ' обучение персонала, обеспечение средствами'
            ]},
            {title:'Комплектующие и расходные материалы:',img:'./imgs/icons/Complect.png',list:[
                ' корпуса фильтров (пластик, металлические с покрытием, нержавейка) и дренажные системы к ним;',
                ' управляющие клапана (RX, Clack, Fleck, ручные/автомат)',
                ' мембраны для систем обратного осмоса Toray, Dow, General Electric',
                ' ионообменные смолы Purolite, Dowex, Lewatit, Watex, Hydrolite.',
                ' активированный уголь, антрацит, кварцевый песок, гравий, загрузки для удаления железа',
                ' насосное и дозирующее оборудование.'
            ]},   
        ];
        let servicesLayout = [];
        for(let i=0;i<=services.length/2;i+=2){
            const serviceFirst = services[i];
            const serviceSecond = services[i+1] || null;
            const serviceRow = 
                <div className="row" key={i}>
                    <ContentBoxPicture picture={serviceFirst.img} title={serviceFirst.title} list={serviceFirst.list} />
                    {serviceSecond && <ContentBoxPicture picture={serviceSecond.img} title={serviceSecond.title} list={serviceSecond.list} /> }
                </div>;
            servicesLayout.push(serviceRow);
        }        
        return(
            <div>
                <div className="we-offer container" >
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-push-1">
                            <CategoryTitle title="о компании" />
                            <ParagraphTitle title="мы предлагаем" />
                        </div>
                    </div>
                    {servicesLayout}
                    <div className="row">
                        <div className="col-xs-12">
                            <ParagraphTitle title="Решаем следующие технологические задачи:" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-push-1">
                            <div className="unordered-list-header">
                                Энергетика, Промышленная энергетика
                            </div>
                            <ul className="unordered-list">
                                <li> подготовка воды для подпитки паровых котлов низкого, среднего и высокого давления;</li>
                                <li> блочные обессоливающие установки для ТЭС и ТЭЦ;</li>
                                <li> очистка конденсата;</li>
                                <li> химическая обработка питательной и котловой воды, борьба с накипью, коррозией, углекислотной коррозией систем возврата конденсата, связывание кислорода, уменьшение потерь с продувками котла, отмывка поверхностей нагрева от существующих отложений.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-push-1">
                            <div className="unordered-list-header">
                            Металлургия, Химическая/ Нефтехимическая отрасль, Машиностроение и пр.
                            </div>
                            <ul className="unordered-list">
                                <li> подготовка подпиточной воды для охладительных циклов и паровых котлов;</li>
                                <li> очистка оборотной воды охладительных циклов;</li>
                                <li> химическая (реагентная) обработка охладительных циклов и паровых котлов;</li>
                                <li> подготовка воды для хозбытовых нужд.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-push-1">
                            <div className="unordered-list-header">
                                Пищевая промышленность
                            </div>
                            <ul className="unordered-list">
                                <li> подготовка воды для производства бутилированной воды, соков,
                                    б/алкогольных и слабоалкогольных напитков, пива, водки и пр.;
                                </li>
                                <li> умягчение воды для бутыломоек с целью уменьшения затрат на моющие средства;</li>
                                <li> подготовка воды для подпитки паровых котлов и систем отопления;</li>
                                <li> осветление воды, в т.ч. из открытых источников (река, пруд), борьба с органикой,
                                    взвешенными в-ми;
                                </li>
                                <li> подготовка воды для хозбытовых нужд.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <ParagraphTitle title="кроме того" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-md-push-2">
                            <p className="paragraph-text blue">
                                Специалисты ООО «Вотер Эко Тех» имеют двенадцатилетний успешный  опыт решения
                                задач водоподготовки в самых разных отраслях и сферах деятельности: для
                                молокоперерабатывающих заводов, сахарных заводов, табачных фабрик, тепличных хозяйств,
                                деревообрабатывающей промышленности и пр.
                            </p>
                            <p className="paragraph-text blue">
                                Обращайтесь к нам с любыми вопросами, связанными с проблемами водопользования – для
                                нас нет нерешаемых задач!
                            </p>
                        </div>
                    </div>
                   
                </div>
                <Footer />
            </div>
        );
    }
}

export default WeOffer;