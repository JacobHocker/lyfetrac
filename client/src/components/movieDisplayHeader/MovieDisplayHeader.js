import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './MovieDisplayHeader.scss';

function MovieDisplayHeader({ movie }) {
    
    return(
        <div className="movie-display-header-container">
            <Container>
                <div className="movie-display-header" 
                    style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.75)"
                    }}>
                    <Row>
                        <Col>
                            <div className="movie-display-title">
                                <h1>{movie.title}</h1> 
                                <h3>{movie.tagline}</h3>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-display-poster" />
                        </Col>
                    </Row>
                    
                </div>
            </Container>
        </div>
    );
};

export default MovieDisplayHeader;