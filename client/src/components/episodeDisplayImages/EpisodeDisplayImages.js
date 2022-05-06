import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import './EpisodeDisplayImages.scss';

function EpisodeDisplayImages({ images }) {

    const episodeImageMap = images.map((image) => (
        <Carousel.Item key={image.file_path}>
            <img 
                className="episode-display-image-item"
                src={`https://image.tmdb.org/t/p/w185${image.file_path}`}
                alt='person'
            />
        </Carousel.Item>
    ))
    
    return(
        <div className="episode-display-image-container">
            <Container>
                <Row>
                    <Col>
                        <div className="episode-image-display-header">
                            <h1>Images</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Carousel>
                            {episodeImageMap}
                        </Carousel>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EpisodeDisplayImages;