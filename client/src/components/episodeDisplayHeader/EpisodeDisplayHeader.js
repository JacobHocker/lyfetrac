import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './EpisodeDisplayHeader.scss';
import defaultMovie from '../../assets/images/defaultmovie.jpg';

function EpisodeDisplayHeader({ episode }) {

    const ratingDecimal = (episode.vote_average / 10) * 100
    const ratingPercentage = Math.round(ratingDecimal)
    const episodeRatings = () => {
        if(ratingPercentage <= 10) {
            return <p className="display-terrible-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 10 && ratingPercentage <= 30) {
            return <p className="display-poor-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 30 && ratingPercentage <= 60) {
            return <p className="display-fair-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 60 && ratingPercentage <= 90) {
            return <p className="display-good-rated">{ratingPercentage}%</p>
        } else {
            return <p className="display-great-rated">{ratingPercentage}%</p>
        }
    }
    
    return(
        <div className="episode-display-header-container">
            <Container>
                <Row style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${episode.still_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
                    }}>
                    <Col>
                        <div className="episode-display-header-image">
                            <img src={episode.still_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${episode.still_path}`} alt={episode.name} className="tv-display-poster" />
                        </div>
                    </Col>
                    <Col>
                        <div className="episode-display-title-container">
                            <div className="episode-display-title">
                                <h1>{episode.name}</h1>
                            </div>
                            <div className="episode-display-runtime">
                                <p>{episode.runtime} min</p>
                            </div>
                            <div className="episode-display-rating">
                                {episodeRatings()}
                            </div>
                            <div className="episode-display-overview">
                                <p>{episode.overview}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EpisodeDisplayHeader;