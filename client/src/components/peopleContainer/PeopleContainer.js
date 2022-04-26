import React, { useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import PeopleCard from '../peopleCard/PeopleCard';
import './PeopleContainer.scss';

function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageSet, setPageSet] = useState("page-set-one");

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
    const results = people.results

    useEffect(() => {
        fetch(`/popular-people/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((people) => { setPeople(people);
        });
    }, [pageNumber]);
    
    return(
        <div className='people-section-container'>
            <Container>
                <Row>
                    <Col>
                        <div className='people-container-header'>
                            <h1>Popular People</h1>
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
                    {people.results && results.map((people) => (
                        <PeopleCard
                            key={people.id}
                            id={people.id}
                            personPicture={people.profile_path}
                            name={people.name}
                            knownFor={people.known_for_department}
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

export default PeopleContainer;