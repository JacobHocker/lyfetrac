import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineUnorderedList, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import './MovieDisplayHeader.scss';

function MovieDisplayHeader({ movie }) {
    
    function timeConvert(num){
        let hours = Math.floor(num / 60)
        let minutes = num % 60
        return hours+"h"+minutes+"m"
    }
    const runtime = timeConvert(movie.runtime)
    
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
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.8)"
                    }}>
                    <Row>
                        <Col>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-display-poster" />
                        </Col>
                        <Col>
                            <div className="movie-display-title-container">
                                <div className="movie-display-title">
                                    <h1>{movie.title}</h1> 
                                </div>
                                <div className="movie-title-info-container">
                                    <div className="movie-display-release">
                                        <p>{movie.release_date}</p>
                                    </div>
                                    <div className="movie-display-genres">
                                        {movie.genres.map((genre) => (
                                            <p key={genre.id}>| {genre.name} |</p>
                                        ))}
                                    </div>
                                    <div className="movie-display-time">
                                        <p>{runtime}</p>
                                    </div>
                                </div>
                                <div className="movie-display-interact-container">
                                    <div className="movie-display-rating">
                                        <p>{movie.vote_average}/10</p>
                                    </div>
                                    <div className="movie-display-favorite">
                                        <AiOutlineStar />
                                    </div>
                                    <div className="movie-display-to-list">
                                        <AiOutlineUnorderedList />
                                    </div>
                                    <div className="movie-display-trailer">
                                        <BsFillPlayFill />
                                    </div>
                                </div>
                                <div className="movie-tagline-display">
                                    <h4><em>{movie.tagline}</em></h4>
                                </div>
                                <div className="movie-summary-container">
                                    <div className="movie-summary-header">
                                        <h3>Summary</h3>
                                    </div>
                                    <div className="movie-summary-body">
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
        </div>
    );
};

export default MovieDisplayHeader;