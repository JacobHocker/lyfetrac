import React from "react";
import './PeopleDisplayCrew.scss';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import defaultMovie from '../../assets/images/defaultmovie.jpg';

function PeopleDisplayCrew({ crew }) {
    
    console.log(crew)
    
    const personCrewMap = crew.map((c) => (
        <div className="person-crew-cards-carousel-item" key={c.id}>
            <Link to={`/movies/${c.id}`}>
                <Card  className='person-crew-card'>
                    <Card.Img variant="top" src={c.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w185${c.poster_path}`}  className='crew-card-img'/>
                    <Card.Body>
                        <Card.Title className='person-crew-card-title'>{c.title}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="person-crew-card-footer">{c.job}</Card.Text>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    ))
    const responsive = {
        xxLarge: {
            breakpoint: { max: 3000, min: 1401 },
            items: 5
        },
        xLarge: {
            breakpoint: { max: 1400, min: 1201 },
            items: 5
        },
        large: {
            breakpoint: { max: 1200, min: 993 },
            items: 4
        },
        medium: {
            breakpoint: { max: 992, min: 769 },
            items: 3
        },
        small: {
            breakpoint: { max: 768, min: 577 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        }
    };
    return(
        <div className="people-display-crew-container">
            <Container className="person-crew-carousel-col">
                <Row>
                    <Col>
                        <div className="person-crew-display-title">
                            <h1>Film & TV Crew</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {personCrewMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PeopleDisplayCrew;