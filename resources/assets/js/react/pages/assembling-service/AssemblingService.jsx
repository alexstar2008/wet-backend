import React,{Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';
import ContentBox from '../../components/content-box/content-box';
import ContentBoxPicture from '../../components/content-box/content-box-picture';

import '../../Shared.css';
import './assembling-service.css';

class AssemblingService extends Component{
    render(){
        const services = [
            {
                title:'Монтажные и пусконаладочные работы:',
                img:'./imgs/service.png',
                imgStyles:'card-img-assembling',
                list:[ 
                ' технологический монтаж',
                ' наладка режимов работы технологического оборудования',
                ' электромонтажные работы',
                ' установка и наладка оборудования КИПиА',
                ' отладка программного обеспечения'
            ]},
            {
                title:'Шефмонтажные работы:',
                img:'./imgs/chef.png',
                imgStyles:'card-img-assembling',
                list:[
                ' подбор и работа с подрядными организациями',
                ' сопровождение проекта, шефмонтаж`',
                ' корректировка проектной документации и режимных карт',
                ' сдача объекта в промышленную эксплуатацию'
            ]},
            {
                title:'Работы по реконструкции/ наладке существующего оборудования:',
                img:'./imgs/repair.png',
                imgStyles:'card-img-assembling',
                list:[
                ' комплексное обследование и анализ работы оборудования',
                ' реконструкция, расширение и модернизация оборудования',
                ' автоматизация оборудования',
                ' наладка режимов работы оборудования'
            ]},
            {title:'Сервис:',
            img:'./imgs/sngle-service.png',
            imgStyles:'card-img-assembling',
            list:[
                ' послепродажный и послегарантийный',
                ' на постоянной основе или по необходимости',
                ' нового или существующего (старого) оборудования',
                ' ремонт оборудования с заменой узлов и деталей',
                ' поставка и замена фильтрующих загрузок и мембран',
                ' проведение химических промывок мембранного оборудования RO и УФ',
                ' настройка режимов регенерации, ионообменного и фильтрующего оборудования',
                ' подбор оптимальной дозировки для реагентной обработки воды'
            ]},   
        ]
        let servicesLayout = [];
        for(let i=0;i<=services.length/2;i+=2){
            const serviceFirst = services[i];
            const serviceSecond = services[i+1] || null;
            const serviceRow = 
                <div className="row" key={i}>
                    <ContentBoxPicture picture={serviceFirst.img} imgStyles={serviceFirst.imgStyles} title={serviceFirst.title.toUpperCase()} list={serviceFirst.list} />
                    {serviceSecond && <ContentBoxPicture picture={serviceSecond.img} imgStyles={serviceSecond.imgStyles} title={serviceSecond.title.toUpperCase()} list={serviceSecond.list} /> }
                </div>;
            servicesLayout.push(serviceRow);
        }        


        const experience = new Date().getFullYear() - 2004;
        const serviceInfo = [
            {
                name:'имеет '+experience+'-летний, успешный опыт реализации промышленных объектов водоподготовки в различных отраслях промышленности в Украине, странах СНГ и Балтии,',
                desc:'что обеспечивает быстрое и качественное выполнение работ с минимальными затратами ресурсов и времени.'
            },
            {
                name:'имеет в своем составе технологов, специалистов по электрической части, КИПиА,',
                desc:'что гарантирует профессиональное управление проектами, безаварийную работу оборудования и получение воды требуемого качества.'
            },
            {
                name:'укомплектована необходимыми  приборами и инструментами, мобильной лабораторией,',
                desc:'что позволяет нашим специалистам  выполнять свою работу профессионально и оперативно контролировать результат.'
            },
            {
                name:'мобильна и всегда на связи,',
                desc:'что означает быструю реакцию на ваш звонок или вызов специалиста, и быстрое решение поставленных задач и возникших технических или технологических ситуаций.'
            }  
        ];
        const serviceInfoRendered = serviceInfo.map((item,index)=>{
            return <div className="row" key={index}>
               
                    <div className="col-xs-12 text-center col-sm-2">
                        <div className="circle-icon">{index+1}</div>
                    </div>
                    <div className="col-xs-12 col-sm-10">
                        <div className="list_type-one">
                            <div>
                                <div className="list_type-one-header">{item.name}</div>
                                <div className="list_type-one-item">{item.desc}</div>
                            </div>
                        </div>
                    </div>
            </div>
        })
        return(
            <div>
                <div className="assembling-service container">
                    <div className="row">
                        <div className="col-xs-12">
                            <CategoryTitle  title="Служба монтажа и сервиса:" />
                        </div>
                    </div>
                    <div className="margin_bottom_50">
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
                            {serviceInfoRendered}
                        </ScrollAnimation>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Paragraph title="наши инженеры" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6 text-center no_right_padding">
                            <div className="engineers border_right_dark-blue">
                                <h4>Васильев Андрей Николаевич</h4>
                                <span>инженер КИП и А</span>
                                <address>
                                    <h4>Контактные телефоны:</h4>
                                    <div className="engineers-phones">Водафон: +38 050 381 02 74</div>
                                    <div className="engineers-phones">Киевстар: +38 097 513 11 15</div>
                                </address>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 text-center no_left_padding">
                            <div className="engineers">
                                <h4>Берлад Владислав Андреевич</h4>
                                <span>инженер</span>
                                <address>
                                    <h4>Контактные телефоны:</h4>
                                    <div className="engineers-phones">Водафон: +38 050 445 27 85</div>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Paragraph title="мы предлагаем:" />
                        </div>
                    </div>
                    {servicesLayout}
                </div>
                <Footer />
            </div>
        );
    }
}
export default AssemblingService;