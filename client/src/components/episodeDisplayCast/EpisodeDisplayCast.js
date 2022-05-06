import React from "react";
import './EpisodeDisplayCast.scss';
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import defaultPicture from '../../assets/images/defaultprofile.png';

function EpisodeDisplayCast({ cast, guestStars }) {

    const castMap = cast.map((cast) => (
        <div className="cast-cards-carousel-item" key={cast.id}>
            <Link to={`/people/${cast.id}`}>
                <Card  className='cast-card'>
                    <Card.Img variant="top" src={cast.profile_path === null ? defaultPicture :`https://image.tmdb.org/t/p/w185${cast.profile_path}`}  className='cast-card-img'/>
                    <Card.Body>
                        <Card.Title className='cast-card-title'>{cast.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="cast-card-footer">{cast.character}</Card.Text>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    ))
    const guestStarMap = guestStars.map((cast) => (
        <div className="cast-cards-carousel-item" key={cast.id}>
            <Link to={`/people/${cast.id}`}>
                <Card  className='cast-card'>
                    <Card.Img variant="top" src={cast.profile_path === null ? defaultPicture :`https://image.tmdb.org/t/p/w185${cast.profile_path}`}  className='cast-card-img'/>
                    <Card.Body>
                        <Card.Title className='cast-card-title'>{cast.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="cast-card-footer">{cast.character}</Card.Text>
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
        <div className="episode-display-cast-container">
            <Container className="cast-carousel-col">
                <Row>
                    <Col>
                        <div className="episode-cast-display-title">
                            <h1>Top Billed Cast</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {castMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container className="cast-carousel-col">
                <Row>
                    <Col>
                        <div className="episode-cast-display-title">
                            <h1>Guest Starring</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {guestStarMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EpisodeDisplayCast;