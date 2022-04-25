import React from 'react';
import './MovieDisplayRecommend.scss'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

function MovieDisplayRecommend({ movies }) {
    

    const movieMap = movies.results.map((movie) => (
        <div className="recommend-cards-carousel-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                <Card  className='recommend-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}  className='recommend-card-img'/>
                    <Card.Body>
                        <Card.Title className='recommend-card-title'>{movie.title}</Card.Title> 
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
        <div className='movie-display-recommend-container'>
            <Container>
                <Row>
                    <Col>
                        <div className='display-recommend-header'>
                            <h1>Recommended Movies</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='movie-recommend-carousel-col'>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {movieMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieDisplayRecommend;