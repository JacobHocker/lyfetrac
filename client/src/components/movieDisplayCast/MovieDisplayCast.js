import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import './MovieDisplayCast.scss';

function MovieDisplayCast({ cast }) {
    
    const castMap = cast.map((cast) => (
            <Carousel.Item key={cast.id}>
                <Card  className='cast-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}  className='cast-card-img'/>
                    <Card.Body>
                        <Card.Title className='cast-card-title'>{cast.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="cast-card-footer">{cast.character}</Card.Text>
                    </Card.Footer>
                </Card>
            </Carousel.Item>
    ))
    return(
        <div className="movie-cast-display-container">
            <Container>
                <Row>
                    <Col>
                        <Carousel >
                            {castMap}
                        </Carousel>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default MovieDisplayCast;