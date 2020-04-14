import React from 'react';
import { Row, Col, Image, Navbar } from 'react-bootstrap';
import Logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

function Navigon() {
    return (
        <Row className="footer d-xs-block" >
            <Col md={{span: 4, order: 1}} xs={{ order: 2 }}>
                <div className="footerMenu">
                    <Link to="/about/" >About Us</Link>
                    <Link to="/contact/" >Contact</Link>
                     <a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blank" rel="noopener noreferrer">Gallery</a>
                </div>
            </Col>
            <Col md={{span: 4, order: 2}} xs={{ order: 3 }}>
                <div className="imgBottom">
                <Navbar.Brand href="/"><Image src={`${Logo}`} fluid /></Navbar.Brand>
                </div>
            </Col>
            <Col md={{span:4, order: 3}}>
                <div className="links" xs={{ order: 1 }}>
                    <a href="https://www.linkedin.com/school/brainster-co/ " rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/BrainsterCo" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/brainster.co" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                </div>
            </Col>
        </Row>
    )
}
export default Navigon;

