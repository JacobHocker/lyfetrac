import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row, Col, Pagination } from 'react-bootstrap';
import MovieCard from "../movieCard/MovieCard";
import './MoviesContainer.scss';

function MoviesContainer() {
    const [movies, setMovies] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("popular");
    const [pageSet, setPageSet] = useState("page-set-one");
    
    
    const categories = [
        {id: 0, value: "popular", title: "Popular"},
        {id: 1, value: "top-rated", title: "Top Rated"},
        {id: 2, value: "now-playing", title: "Now Playing"},
        {id: 3, value: "upcoming", title: "Upcoming"}
    ]
    const pagesOne = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
    ]
    const pagesTwo = [
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
        .then((movies) => { setMovies(movies);
        });
    }, [pageNumber, activeCategory]);
    
    const results = movies.results
    
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
                        <div className="pagination-container">
                            <Pagination >
                                <Pagination.Prev onClick={() => setPageSet('page-set-one')}/>
                                    {pageSet === 'page-set-one' ? 
                                    pagesOne.map((pone) => (
                                        <Pagination.Item 
                                        key={pone.id}
                                        active={activePage === pone.value}
                                        onClick={() => setActivePage(pone.value)}>
                                            {pone.value}
                                        </Pagination.Item>
                                        )) :
                                    pagesTwo.map((ptwo) => (
                                        <Pagination.Item 
                                        key={ptwo.id}
                                        active={activePage === ptwo.value}
                                        onClick={() => setActivePage(ptwo.value)}>
                                            {ptwo.value}
                                        </Pagination.Item>
                                        ))
                                    }
                                <Pagination.Next onClick={() => setPageSet('page-set-two')}/>
                            </Pagination>
                        </div>
                    </Col>
                </Row>
                <CardGroup>
                    {movies.results && results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                            id={movie.id}
                            rating={movie.vote_average}
                        />
                    )) }
                </CardGroup>
                <Row>
                    <Col>
                    <div className="pagination-container">
                            <Pagination >
                                <Pagination.Prev onClick={() => setPageSet('page-set-one')}/>
                                    {pageSet === 'page-set-one' ? 
                                    pagesOne.map((pone) => (
                                        <Pagination.Item 
                                        key={pone.id}
                                        active={activePage === pone.value}
                                        onClick={() => setActivePage(pone.value)}>
                                            {pone.value}
                                        </Pagination.Item>
                                        )) :
                                    pagesTwo.map((ptwo) => (
                                        <Pagination.Item 
                                        key={ptwo.id}
                                        active={activePage === ptwo.value}
                                        onClick={() => setActivePage(ptwo.value)}>
                                            {ptwo.value}
                                        </Pagination.Item>
                                        ))
                                    }
                                <Pagination.Next onClick={() => setPageSet('page-set-two')}/>
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoviesContainer;