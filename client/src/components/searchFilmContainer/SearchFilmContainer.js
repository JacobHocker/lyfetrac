import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './SearchFilmContainer.scss';

function SearchFilmContainer() {
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
        <div className="search-film-container">
            <Container>
                <Row>
                    <Col>
                        <div className="search-film-header">
                            <h1>Search Film, Tv, & People</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="search-film-form-container">
                            <form onSubmit={handleSubmit}>
                                <input 
                                    className="search-film-bar"
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

export default SearchFilmContainer;