import React from 'react';

import Scrollchor from 'react-scrollchor';

    function ArrowUp(){
        return (
            <Scrollchor to="#top" animate={{duration:700}}>
                <div className="arrow-up">               
                        <i className="fa fa-3x fa-arrow-up" aria-hidden="true"></i>
                </div>
            </Scrollchor>
        );
    }

export default ArrowUp;