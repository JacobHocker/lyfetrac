import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './TelevisionDisplayInfo.scss';

function TelevisionDisplayInfo() {
    return(
        <div className="television-display-info-container">
            <Container>
                <Row>
                    <Col>
                        <div className="tv-display-info-title">

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplayInfo;