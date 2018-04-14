import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Footer from '../../components/footer/footer.module';
import Paragraph from '../../components/titles/paragraph';
import CategoryTitle from '../../components/titles/categoryTitle';

import '../../Shared.css';
import '../technologies/Technologies.css';
import './library.css';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: [],
            docsRendered: '',
            menu: '',
            isPaneOpenLeft: false
        };
        this.createBooksTemplaite = this.createBooksTemplate.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.getBooks.call(this);
    }
    toggleNavBar() {
        this.setState({ isPaneOpenLeft: true });
    }
    getBooks() {
        fetch('/api/library')
            .then(response => response.json())
            .then(data => {
                this.createBooksTemplate(data);
                this.setState({ docs: data });
                console.log(data);
            })
            .catch(err => console.log(err));
    }
    createBooksTemplate(docs) {
        const menu = docs.map((doc) => {
            return (
                <Scrollchor to={doc.doc} animate={{ duration: 300 }}>
                    <div className="tech-nav-item">
                        {doc.name}
                    </div>
                </Scrollchor>
            );
        });
        const template = docs.map((doc) => {
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
        return (<div>
            <div className="library container">
                <div className="row">
                    <div className="col-xs-12">
                        <CategoryTitle title="Библиотека" />
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
            <Footer/>
        </div>
        );
    }
}

export default Library;