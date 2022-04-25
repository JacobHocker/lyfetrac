import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MovieDisplayCollection.scss';

function MovieDisplayCollection({ collection }) {

    
    return(
        <div className='movie-display-collection-container'
        style={{ 
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${collection.backdrop_path})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.45)"
        }}>
            <Container>
                <Row>
                    <Col>
                        <div className='movie-display-collection-header'>
                            <h1>{collection.name}</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='movie-display-collection-poster-container'>
                            <img src={`https://image.tmdb.org/t/p/w300${collection.poster_path}`} alt={collection.name} className="movie-display-collection-poster" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieDisplayCollection;