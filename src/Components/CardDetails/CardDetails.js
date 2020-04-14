import React, { Component } from 'react';
import { Row, Col, Card, Image, Button, ButtonToolbar } from 'react-bootstrap';
import Title from '../Title/Title';
import axios from 'axios';
import TextDetail from './TextDetail';

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneGame: {},
            allSteps: []
        }
    }
    componentDidMount() {
        axios('https://brainsterboxapi.herokuapp.com/games')
            .then(data => data.data)
            .then(data => this.setState({
                oneGame: data.find(element => element.id === this.props.match.params.gameid),
                allSteps: data.find(element => element.id === this.props.match.params.gameid).steps
            }))
    }

    render() {
        //  let filtered = this.state.oneGame.filter(element => element.id === 13)//parseInt(this.props.match.params.gameid))
        // console.log(filtered)

        return (
            <div className="cardDetails">

                    
                <div className="bg-cardImg"><Image src={`../../Images/${this.state.oneGame.id}.jpg`} ></Image></div>
                <div className="bg-skew" >

                    <div className="cardInfo textHorizontal">
                    <ButtonToolbar className="d-md-none d-xs-block hiddenBtn" >
                        <Button variant="warning" href="https://www.brainster.io/business" target="_blank">Обуки за компании</Button>
                        <Button variant="dark" href=" https://partners.brainster.co/ " target="_blank">Вработи наши студенти</Button>
                    </ButtonToolbar>
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} className=" textDetail">
                                <h1>{this.state.oneGame.title}</h1>
                                <Row className="d-xs-block dashBoard">
                                    <Col xs={12} md={3} className="timeFrame">
                                        <i className="far fa-clock"></i>
                                        <div>
                                            <Card.Title>Time Frame</Card.Title>
                                            <Card.Text>{this.state.oneGame.timeFrame}</Card.Text>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="timeFrame">
                                        <i className="fas fa-user-friends"></i>
                                        <div>
                                            <Card.Title>Group Size</Card.Title>
                                            <Card.Text>{this.state.oneGame.groupSize}</Card.Text>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="timeFrame">
                                        <i className="fas fa-university"></i>
                                        <div>
                                            <Card.Title>Facilitation Level</Card.Title>
                                            <Card.Text>{this.state.oneGame.level}</Card.Text>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="timeFrame">
                                        <i className="fas fa-paint-roller"></i>
                                        <div>
                                            <Card.Title>Materials</Card.Title>
                                            <Card.Text>{this.state.oneGame.materials}</Card.Text>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="description">
                                    <p>{this.state.oneGame.description}</p>
                                </div>

                                <TextDetail steps={this.state.allSteps} />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Title />
            </div>
        )
    }
}
export default CardDetails;