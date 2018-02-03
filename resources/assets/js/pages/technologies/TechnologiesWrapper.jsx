import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import '../../Shared.css';
import './Technologies.css';

import Scrollchor from 'react-scrollchor';

class TechnologiesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { isPaneOpenLeft: false };
        this.toggleNavBar = this.toggleNavBar.bind(this);
    }

    toggleNavBar() {
        this.setState({ isPaneOpenLeft: true });
    }
    render() {
        return (
            <div className="container technologies">
                <div className="row">
                    <div className="col-sm-3">
                        {
                            !this.state.isPaneOpenLeft && (
                                <div className="visible-xs tech-arrow" onClick={this.toggleNavBar}>
                                    <i className="fa fa-2x fa-arrow-right" aria-hidden="true"></i>
                                </div>)
                        }
                        <SlidingPane
                            className='tech-sliding-pane'
                            isOpen={this.state.isPaneOpenLeft}
                            title=''
                            from='left'
                            width='200px'
                            onRequestClose={() => this.setState({ isPaneOpenLeft: false })}>
                            <div className="tech-nav">
                                <Scrollchor to="clarification" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Осветление воды
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="filtration" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Механическая фильтрация
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="ferum-remove" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Удаление железа / марганца<br/>
                                        на фильтрах WET- FE
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="sorbtion" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Сорбция - фильтры с активированным углем WET-AC                                
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="softening" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Умягчение<br/> (Na – катионирование)
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="decarbonization" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Декарбонизация<br/> (Н – катионирование)
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="reverse-osmos" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Обратный осмос
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="ultrafiltration" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Ультрафильтрация
                                    </div>
                                </Scrollchor>
                                <Scrollchor to="complex-water-equipment" animate={{ duration: 700 }}>
                                    <div className="tech-nav-item">
                                        Комплекс оборудования водоподготовки
                                    </div>
                                </Scrollchor>
                            </div>
                        </SlidingPane>
                        <div className="tech-nav hidden-xs">
                            <Scrollchor to="clarification" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Осветление воды
                                </div>
                            </Scrollchor>
                            <Scrollchor to="filtration" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Механическая фильтрация
                                </div>
                            </Scrollchor>
                            <Scrollchor to="ferum-remove" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Удаление железа / марганца<br/>
                                    на фильтрах WET- FE
                                </div>
                            </Scrollchor>
                            <Scrollchor to="sorbtion" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Сорбция - фильтры с активированным углем WET-AC                                
                                </div>
                            </Scrollchor>
                            <Scrollchor to="softening" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Умягчение<br/> (Na – катионирование)
                                </div>
                            </Scrollchor>
                            <Scrollchor to="decarbonization" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Декарбонизация<br/> (Н – катионирование)
                                </div>
                            </Scrollchor>
                            <Scrollchor to="reverse-osmos" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Обратный осмос
                                </div>
                            </Scrollchor>
                            <Scrollchor to="ultrafiltration" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Ультрафильтрация
                                </div>
                            </Scrollchor>
                            <Scrollchor to="complex-water-equipment" animate={{ duration: 700 }}>
                                <div className="tech-nav-item">
                                    Комплекс оборудования водоподготовки
                                </div>
                            </Scrollchor>
                        </div>
                    </div>
                    <div className="col-sm-8 col-sm-offset-1">
                        <div id="clarification" className="technologies-section">
                            <h2 className="tech_category_title">Осветление воды</h2>
                            <p className="paragraph-text blue">
                                Осветлители используются для очистки вод с высоким содержанием взвешенных и органических веществ.
                            </p>
                            <div className="unordered-list-header">
                                Применяются:
                            </div>
                            <ul className="unordered-list list-without-order">
                                <li>
                                    1) для очисткиповерхностных вод (реки, озера), как первый этап очистки 		воды в системах водоподготовки
                                </li>
                                <li>
                                    2) для подготовки воды питьевого и хозбытового назначения
                                </li>
                                <li>
                                    3) как альтернатива отстойникам, в т.ч. в системах очистки оборотной 			воды грязных циклов
                                </li>
                                <li>
                                    4) в бессточных схемах осветления воды
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ООО «Вотер Эко Тех» предлагает осветлители разработки ОВИ<sup>ТМ</sup>
                            </div>
                            <p className="paragraph-text blue">
                                Осветлитель ОВИТМ импульсного типа, секционный.
                                Материал – усиленный полипропилен.
                                Для удобства обслуживания внутренние конструкции выполнены легко-разборными.
                                Требуемая производительность набирается путем подбора
                                необходимого количества секций.
                            </p>
                            <div className="unordered-list-header">
                                Производительность и габариты 1 секции осветлителя:
                            </div>
                            <div className="table-wrapper">
                                <table className="tech-table">
                                    <thead>
                                        <tr>
                                            <th>Тип осветлителя</th>
                                            <th>Производительность секции, м<sup>3</sup>/час</th>
                                            <th>Высота, мм</th>
                                            <th>Ширина, мм</th>
                                            <th>Глубина, мм</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ОВИ-20-ПП-1</td>
                                            <td>20</td>
                                            <td>4 470</td>
                                            <td>1 900</td>
                                            <td>1 900</td>
                                        </tr>
                                        <tr>
                                            <td>ОВИ-30-ПП-1</td>
                                            <td>30</td>
                                            <td>4 810</td>
                                            <td>2 300</td>
                                            <td>2 300</td>
                                        </tr>
                                        <tr>
                                            <td>ОВИ-50-ПП-1</td>
                                            <td>50</td>
                                            <td>5 200</td>
                                            <td>2 900</td>
                                            <td>2 900</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    высокая скорость осаждения шлама, как следствие – компактные
                                    размеры по сравнению с традиционными осветлителями, и тем более в
                                    сравнении с отстойниками
                                </li>
                                <li>
                                    малый вес конструкции, что вместе с компактными размерами
                                    существенно снижают стоимость капитальных затрат при строительстве
                                    здания
                                </li>
                                <li>
                                    высокое качество очистки воды при минимальных эксплуатационных 			затратах
                                </li>
                            </ul>
                        </div>
                        <div id="filtration" className="technologies-section">
                            <h2 className="tech_category_title">Механическая фильтрация</h2>
                            <p className="paragraph-text blue">
                                Обеспечивает удаление из воды механических примесей (песок, ржавчина, окалина и пр.)
                            </p>
                            <div className="unordered-list-header">
                                    Применяются:
                            </div>
                            <ul className="unordered-list list-without-order">
                                <li>
                                    1) как первый этап очистки воды в системах водоподготовки 					(предочистка)   
                                </li>
                                <li>
                                2) для очистки воды оборотных циклов металлургических, химических предприятий, предприятий энергетики и пр.:<br/>
                                    - очистка воды оборотных циклов до и после градирен<br/>
                                    - очистка воды оборотных циклов перед теплообменниками<br/>
                                    - очистка воды оборотных циклов прокатных станов, охлаждения доменных печей, МНЛЗ и пр.<br/>
                                    - очистка воды после мокрой газоочистки
                                </li>
                                <li>
                                    для очистки воды на водозаборах
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ООО «Вотер Эко Тех» предлагает следующие механические фильтры:
                            </div>
                            <div className="unordered-list-header">
                                Картриджные фильтры различных производителей
                            </div>
                            <div className="unordered-list-header">
                                Сетчатые фильтры Yamit
                            </div>
                            <p className="paragraph-text blue">
                                Автоматические самопромывающиеся фильтры
                                с гидравлическим либо электрическим
                                приводом, в которых в качестве фильтрующего элемента
                                используется сетка с размером ячеек от 50 до 1000мкм
                                (выбирается в зависимости от степени загрязнения воды).
                            </p>
                            <div className="unordered-list-header">
                                Дисковые фильтры Azud
                            </div>
                            <p className="paragraph-text blue">
                                Автоматические самопромывающиеся фильтры, где
                                фильтрующим элементом является пакет специальных дисков,
                                изготовленных из прочных полимерных материалов, на обеих
                                поверхностях которых по диагонали нанесены канавки
                                определенной глубины и ширины, обеспечивающие высокую
                                тонкость и точность фильтрации. При сжатии двух соседних
                                дисков между ними образуется объемная сетчатая структура,
                                являющаяся рабочим фильтрующим элементом. Тонкость очистки
                                таких фильтров колеблется от 10 до 500 мкм в зависимости от
                                выбора дисков.
                                Благодаря модульной конструкции, может быть подобрана любая
                                производительность фильтрационной системы.
                            </p>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА ДИСКОВЫХ ФИЛЬТРОВ:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    высокая производительность и грязеёмкость
                                </li>
                                <li>
                                    простая и удобная промывка, которая осуществляется 
                                    «изнутри – наружу» фильтрующего элемента;
                                </li>
                                <li>
                                    для промывки используется очищенная вода, получаемая от других, работающих в штатном
                                    режиме фильтров;
                                </li>
                                <li>
                                    низкий расход воды при промывке. Из расчета на один фильтроэлемент, расход воды на
                                    собственные нужды составляет порядка 0,05 – 0,2 %.
                                    низкое энергопотребление: по 1 электромагнитному клапану на каждый фильтр
                                    (потребляемая мощность не более 10Вт) и управляющий контроллер (менее 100 Вт)
                                </li>
                                <li>
                                    высокое качество фильтрации в течение всего срока службы из-за устойчивости к
                                    заливанию
                                </li>
                                <li>
                                    высокая надежность: дисковые фильтры защищены специальным кожухом, который не 
                                    подвержен коррозии и не разрушается под действием высокого давления
                                </li>
                                <li>
                                    большое количество возможных вариантов установки и эксплуатации (соединение, степень
                                    фильтрации, производительность и т.д.)
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Напорная фильтрация WET-F
                            </div>
                            <p className="paragraph-text blue">
                                Серия механических фильтров WET-F – это напорные
                                механические фильтры, в которых в качестве фильтрующей
                                загрузки используется кварцевый песок и/или антрацит.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность 1 фильтра от 1 до 200 м<sup>3</sup>/ч
                            </p>
                            <p className="paragraph-text blue">
                                Корпуса фильтров:
                            </p>
                            <ul className="unordered-list">
                                <li>
                                    Композитные, D 200 – 1600 мм, P<sub>раб</sub> до 10 кг/см<sup>2</sup>
                                </li>
                                <li>
                                    Металлические с антикоррозионным покрытием, D 1800 – 5000 мм,
                                    P<sub>раб</sub> до 16 кг/см<sup>2</sup>
                                </li>
                            </ul>
                            <p className="paragraph-text blue">
                                <u>Виды исполнения по автоматизации :</u>
                            </p>
                            <ul className="unordered-list">
                                <li>
                                    ручное
                                </li>
                                <li>
                                    автоматическое, с использованием универсальных управляющих клапанов типа
                                    Clack, Fleck, RX и пр.
                                </li>
                                <li>
                                    автоматическое, с использованием системы управленияна базе промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    высокая грязеемкость
                                </li>
                                <li>
                                    надежность и долговечность
                                </li>
                                <li>
                                    простота управления и обслуживания
                                </li>
                                <li>
                                    возможность выбора любой конфигурации и производительности 
                                </li>
                            </ul>
                        </div>
                        <div id="ferum-remove" className="technologies-section">
                            <h2 className="tech_category_title">Удаление железа/марганца на фильтрах WET- FE</h2>
                            <p className="paragraph-text blue">
                                Технология удаления изводыжелеза/ марганца сводится к их
                                окислению (воздухом, гипохлоритом и пр.) и последующей
                                фильтрацией на напорных механических фильтрах.
                                Для ускорения процесса окисления в загрузку фильтра добавляют
                                различные материалы типа Birm, Aqua-Mandix. Для достижения
                                предельно низких концентраций железа и марганца используют
                                фильтрующие загрузки с регенерацией раствором марганцовки
                                – Greensand, MTM и др.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность 1 фильтра от 1 до 200 м<sup>3</sup>/ч
                            </p>
                            <div className="unordered-list-header">
                                Корпуса фильтров:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    Композитные, D 200 – 1600 мм, P<sub>раб</sub> до 10 кг/см<sup>2</sup>
                                </li>
                                <li>
                                    Металлические с антикоррозионным покрытием, D 1800 – 5000 мм, P<sub>раб</sub> до 16 кг/см<sup>2</sup>
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации :
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    ручное
                                </li>
                                <li>
                                    автоматическое, с использованием универсальных управляющих клапанов типа Clack, Fleck, RX и пр.
                                </li>
                                <li>
                                    автоматическое, с использованием системы управленияна базе промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Применяются:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    в любых системах водоподготовки для защиты
                                    последующих ступеней (ионного обмена, осмоса
                                    и т.д.) от негативного влияния железа
                                </li>
                                <li>
                                    для технологий, где требуется полное отсутствие железа
                                    в воде: в пищевой промышленности
                                    (приготовление пива, напитков и пр.),в
                                    текстильной промышленности и др.
                                </li>
                                <li>
                                    в подготовке воды для котла
                                </li>
                                <li>
                                    для подготовки воды питьевого и хозбытового
                                    назначения
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    возможность выбора конфигурации любой производительности,
                                    под любое содержание железа и марганца в исходной воде, под любые требования к очищенной воде
                                </li>
                                <li>
                                    высокая емкость
                                </li>
                                <li>
                                    надежность и долговечность
                                </li>
                                <li>
                                    простота управления и обслуживания
                                </li>
                            </ul>
                        </div>
                        <div id="sorbtion" className="technologies-section">
                            <h2 className="tech_category_title">Сорбция - фильтры с активированным углем WET-AC</h2>
                            <div className="unordered-list-header">
                                Фильтрацию на активированном угле применяют для:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    даления органики. Особенно эффективен для этого
                                    кокосовый активированный уголь, благодаря своей пористости
                                    обладающий большой поверхностью адсорбции.
                                </li>
                                <li>
                                    Удаления свободного хлора (обычно в связке с системой
                                    обеззараживания хлорсодержащими веществами).
                                </li>
                            </ul>
                            <p className="paragraph-text blue">
                                Производительность одного фильтра от 1 до 100 м<sup>3</sup>/ч
                            </p>
                            <div className="unordered-list-header">
                                Корпуса фильтров:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    Композитные, D 200 – 1600 мм, P<sub>раб</sub> до 10 кг/см<sup>2</sup>
                                    Т.к. композитные фильтры работают при температурах до 400С, то пропаривание угля невозможно. 
                                    И при наличии в воде большого количества органики придется часто менять уголь, что экономически неэффективно.
                                </li>
                                <li>
                                    Нержавеющие D 1800 – 2500 мм, Pраб до 16 кг/см<sup>2</sup>.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    автоматическое, с использованием универсальных управляющих клапанов типа Clack, Fleck, RX и пр.
                                </li>
                                <li>
                                    автоматическое, с использованием системы управленияна базе промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    гибкость конфигурации, любая производительность системы фильтрации
                                </li>
                                <li>
                                    высокая емкость и эффективность кокосового угля
                                </li>
                                <li>
                                    простота, надежность и долговечность оборудования
                                </li>
                            </ul>
                        </div>
                        <div id="softening" className="technologies-section">
                            <h2 className="tech_category_title">Умягчение (Na – катионирование)</h2>
                            <p className="paragraph-text blue">
                                Серия фильтров WET-NA предназначена для умягчения воды
                                – удаления ионов кальция и магния путем ионного обмена.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность одного фильтра от 1 до 250 м3/ч
                            </p>
                            <div className="unordered-list-header">
                                Корпуса фильтров:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    Композитные, D 200 – 1600 мм, P<sub>раб</sub> до 10 кг/см<sup>2</sup>
                                </li>
                                <li>
                                Металлические с антикоррозионным  покрытием, D 1800 – 3600 мм, P<sub>раб</sub> до 16 кг/см<sup>2</sup>
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации :
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    автоматическое, с использованием универсальных управляющих клапанов типа Clack, Fleck, RX и пр.
                                </li>
                                <li>
                                    автоматическое, с использованием системы управления на базе промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Применяются:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    в подготовке воды для котла (одно- и двухступенчатые схемы)
                                </li>
                                <li>
                                    в подготовке подпиточной воды для оборотных охладительных систем
                                </li>
                                <li>
                                    перед установками обратного осмоса для продления срока службы мембран
                                </li>
                                <li>
                                    для технологий, где требуется полное или частичное умягчение воды напитки, 
                                    продукты питания, окрашивание тканей и пр.)
                                </li>
                                <li>
                                    для экономии моющих средств (бутыломойки, системы CIP)
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    гибкость конфигурации, любая производительность системы умягчения
                                </li>
                                <li>
                                    возможность получения любой жесткости в диапазоне от исходной до 0
                                </li>
                                <li>
                                    высокая эффективность умягчения воды за счет использования катионитов большой емкости
                                </li>
                                <li>
                                    полная автоматизация наряду с простотой управления
                                </li>
                                <li>
                                    низкие эксплуатационные расходы
                                </li>
                                <li>
                                    надежность и долговечность оборудования
                                </li>
                            </ul>
                        </div>
                        <div id="decarbonization" className="technologies-section">
                            <h2 className="tech_category_title">Декарбонизация (Н – катионирование)</h2>
                            <p className="paragraph-text blue">
                                В данном случае декарбонизация – это комплексный
                                процесс удаления из воды щелочности (разложение на
                                углекислоту СО2 и воду), временной жесткости и затем
                                отдув углекислоты на дегазаторе.
                            </p>
                            <p className="paragraph-text blue">
                                Для этого мы предлагаем напорные фильтры серии WET-H,
                                засыпанные высококачественным слабокислотным
                                катионитом.
                            </p>
                            <p className="paragraph-text blue">
                                Т.к. регенерация осуществляется раствором соляной либо серной кислоты,
                                то мы используем устойчивые к кислоте композитные корпуса.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность одного фильтра от 1 до 50 м<sup>3</sup>/ч
                            </p>
                            <div className="unordered-list-header">
                                Корпуса фильтров:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    Композитные, D 200 – 1600 мм, P<sub>раб</sub> до 10 кг/см<sup>2</sup>
                                </li>
                            </ul>
                            <p className="paragraph-text blue">
                                Дегазатор – полипропилен, кольца Рашига – полипропилен / керамика.
                            </p>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    автоматическое, с использованием универсальных управляющих клапанов типа Siata
                                </li>
                                <li>
                                    автоматическое, с использованием системы управленияна базе
                                    промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Применяются:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    в процессах, где требуется удаление щелочности и частичное
                                    умягчение воды:
                                </li>
                                <li>
                                    пивоварение;
                                </li>
                                <li>
                                    производство алкогольных, с/а и б/а напитков;
                                </li>
                                <li>
                                    в подготовке воды для котла
                                </li>
                                <li>
                                    для подготовки питьевой воды
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    гибкость конфигурации, любая производительность системы декарбонизации
                                </li>
                                <li>
                                    высокая эффективность за счет использования катионитов большой емкости
                                </li>
                                <li>
                                    полная автоматизация наряду с простотой управления
                                </li>
                                <li>
                                    низкие эксплуатационные расходы
                                </li>
                                <li>
                                    надежностьи долговечность оборудования
                                </li>
                                <li>
                                    удобство,простота и безопасность обслуживания оборудования, работающего с кислотой
                                </li>
                            </ul>
                        </div>
                        <div id="reverse-osmos" className="technologies-section">
                            <h2 className="tech_category_title">Обратный осмос</h2>
                            <p className="paragraph-text blue">
                                Системы WET-RO позволяют получить обессоленную
                                воду с помощью мембранной технологии обратного. осмоса.
                            </p>
                            <p className="paragraph-text blue">
                                В качестве фильтрующих элементов используются
                                мембраны ведущих мировых производителей.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность одного модуля от 1 до 100 м3/ч
                            </p>
                            <div className="unordered-list-header">
                                Корпуса:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                 Композитные, D 8" (end/sideport), 4", 2.5";<br /> Число мембран: 1-8; P<sub>раб</sub> 16-80 атм
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    автоматическое, с использованием системы управления на базе промышленного контроллера Siemens либо аналогов.
                                </li>
                            </ul>
                            <p className="paragraph-text blue">
                                <b>Применяются:</b> в самых разных схемах водоподготовки для различных отраслей и технологий, 
                                где требуется частичное или полное обессоливание воды, в т.ч.:
                            </p>
                            <ul className="unordered-list">
                                <li>
                                    в пищевой промышленности для приготовления напитков и продуктов питания;
                                </li>
                                <li>
                                    в энергетике/ промышленной энергетике/ котельных для подготовки котловой воды;
                                </li>
                                <li>
                                    в металлургии, машиностроении, химической промышленности, 
                                    нефтегазпереработке и пр. – для подпитки оборотных охладительных циклов;
                                </li>
                                <li>
                                    для тепличных хозяйств, для медицины, для производства электроники и пр.
                                </li>
                                <li>
                                    для подготовки питьевой воды
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    гибкость конфигурации, любая производительность, 
                                    многоступенчатые схемы, возможность использования концентрата (бессточные схемы);
                                </li>
                                <li>
                                    возможность комплектации станцией промывки;
                                </li>
                                <li>
                                    высокая эффективность за счет использования мембран ведущих производителей
                                </li>
                                <li>
                                    полная автоматизация наряду с простотой управления
                                </li>
                                <li>
                                    низкие эксплуатационные расходы
                                </li>
                                <li>
                                    надежность и долговечность оборудования
                                </li>
                                <li>
                                    удобство и простота обслуживания
                                </li>
                            </ul>
                        </div>
                        <div id="ultrafiltration" className="technologies-section">
                            <h2 className="tech_category_title">Ультрафильтрация</h2>
                            <p className="paragraph-text blue">
                                Системы <strong>WET-UF</strong> предназначены для очистки воды от
                                тонкодисперсных и коллоидных примесей, одноклеточных
                                микроорганизмов, вирусов и бактерий, органических
                                соединений. Ультрафильтрация – мембранный процесс,
                                занимающий по своим селективным характеристикам
                                промежуточное положение между нанофильтрацией и
                                микрофильтрацией.
                            </p>
                            <p className="paragraph-text blue">
                                В качестве фильтрующих элементов используются мембраны ведущих мировых
                                производителей. (Inge, Torаy и др.) В промышленных и муниципальных установках
                                используются мембраны с размером пор около 0,02 микрон.
                            </p>
                            <p className="paragraph-text blue">
                                Производительность одного модуля от 1 до 100 м3/ч
                            </p>
                            <div className="unordered-list-header">
                                Виды исполнения по автоматизации:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    автоматическое, с использованием системы управления на базе
                                </li>
                            </ul>
                            <p className="paragraph-text blue">
                                <b>Применяются:</b> Высокий уровень очистки, достигаемый с помощью ультрафильтрации,
                                позволяет рассматривать этот метод как альтернативу традиционным процессам
                                осветления, и фильтрации.
                            </p>
                            <ul className="unordered-list">
                                <li>
                                    в пищевой промышленности для приготовления напитков и продуктов питания;
                                </li>
                                <li>
                                    в энергетике/ промышленной энергетике/ котельных в качестве предочистки
                                    перед оборудованием обессоливания;
                                </li>
                                <li>
                                    в качестве предочистки перед системами обратного осмоса, где предъявляются
                                    высокие требования к воде, поступающей на мембранные элементы обратного
                                    осмоса;
                                </li>
                                <li>
                                    для подготовки питьевой воды.
                                </li>
                            </ul>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    гибкость конфигурации, любая производительность, многоступенчатые схемы,
                                </li>
                                <li>
                                    высокая эффективность за счет использования мембран ведущих производителей
                                </li>
                                <li>
                                    полная автоматизация наряду с простотой управления
                                </li>
                                <li>
                                    низкие эксплуатационные расходы
                                </li>
                                <li>
                                    надежность и долговечность оборудования
                                </li>
                                <li>
                                    удобство и простота обслуживания
                                </li>
                            </ul>
                        </div>
                        <div id="complex-water-equipment" className="technologies-section">
                            <h2 className="tech_category_title">Комплекс оборудования водоподготовки</h2>
                            <p className="paragraph-text blue">
                                Исходя из вашего технического задания, анализа воды, требований к очищенной воде,
                                наличия места и прочих условий, наши инженера предложат оптимальную схему
                                водоподготовки на базе технологий WET.
                            </p>
                            <p className="paragraph-text blue">
                                В случае, если вы не знаете какое качество воды
                                необходимо для решения вашей задачи, мы можем дать
                                рекомендации, опираясь на свой 14-летний опыт работы
                                в сфере водоподготовки.
                            </p>
                            <p className="paragraph-text blue">
                                Мы можем разработать комплекс водоподготовки с
                                получением воды различного качества для
                                одновременного решения сразу нескольких ваших задач,
                                тем самым сокращая капитальные затраты и экономя
                                площадь.
                            </p>
                            <div className="unordered-list-header">
                                ПРЕИМУЩЕСТВА РАБОТЫ С ООО «ВОТЕР ЭКО ТЕХ»:
                            </div>
                            <ul className="unordered-list">
                                <li>
                                    высокое качество оборудования и выполняемых работ;
                                </li>
                                <li>
                                    возможность построения любой схемы водоподготовки «под клиента»
                                </li>
                                <li>
                                    широкий выбор материалов, вариантов исполнения и автоматизации оборудования
                                </li>
                                <li>
                                    наличие собственной службы монтажа и сервиса с многолетним опытом работы
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechnologiesWrapper;