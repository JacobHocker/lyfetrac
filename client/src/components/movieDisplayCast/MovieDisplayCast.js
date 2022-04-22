import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import './MovieDisplayCast.scss';
import defaultPicture from '../../assets/images/defaultprofile.png';

function MovieDisplayCast({ cast }) {
    
    
    const castMap = cast.map((cast) => (
            <div className="cast-cards-carousel-item" key={cast.id}>
                <Card  className='cast-card'>
                    <Card.Img variant="top" src={cast.profile_path === null ? defaultPicture :`https://image.tmdb.org/t/p/w185${cast.profile_path}`}  className='cast-card-img'/>
                    <Card.Body>
                        <Card.Title className='cast-card-title'>{cast.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="cast-card-footer">{cast.character}</Card.Text>
                    </Card.Footer>
                </Card>
            </div>
    ))
    const responsive = {
        xxLarge: {
            breakpoint: { max: 3000, min: 1401 },
            items: 5
        },
        xLarge: {
            breakpoint: { max: 1400, min: 1201 },
            items: 5
        },
        large: {
            breakpoint: { max: 1200, min: 993 },
            items: 4
        },
        medium: {
            breakpoint: { max: 992, min: 769 },
            items: 3
        },
        small: {
            breakpoint: { max: 768, min: 577 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        }
    };


    return(
        <div className="movie-cast-display-container">
            <Container>
                <Row>
                    <Col>
                        <div className="movie-cast-display-title">
                            <h2>Top Billed Cast</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="cast-carousel-col">
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {castMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MovieDisplayCast;