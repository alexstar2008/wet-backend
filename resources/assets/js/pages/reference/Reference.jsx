import React, { Component, Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Footer from '../../components/footer/footer.module';
import CategoryTitle from '../../components/titles/categoryTitle';

import '../../Shared.css';
import './Reference.css';

class Reference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: <div>Loading...</div>
        }
        this.getReference = this.getReference.bind(this);
        this.generateTable = this.generateTable.bind(this);

        this.getReference();
    }

    getReference() {
        fetch('/api/reference')
            .then(response => response.json())
            .then(data => this.generateTable(data))
            .catch(err => console.log(err));
    }

    generateTable(data) {
        console.log(data);
        const template = data.map((category,categoryIndex) => {
            return (
                <Fragment key={categoryIndex}>
                    <tr>
                        <td colSpan="3" className="references_section_header">
                            {category.name}
                        </td>
                    </tr>
                    {
                        category.enterprises.filter(enterprise => enterprise.equipment.length !== 0).map((enterprise, enterpriseIndex) => {
                            return (
                                <Fragment key={enterpriseIndex}>
                                    <tr className={"references_row" + (enterpriseIndex % 2 === 0 ? " references_row_colored" : "")}>
                                        <td rowSpan={enterprise.equipment.length}>{enterprise.name}</td>
                                        <td>{enterprise.equipment[0].mission}</td>
                                        <td className='space-test'>{enterprise.equipment[0].equipment}</td>
                                    </tr>
                                    {
                                        enterprise.equipment.slice(1).map((equipment) => {
                                            return (
                                                <tr className="references_row">
                                                    <td>{equipment.mission}</td>
                                                    <td className='space-test' >{equipment.equipment}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </Fragment>
                            );
                        })
                    }

                </Fragment>);
        });
        this.setState({ table: template });
    }

    render() {
        return (
            <div className="body-test">
                <div className="references container">
                    <div className="row">
                        <CategoryTitle title="референс" />
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
                                        {
                                            this.state.table
                                        }
                                    </tbody>
                                </table >
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
                <Footer />
            </div>
        );
    }
}

export default Reference;