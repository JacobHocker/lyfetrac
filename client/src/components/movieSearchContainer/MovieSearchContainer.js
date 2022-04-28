import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './MovieSearchContainer.scss';

function MovieSearchContainer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const apiKey = '4a571a843827a09096250c11596c470d';
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/movie-search/${apiKey}/${searchTerm}`)
        .then((r) => r.json())
        .then((searchResults) => setSearchResults(searchResults)
        );
    }
    
    console.log(searchResults)
    return(
        <div className="movie-search-container">
            <Container>
                <Row>
                    <Col>
                        <div className="move-search-header">
                            <h1>Search TV & Film</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="movie-search-form-container">
                            <form onSubmit={handleSubmit}>
                                <input 
                                    className="movie-search-bar"
                                    type='text'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type='submit'>Submit Search</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieSearchContainer;