import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TelevisionDisplaySeason.scss';

function TelevisionDisplaySeason({ show }) {

    return(
        <div className="television-display-season-container">
            <Container>
                <Row>
                    <Col>
                        <Link to={`/tv/${show.id}/seasons`}>
                            <button>Seasons</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplaySeason;