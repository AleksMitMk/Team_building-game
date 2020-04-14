import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import map from '../../Images/map.jpg';
import Team from './team';

const AboutUs = () => {

    return (
        <div className="about">
            <div className="bg-cardImg">
                <a href="https://www.google.mk/maps/place/Brainster/@41.9924609,21.4208212,17z/data=!4m12!1m6!3m5!1s0x13541449c116c037:0x88831c22d3d17fb2!2sBrainster!8m2!3d41.9924438!4d21.4193517!3m4!1s0x13541449c116c037:0x88831c22d3d17fb2!8m2!3d41.9924438!4d21.4193517?hl=en&authuser=0" rel="noopener noreferrer" target="_blank">
                    <Image src={map} fluid></Image>
                </a>
            </div>
            <div className="bg-skew" id="about">
                
                <div className="titleAbout">
                    <h1 >About Us</h1>
                </div>


                <div className="aboutText">
                    <Row>
                        <Col md={12}>
                            <div>
                                <h2>Play is built into our day</h2>
                                <p>We create smart experiences that make people want to jump up out of their seats, run outside and get playing.</p>
                                <hr /><br />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima harum, nostrum officiis qui numquam tempore, ipsam veritatis fugiat quos, praesentium nemo. Similique facere voluptatibus atque qui magni impedit incidunt.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="team">

                        <Col md={4}>
                            <div>
                                <h3>We are a team of dreamers and builders.</h3>
                                <p>Lorem ipsum dolor siecto, vitae laborum numquam maxime nesciunt maiores ea eum ipsa voluptatum? Minima ex similique libero velit alias architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora nobis eveniet quaerat provident dolorum? Vitae architecto fugit, unde, vel quas dolorum officia dolores blanditiis neque eveniet nobis sequi porro?</p>

                            </div>
                        </Col>
                        <Col md={4}>
                            <h3>What we do?</h3>
                            <p>Lorem ipsum dolor, sitrporis explicabo assumenda necessitatibus ipsum maiores quam pariatur fugiat quo et iam provident excepturi eveniet odio, nulla ipsa suscipit perspiciatis vel asperiores quos non voluptatibus iusto ad perferendis odit fugiat sit?</p>

                        </Col>
                        <Col md={4}>
                            <h3>Why we do it?</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aspernatur veniam provident excepturi eveniet odio, nulla ipsa suscipit perspiciatis vel asperiores quos non voluptatibus iusto ad perferendis odit fugiat sit?</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }} >
                            <h2 >Meet the  Executive team</h2>
                            <Row>
                                <Team name="Aleks Mitev" img={7} rol="Ceo and Co-Founder" about="Co-Founder and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Mirce Acev" img={6} rol="Digital Marketing" about="Digital Marketing and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Stole Popov" img={12} rol="HR Recruiter" about="HR Recruiter and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Albert Einstein" img={8} rol="Web Developer" about="Web Developer and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Mike Ashust" img={4} rol="Brand Expert" about="Brand Expert and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Mirce Acev" img={5} rol="Digital Marketing" about="Digital Marketing and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Stole Popov" img={13} rol="HR Recruiter" about="HR Recruiter and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />
                                <Team name="Albert Einstein" img={1} rol="Web Developer" about="Web Developer and Creative Director Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, labore veniam doloremque quidem placeat aut molestias veritatis, illo, sint praesentium cor" />                      </Row>
                        </Col>
                    </Row>
                </div>
            </div>
           
        </div>
    )
}
export default AboutUs;

