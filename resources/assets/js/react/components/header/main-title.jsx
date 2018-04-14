import React from 'react';
import path from 'path';
import {Link} from 'react-router-dom';

class MainTitle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isMobile:false
        }
    }
    componentWillMount(){
        if(window.innerWidth<=767){
          this.setState(()=>{
            return {isMobile:true};
          });
        }
      }
    render(){
        const titleText = "экотехнологии подготовки воды";
        const logo = {src:path.join(__dirname,'./imgs/logoBlue.png'),alt:"logo"};
        const contactPhones = [
            {title:"Тел./Факс:",phone:"+38 044 507 07 12"},
            {title:"Водафон:",phone:"+38 050 351 49 51"},
            {title:"Киевстар:",phone:"+38 068 849 61 68"},
        ];
        const contactPhonesLayout = contactPhones.map((item,index)=>
            <li key={index} className="phone-list-item">
                <div className="phone-list-item-title">{item.title}</div>
                <div className="phone-list-item-content">{item.phone}</div>
            </li>
        ); 
        return(
            <div className="container">
                    <div className="col-md-2 col-xs-12 col-sm-3">
                        <div className="logo">
                            <Link to='/'><img src={logo.src} alt={logo.alt}/></Link>
                        </div>
                    </div>
                    { !this.state.isMobile && 
                        (<div className="col-md-6 col-xs-12 col-sm-4 text-center">
                         <h2 className="header-title">{titleText}</h2>
                         </div>    
                        )
                    }
                    {!this.state.isMobile &&
                        (<div className="col-md-4 col-xs-12 col-sm-5">
                        <div className="phone-list-wrapper">
                            <ul className="phone-list">
                                {contactPhonesLayout}
                            </ul>
                        </div>      
                        </div>)
                    }
            </div>
        );
    }
}
export default MainTitle;
