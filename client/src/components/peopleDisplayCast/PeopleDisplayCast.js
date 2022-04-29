import React from "react";
import './PeopleDisplayCast.scss';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import defaultMovie from '../../assets/images/defaultmovie.jpg';

function PeopleDisplayCast({ movies }) {

    
    const personMovieMap = movies.map((movie) => (
        <div className="person-movie-cards-carousel-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                <Card  className='person-movie-card'>
                    <Card.Img variant="top" src={movie.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w185${movie.poster_path}`}  className='cast-card-img'/>
                    <Card.Body>
                        <Card.Title className='person-movie-card-title'>{movie.title}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="person-movie-card-footer">{movie.character}</Card.Text>
                    </Card.Footer>
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
        <div className="people-display-movie-container">
            <Container className="person-movie-carousel-col">
                <Row>
                    <Col>
                        <div className="person-movie-display-title">
                            <h1>Film & TV Cast</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {personMovieMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PeopleDisplayCast;