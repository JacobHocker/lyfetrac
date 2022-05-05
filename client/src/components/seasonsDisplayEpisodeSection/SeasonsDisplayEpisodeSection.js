import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import defaultMovie from '../../assets/images/defaultmovie.jpg';
import './SeasonsDisplayEpisodeSection.scss';

function SeasonsDisplayEpisodeSection({ episodes }) {

    
    const { tvId, seasonNumber } = useParams();
    
    const seasonEpisodeMap = episodes.map((episode) => (
        <Row key={episode.id} className='season-section-row'>
            <Col>
                <div className="season-section-poster-container">
                    <img src={episode.still_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${episode.still_path}`} alt={episode.name} className="episode-section-poster" />
                    <div className="season-section-season-name">
                        <h1>{episode.name}</h1>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="episode-section-name-container">
                    <div className="season-section-season-episodes">
                        <h4>Episode Number {episode.episode_number}</h4>
                    </div>
                </div>
            </Col>
            <Col>    
                <div className="episode-section-season-link">
                    <Link to={`/tv/${tvId}/season/${seasonNumber}/episode/${episode.episode_number}`}>
                        <button className="season-section-link-button">See Episode</button>
                    </Link>
                </div>
            </Col>
        </Row>
    ))
    return(
        <div className="seasons-section-container">
            <Container>
                {seasonEpisodeMap}
            </Container>
        </div>
    );
}

export default SeasonsDisplayEpisodeSection;