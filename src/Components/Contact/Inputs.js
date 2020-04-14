import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Inputs = () => {
    return (
        <Row className="contAllOf">
            <Col md={9}>
                <div className="chat">
                    <div className="textTop fadeInDown">
                        <h1>LET'S CHAT</h1>
                        <h4>Fill this out so we can learn more about you and your needs.</h4>
                    </div>
                    <Row>
                        <Col xs={12} className="form fadeInDown">
                            <form method="" action="">
                                <div>
                                    <span>My Name is</span>
                                    <label>
                                        <input type="text" name="first_name" placeholder="Name Lastname" required />
                                    </label>
                                    <span>and I'm with</span>
                                </div>

                                <div>
                                    <label>
                                        <input type="text" name="company" placeholder="Company Name" required />
                                    </label>
                                    <span>. I am in need of a partner to assist me</span>
                                </div>

                                <div>
                                    <span>with</span>
                                    <label>
                                        <input type="text" name="goals" placeholder="My Goals in a Snapshot" required />
                                    </label>
                                    <span>. In our company we have </span>
                                </div>

                                <div>
                                    <label>
                                        <select id="cars" name="employees" >
                                            <option defaultValue="employees" >employees</option>
                                            <option value="one">One</option>
                                            <option value="02-10">02-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="200+">200+</option>
                                        </select>
                                    </label>
                                    <span>Employees who are very satisfied.</span>
                                </div>

                                <div>
                                    <span>I want you to know:</span>
                                    <label>
                                        <textarea type="text" name="someText" placeholder="some more sentences" required />
                                    </label>
                                    <span>about us. You can reach me at this</span>
                                </div>
                                <span>.</span>
                                <div>
                                    <label>
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </label>
                                    <span>to get the conversation started. Thanks!</span>
                                </div>
                                <div className="btnSend">
                                    <button type="submit">Send</button>
                                </div>

                            </form>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={3} className="info fadeInDown">
                <div>
                    <h3>Contact Us</h3>
                    <p>Have a question? You can find a host of brilliant articles in our knoledge base. If you can't find what you're looking for, we'd be happy to point you in the right direction. Please feel free to send us an email or even give us a call </p>
                </div>
                <div>
                    <h3>Corporate Office</h3>
                    <p>ul. Partizanski Odredi num.13</p>
                    <p>2100 Skopje Makedonija</p>
                    <p>+389 02 324 5432</p>
                    <p><a href="www.gmail.com">example@gmail.com</a></p>
                    <p><a href="www.tocka.com.mk">www.example.com.mk</a></p>
                </div>
            </Col>

        </Row>
    )
}
export default Inputs;