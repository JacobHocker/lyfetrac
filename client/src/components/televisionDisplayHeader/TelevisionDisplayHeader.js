import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import defaultMovie from '../../assets/images/defaultmovie.jpg';
import './TelevisionDisplayHeader.scss';

function TelevisionDisplayHeader({ tvShow }) {

    console.log(tvShow)
    return(
        <div className='tv-display-header-container'>
            <Container>
                <div className="tv-display-header" 
                    style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${tvShow.backdrop_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
                    }}>
                    <Row>
                        <Col>
                            <div className="tv-poster-display-container">
                                <img src={tvShow.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${tvShow.poster_path}`} alt={tvShow.name} className="tv-display-poster" />
                            </div>
                        </Col>
                        <Col>
                            <div className='tv-display-title-container'>
                                <div className="tv-display-title">
                                    <h1>{tvShow.name}</h1> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default TelevisionDisplayHeader;