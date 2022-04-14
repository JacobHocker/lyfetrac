import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row, Col } from 'react-bootstrap';
import MovieCard from "../movieCard/MovieCard";
import './MoviesContainer.scss';

function MoviesContainer() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [activePage, setActivePage] = useState(1)
    const [activeCategory, setActiveCategory] = useState("top-rated")
    
    const categories = [
        {id: 0, value: "top-rated", title: "Top Rated"},
        {id: 1, value: "popular", title: "Popular"},
        {id: 2, value: "now-playing", title: "Now Playing"},
        {id: 3, value: "upcoming", title: "Upcoming"}
    ]
    const pages = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
        {id: 6, value: 6},
        {id: 7, value: 7},
        {id: 8, value: 8},
        {id: 9, value: 9},
        {id: 10, value: 10},
    ]
    const apiKey = '4a571a843827a09096250c11596c470d'
    const pageNumber = activePage

    
    

    useEffect(() => {
        fetch(`/${activeCategory}/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((topRatedMovies) => { setTopRatedMovies(topRatedMovies);
        });
    }, [pageNumber, activeCategory]);
    
    const results = topRatedMovies.results

    const pageListDisplay = pages.map((page) => (
        <li className={activePage === page.value ? "active-page" : "inactive-page"}
            key={page.id}
            onClick={() => setActivePage(page.value)}
            >
            {page.value}
            </li>
    ))
    
    
    return(
        <div className="movies-page-container">
            <Container>
                
                <Row>
                    <Col>
                        <div className="category-select-container">
                            
                            <select 
                            className="movie-category-select"
                            value={activeCategory}
                            name='category'
                            onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option 
                                    key={cat.id} 
                                    className='movie-category-option'
                                    value={cat.value}
                                    >
                                    {cat.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="page-select-container">
                            <h2>Pages:</h2>
                            <ul className="page-list">
                                {pageListDisplay}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <CardGroup>
                    {topRatedMovies.results && results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                        />
                    )) }
                </CardGroup>
            </Container>
            
            
        </div>
    );
};

export default MoviesContainer;