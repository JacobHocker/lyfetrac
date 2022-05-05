import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './SeasonDisplayHeader.scss';
import defaultMovie from '../../assets/images/defaultmovie.jpg';

function SeasonDisplayHeader({ season }) {

    
    return(
        <div className="season-display-header-container">
            <Container>
                <Row>
                    <Col className="season-display-header-image">
                        <img src={season.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${season.poster_path}`} alt={season.name} className="tv-display-poster" />
                    </Col>
                    <Col>
                        <div className="season-display-title-container">
                            <div className="season-display-title">
                                <h1>{season.name}</h1>
                            </div>
                            <div className="season-display-aired">
                                <h4>First Aired: {season.air_date}</h4>
                            </div>
                            <div className="season-display-overview">
                                <p>{season.overview}</p>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SeasonDisplayHeader;