import React from 'react';
import { Row, Col,Button, ButtonToolbar } from 'react-bootstrap';

function Title() {
    return (
        <div className="title fadeInDown">
            <Row >
                <Col xs="12" md={{ span: 6, offset: 3}}>
                    <div className="created">
                        <h1>Future-Proof your organization</h1>
                        <h6>Find out how to unlock progress in your business. Understand your current state, identify opportunity areas prepare to take charge of your organization's future.</h6>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="4"  className="assessmentBtn">
                    <ButtonToolbar>
                        <Button variant="warning" href="https://brainsterquiz.typeform.com/to/kC2I9E" target="_blank">Take the assessment</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        </div>
    )
}
export default Title; 