import React from "react";
import './TelevisionDisplayRecommendation.scss';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

function TelevisionDisplayRecommendation({ shows }) {

    const tvMap = shows.map((show) => (
        <div className="recommend-cards-carousel-item" key={show.id}>
            <Link to={`/tv/${show.id}`}>
                <Card  className='recommend-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${show.poster_path}`}  className='recommend-card-img'/>
                    <Card.Body>
                        <Card.Title className='recommend-card-title'>{show.name}</Card.Title> 
                    </Card.Body>
                </Card>
            </Link>
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
        <div className="television-display-recommendation-container">
            <Container>
                <Row>
                    <Col>
                        <div className='display-recommend-header'>
                            <h1>Recommended Shows</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='tv-recommend-carousel-col'>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {tvMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplayRecommendation;