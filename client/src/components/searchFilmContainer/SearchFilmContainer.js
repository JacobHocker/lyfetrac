import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SearchFilmCardDisplay from "../searchFilmCardDisplay/SearchFilmCardDisplay";
import './SearchFilmContainer.scss';

function SearchFilmContainer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [activeCategory, setActiveCategory] = useState("movie-search");
    
    const apiKey = '4a571a843827a09096250c11596c470d';
    const categories = [
        {id: 0, title: "Movies", value: "movie-search"},
        {id: 1, title: "People", value: "person-search"},
        {id: 2, title: "Television", value: "tv-search"},
        {id: 3, title: "Collections", value: "collection-search"},
    ]
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/${activeCategory}/${apiKey}/${searchTerm}`)
        .then((r) => r.json())
        .then((searchResults) => setSearchResults(searchResults)
        );
    }
    
    
    return(
        <div className="search-film-container">
            <Container>
                <Row>
                    <Col>
                        <div className="search-film-header">
                            <h1>Search In Film Industry</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="search-film-form-container">
                            <select 
                                className="search-film-select"
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                name='search-category'
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} className='search-film-select-option' value={cat.value}>
                                        {cat.title}
                                    </option>
                                ))}
                            </select>
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
            {searchResults?.results && <SearchFilmCardDisplay props={searchResults} activeCategory={activeCategory} />}
        </div>
    );
}

export default SearchFilmContainer;