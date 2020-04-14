import React, { Component } from 'react';
import Title from '../Title/Title';
import FiltersBtn from '../FiltersBtn/FiltersBtn';
import { ButtonToolbar, Button } from 'react-bootstrap';
import MadeByStudents from '../Title/MadeByStudents';

class FirstSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            visible: true
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    setShow(state) {
        this.setState({
            show: state
        })
        
    }

    handleScroll() {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    }

    render() {

        return (
            <div className="firstSite">
                <MadeByStudents />
                <ButtonToolbar className="d-md-none d-xs-block hiddenBtn fadeInDown" >
                    <Button variant="warning" href="https://www.brainster.io/business" target="_blank">Обуки за компании</Button>
                    <Button variant="dark" href=" https://partners.brainster.co/ " target="_blank">Вработи наши студенти</Button>
                </ButtonToolbar>
                <Title />
                <div >
                    <div className="d-md-none d-xs-block hiddenBtn fadeInDown filterBtnMob" >
                        <Button className={this.state.visible ? "activeBtn" : "hiddenBtn"} variant="primary" onClick={() => this.setShow(true)}>
                            <i className="fas fa-sliders-h"></i> Filters
                        </Button>
                    </div>
                </div>

                <div className="bg-skew">
                    <div className="textHorizontal">
                        <FiltersBtn showBtn={this.state.show} />
                    </div>
                </div>
                <Title />
            </div>
        )

    }
}
export default FirstSite;

// position: fixed;
// z-index: 77777;
// top: 94%;
// width: 100%;
// height: 48px;
// background-color: #ffffff87;
// color: #431781;
// font-size: 23px;
// font-weight: 800;
// }