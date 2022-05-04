import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import defaultMovie from '../../assets/images/defaultmovie.jpg';
import './SeasonsContainerSections.scss';


function SeasonsContainerSections({ seasons, id }) {
    
    
    const seasonSectionMap = seasons.map((season) => (
        <Row key={season.id} className='season-section-row'>
            <Col>
                <div className="season-section-poster-container">
                    <img src={season.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${season.poster_path}`} alt={season.name} className="season-section-poster" />
                    <div className="season-section-season-name">
                        <h1>{season.name}</h1>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="season-section-name-container">
                    <div className="season-section-season-aired">
                        <h4>{season.air_date}</h4>
                    </div>
                    <div className="season-section-season-episodes">
                        <h4>Episodes: {season.episode_count}</h4>
                    </div>
                </div>
            </Col>
            <Col>    
                <div className="season-section-season-link">
                    <Link to={`/tv/${id}/season/${season.season_number}`}>
                        <button className="season-section-link-button">See {season.name}</button>
                    </Link>
                </div>
            </Col>
        </Row>
    ))
    return(
        <div className="seasons-section-container">
            <Container>
                {seasonSectionMap}
            </Container>
        </div>
    );
}

export default SeasonsContainerSections;