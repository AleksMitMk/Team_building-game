import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {

    return (
        <div className="logIn">
             
            <div className="bg-skew wrapper">
                <Col xs="12" md={{ span: 8 }} className="textHorizontal " id="formContent">
                    <Row>
                        <Col xs='12' md={12} >
                            <div className="createAcc ">
                                <h1 className="inactive underlineHover"> Sign In </h1>
                            </div>
                            <div className="fadeIn first">
                                <Image src="../../Images/12.jpg" id="icon" alt="User Icon" roundedCircle />
                            </div>
                            <form className="log">
                                <div className="forLabel">
                                    <label htmlFor="username"> Username</label>
                                    <input type="text" id="username" className="fadeIn second" name="login" placeholder="Username" />
                                </div>
                                <div className="forLabel">
                                    <label htmlFor="login"> Password</label>
                                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" />
                                </div>
                                <input type="submit" className="fadeIn fourth" value="Log In" />
                            </form>
                            <div id="formFooter">
                                <Link className="underlineHover" to="/">Forgot Password?</Link>
                                <p>Not a member? <Link className="underlineHover" to="/register">Sing up now</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
            <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
        </div>
    )
}
export default LogIn;
