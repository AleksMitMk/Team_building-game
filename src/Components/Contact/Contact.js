import React from 'react';
import Carous from './Carous';
import Inputs from './Inputs';

const Contact = () => {
    return (
        <div className="contact">
            <div className="bg-cardImg">
                <Carous />
            </div>
            <div className="bg-skew" id="detail">
                <div className="textHorizontal">
                    <Inputs />
                </div>
            </div>
            <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
        </div>
    )
}
export default Contact;