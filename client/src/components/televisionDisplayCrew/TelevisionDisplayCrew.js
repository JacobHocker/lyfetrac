import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './TelevisionDisplayCrew.scss';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import defaultPicture from '../../assets/images/defaultprofile.png';

function TelevisionDisplayCrew({ crew }){

    const crewMap = crew.map((crew) => (
        <div className="crew-cards-carousel-item" key={crew.id}>
            <Link to={`/people/${crew.id}`}>
                <Card  className='crew-card'>
                    <Card.Img variant="top" src={crew.profile_path === null ? defaultPicture :`https://image.tmdb.org/t/p/w185${crew.profile_path}`}  className='crew-card-img'/>
                    <Card.Body>
                        <Card.Title className='crew-card-title'>{crew.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="crew-card-footer">{crew.job}</Card.Text>
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
        <div className="television-display-crew-container">
            <Container className="crew-carousel-col">
                <Row>
                    <Col>
                        <div className="tv-crew-display-title">
                            <h1>Crew & Staff</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {crewMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplayCrew;