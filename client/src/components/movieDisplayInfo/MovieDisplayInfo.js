import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './MovieDisplayInfo.scss';

function MovieDisplayInfo({ movie }) {
    console.log(movie)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const budget = formatter.format(movie.budget)
    const revenue = formatter.format(movie.revenue)

    return(
        <div className="movie-display-info-container">
            <Container>
                <Row>
                    <Col>
                        <div className="movie-display-info-title">
                            <h1><em>{movie.title}'s</em> Details</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-info-production-container">
                            <h3>Produced By:</h3>
                            <div className="display-production-companies-container">
                                {movie.production_companies.map((company) => (
                                    company.logo === null ? 
                                        <div className="display-production-company" key={company.id}>
                                            <h3>{company.name}</h3>
                                        </div>
                                        :
                                        <div className="display-production-company" key={company.id}>
                                            <img src={`https://image.tmdb.org/t/p/w185${company.logo_path}`} alt={company.name} className='display-company-logo' />
                                            <p>{company.name}</p>
                                        </div>
                                    
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-detail-container">
                            <ul className="movie-detail-list"> <em>Status & Finances</em>
                                <li>Budget: {budget}</li>
                                <li>Revenue: {revenue}</li>
                                <li>Status: {movie.status}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="movie-detail-container">
                            <ul className="movie-detail-list"><em>Spoken Languages:</em>
                                {movie.spoken_languages.map((lang) => (
                                    <li key={lang.id}>{lang.english_name}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MovieDisplayInfo;