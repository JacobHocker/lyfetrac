import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './MovieDisplay.scss';

function MovieDisplay() {
    const [movie, setMovie] = useState({});

    const apiKey = '4a571a843827a09096250c11596c470d'
    const {id} = useParams()

    useEffect(() => {
        fetch(`/single/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((movie) => { setMovie(movie);
        });
    }, [id]);

    const style = { 
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    console.log(movie)

    return(
        <div className="movie-display-container">
            <Container>
                <div className="movie-display-header" 
                    style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                        backgroundPosition: 'right -200px top',
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

export default MovieDisplay;