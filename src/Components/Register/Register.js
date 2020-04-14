import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carous from '../Contact/Carous';

const Register = () => {

    return (

        <div className="logIn">
            <div className="caro">
                <Carous />
            </div>
            <div className="bg-skew" >
                <Col xs="12" md={{ span: 12 }}>
                    <Row>
                        <div className="wrapper fadeInDown ">
                            <Col xs='12' md={9} id="formContent" className="textHorizontal">
                                <div className="createAcc">
                                    <h1 className="inactive underlineHover"> Create Account </h1>
                                </div>
                                <form >
                                    <Row>
                                        <Col md={6} className="log">
                                            <div className="forLabel">
                                                <label htmlFor="FirstName"> First Name</label>
                                                <input type="text" id="FirstName" className="fadeIn second" name="FirstName" placeholder="First Name" required />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="LastName"> Last Name</label>
                                                <input type="text" id="LastName" className="fadeIn second" name="LastName" placeholder="Last Name" required />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="Company"> Company</label>
                                                <input type="text" id="Company" className="fadeIn second" name="Company" placeholder="Company Name" />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="Email"> Email Address</label>
                                                <input type="email" id="Email" className="fadeIn second" name="Email" placeholder="Email Address" />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="Phone"> Phone</label>
                                                <input type="number" id="Phone" className="fadeIn second" name="Phone" placeholder="Phone number" />
                                            </div>
                                        </Col>
                                        <Col md={6} className="log">
                                            <div className="selector">
                                                <p>Number of Employees:</p>
                                                <select id="sector" className="select">
                                                    <option defaultValue="Employees">Employees...</option>
                                                    <option value="01">01</option>
                                                    <option value="02-10">02-10</option>
                                                    <option value="11-50">11-50</option>
                                                    <option value="50-200">50-200</option>
                                                    <option value="200+">200+</option>
                                                </select>
                                            </div>
                                          
                                            <div className="selector">
                                                <p>Sektor</p>
                                                <select id="sector2" className="select">
                                                    <option defaultValue="Sector.." >Sector...</option>
                                                    <option value="Human Resources">Human Resources</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Product">Product</option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="CEO">CEO</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="Username"> Username</label>
                                                <input type="text" id="Username" className="fadeIn second" name="Username" placeholder="Username" required />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="password"> Password</label>
                                                <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" required />
                                            </div>
                                            <div className="forLabel">
                                                <label htmlFor="password2s"> Confirm password</label>
                                                <input type="password" id="password2" className="fadeIn third" name="login2" placeholder="Confirm password" required />
                                            </div>
                                        </Col>
                                    </Row>
                                    <input type="submit" className="fadeIn fourth" value="Register" />
                                </form>
                                <div id="formFooter">
                                    <Link className="underlineHover" to="/">Need Help?</Link>
                                    <p>Already have an account? <Link className="underlineHover" to="/login">Log in</Link></p>
                                </div>

                            </Col>
                        </div>
                    </Row>
                </Col>
            </div>
            <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
        </div>
    )
}
export default Register;

