import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';

const CardGame = (props) => {
    return (
        <Col md={4}>
            <Link key={props.id} to={`/gameDetail/${props.id}`} className="cardGame">

                <Card>
                    <Card.Img className="d-none d-md-block" variant="top" src={require(`../../Images/${props.id}.jpg`)} />
                    <Card.Body>
                        <div className="titleCard">
                            <div>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>Категорија: <span>{props.category}</span></Card.Text>
                            </div>
                            <div>
                                <Image id="img" src={props.image} roundedCircle />
                            </div>
                        </div>
                        <div className="timeFrame">
                            <i className="far fa-clock"></i>
                            <div>
                                <Card.Title>Времетраење</Card.Title>
                                <Card.Text>{props.time}</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Link >
        </Col>
    )
}

export default CardGame;