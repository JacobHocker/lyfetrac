import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination, CardGroup } from 'react-bootstrap';
import TelevisionCard from '../televisionCard/TelevisionCard';
import './TelevisionContainer.scss';

function TelevisionContainer() {
    const [tvShows, setTvShows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("tv-popular");
    const [pageSet, setPageSet] = useState("page-set-one");
    
    
    const categories = [
        {id: 0, value: "tv-popular", title: "Popular"},
        {id: 1, value: "tv-top-rated", title: "Top Rated"},
        {id: 2, value: "tv-ota", title: "On The Air"},
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
        .then((tvShows) => { setTvShows(tvShows);
        });
    }, [pageNumber, activeCategory]);
    
    
    const results = tvShows.results
    return(
        <div className='television-page-container'>
            <Container>
                <Row>
                    <Col>
                        <div className="category-select-container">
                            <select 
                            className="tv-category-select"
                            value={activeCategory}
                            name='category'
                            onChange={(e) => setActiveCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option 
                                    key={cat.id} 
                                    className='tv-category-option'
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
                    {tvShows.results && results.map((tv) => (
                        <TelevisionCard
                            key={tv.id}
                            title={tv.name}
                            posterPath={tv.poster_path}
                            id={tv.id}
                            rating={tv.vote_average}
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
}

export default TelevisionContainer;