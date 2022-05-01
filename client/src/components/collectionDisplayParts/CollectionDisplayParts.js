import React from "react";
import './CollectionDisplayParts.scss'
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

function CollectionDisplayParts({ parts, name }){

    
    const partsMap = parts.map((part) => (
        <div className="part-cards-carousel-item" key={part.id}>
            <Link to={`/movies/${part.id}`}>
                <Card  className='part-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${part.poster_path}`}  className='part-card-img'/>
                    <Card.Body>
                        <Card.Title className='part-card-title'>{part.title}</Card.Title> 
                    </Card.Body>
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
        <div className="collection-display-parts-container">
            <Container className="part-carousel-col">
                <Row>
                    <Col>
                        <div className="collection-display-parts-title">
                            <h1>Movies in <em>{name}</em></h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {partsMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CollectionDisplayParts;