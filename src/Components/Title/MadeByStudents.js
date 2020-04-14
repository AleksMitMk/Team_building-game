import React from 'react';
import { Row, Col } from 'react-bootstrap';

function MadeByStudents() {
    return (
        <Row className="madeByStudents justify-content-md-center fadeInDown">
            <Col lg="8" >
                <div className="created"><p>Изработено од студенти на академијата за програмирање на <a href="https://www.brainster.io" rel="noopener noreferrer" target="_blank">Brainster</a></p></div>
            </Col>
        </Row>
    )
}
export default MadeByStudents;