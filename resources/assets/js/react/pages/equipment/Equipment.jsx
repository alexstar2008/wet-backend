import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';

import '../../Shared.css';
import '../technologies/Technologies.css';
import './equipment.css';

class Equipment extends Component {
    constructor(props) {
        super(props);
        const url = props.location.pathname;
        const categoryId = url.slice(url.lastIndexOf('#') - 1);
        const category = url.slice(1, url.lastIndexOf('#') - 2);
        this.getEquipment.call(this, categoryId);

        this.state = {
            category,
            docs: [],
            docsRendered: '',
            menu: '',
            isPaneOpenLeft: false
        };
        this.createDocumentTemplate = this.createDocumentTemplate.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
    }
    toggleNavBar() {
        this.setState({ isPaneOpenLeft: true });
    }
    getEquipment(categoryId) {
        fetch('/api/equipment/' + categoryId)
            .then(resp => resp.json())
            .then(data => {
                this.createDocumentTemplate(data);
            })
            .catch(err => console.log(err));
    }
    createDocumentTemplate(docs) {
        const menu = docs.map((doc,key) => {
            return (
                <Scrollchor to={doc.doc} key={key} animate={{ duration: 300 }}>
                    <div className="tech-nav-item">
                        {doc.name}
                    </div>
                </Scrollchor>
            );
        });
        const template = docs.map((doc) => {
            const isImg = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(doc.doc);
            if(isImg){
                return (
                    <div className="col-xs-12 col-md-10 col-md-push-1">
                         <div id={doc.doc}>
                            <h2 className="library-doc_title">{doc.name}</h2>
                            <img className="img-responsive" src={'/files/' + doc.doc} alt={doc.name}/>
                        </div>
                    </div>
                );                
            }
            return (
                <div id={doc.doc}>
                    <h2 className="library-doc_title">{doc.name}</h2>
                    <iframe src={'/files/' + doc.doc} width="800px" height="600px" >
                    </iframe>
                </div>
            );
        });
        this.setState({
            docsRendered: template,
            menu
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="library container">
                        <div className="row">
                            <div className="col-xs-12">
                                <CategoryTitle title={this.state.category} />
                            </div>
                        </div>
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
                                        {this.state.menu}
                                    </div>
                                </SlidingPane>
                                <div className="tech-nav hidden-xs">
                                    {this.state.menu}
                                </div>
                            </div>
                            <div className="col-sm-8 col-sm-offset-1">
                                {this.state.docsRendered || <img src="./imgs/Loading.svg"/> }
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.docsRendered && <Footer /> }
                
            </div >

        );
    }
}

export default withRouter(Equipment);
