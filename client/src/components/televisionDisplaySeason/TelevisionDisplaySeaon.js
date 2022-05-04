import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TelevisionDisplaySeason.scss';
import defaultMovie from '../../assets/images/defaultmovie.jpg';

function TelevisionDisplaySeason({ show }) {
    const seasons = show.seasons
    
    const seasonPosterMap = seasons.map((season) => (
        <Carousel.Item key={season.id}>
            <img 
                className="tv-season-display-poster"
                src={season.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w185${season.poster_path}`}
                alt={show.name}
            />
        </Carousel.Item>
    ))
    
    return(
        <div className="television-display-season-container">
            <Container style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${show.backdrop_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.95)"
                    }}>
                <Row>
                    <Col>
                        <div className="tv-season-poster-display-container">
                            <Carousel>
                                {seasonPosterMap}
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <div className="tv-display-season-link-container">
                            <div className="tv-display-season-link-header">
                                <h1>Seasons & Episodes</h1>
                                <p className="season-link-p">Browse through the seasons and episodes for {show.name}!</p>
                            </div>
                            <div className="tv-display-season-link">
                                <Link to={`/tv/${show.id}/seasons`}>
                                    <button className="season-link-button">Go To Seasons</button>
                                </Link> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplaySeason;