import React, { Component } from 'react';
import { Navbar, Button, Image, ButtonToolbar, Row, Col } from 'react-bootstrap';
import Logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

class Navigon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: false,
            navBackground: ''
        }
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY > 450 ? "blue" : '';
    
          this.setState({ navBackground: backgroundcolor });
        });
      }
    showSidebar() {
        this.setState({
            width: true
        })
    }

    closeSidebar() {
        this.setState({
            width: false
        })
    }

    render() {
        return (
            <Row className=' Navigon' id="home">
                <Col >
                    <Navbar variant="light" fixed="top" className={this.state.navBackground }>

                        <div className={this.state.width ? "navigation bodyOpacity" : "navigation"}>
                            <div onClick={() => this.showSidebar()} className="toggle-nav">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={this.state.width ? 'sidebar navWidth' : 'sidebar'}>
                                <Navbar.Brand  className="logoMenu"><Image src={`${Logo}`} fluid /></Navbar.Brand>
                                <h5 onClick={() => this.closeSidebar()}><i className="fas fa-times ">  Затвори</i></h5>
                                <Link onClick={() => this.closeSidebar()} to="/login">Најави се</Link><hr />
                                <Link onClick={() => this.closeSidebar()} to="/register" >Регистрирај се</Link><hr />
                                <Link onClick={() => this.closeSidebar()} to="/about" >За нас</Link><hr />
                                <a onClick={() => this.closeSidebar()} href="https://www.facebook.com/pg/brainster.co/photos/" rel="noopener noreferrer" target="_blank">Галерија</a><hr />
                                <Link onClick={() => this.closeSidebar()} to="/contact/" >Контакт</Link><hr />
                            </div>
                        </div>
                        <div className="menuText"><h5>Мени</h5></div>
                        <Navbar.Brand href="/" id="logoMiddle"><Image src={`${Logo}`} fluid /></Navbar.Brand>
                        <ButtonToolbar className="d-none d-md-block">
                            <Button variant="warning" href="https://www.brainster.io/business" target="_blank">Обуки за компании</Button>
                            <Button variant="dark" href=" https://partners.brainster.co/ " target="_blank">Вработи наши студенти</Button>
                        </ButtonToolbar>
                    </Navbar>
                </Col>
            </Row>
        )
    }
}
export default Navigon;

