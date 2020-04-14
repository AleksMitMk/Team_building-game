import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import CardGame from '../CardGame/CardGame';

const Cards = (props) => {

    return (
        <Row className="cardsList ">
            <Col xs={{span: 10 , offset: 1}} md={{span:10 , offset:1}}>
                <Row className="justify-content-md-center">
                    {props.games.length > 0 ? props.games.map(element => (
                        <CardGame key={element.id} id={element.id} title={element.title} image={element.image} time={element.timeFrame} category={element.category} Games={props.games}/>
                    )) : <h1 className="notFound">Game not found</h1>}
                </Row>
            </Col>
        </Row>
    );
}


export default Cards;