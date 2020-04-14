import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Team = (props) => {
    return (
        <Col xs={12} md={3} className="teamText">
            <Card >
                <Card.Img variant="top" src={require(`../../Images/${props.img}.jpg`)} />
                <Card.Body>
                    <div className="teamCard">
                        <div>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text> <span>{props.rol}</span></Card.Text>
                            <div className="iconsTeam">
                                <a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
                                <a href="www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                <a href="www.gmail.com"><i className="fas fa-envelope"></i></a>
                                <a href="www.printeres.com"><i className="fab fa-pinterest-p"></i></a>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="teamFrame">
                        <div>
                            <Card.Text>{props.about}</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </Col>

    )
}

export default Team;