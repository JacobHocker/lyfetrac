import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import './PeopleDisplayImage.scss';

function PeopleDisplayImage({ images }) {

    const peopleImageMap = images.map((image) => (
        <Carousel.Item key={image.file_path}>
            <img 
                className="person-display-image-item"
                src={`https://image.tmdb.org/t/p/w185${image.file_path}`}
                alt='person'
            />
        </Carousel.Item>
    ))
    
    return(
        <div className="people-display-image-container">
            <Container>
                <Row>
                    <Col>
                        <div className="people-image-display-header">
                            <h1>Images</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Carousel>
                            {peopleImageMap}
                        </Carousel>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PeopleDisplayImage;