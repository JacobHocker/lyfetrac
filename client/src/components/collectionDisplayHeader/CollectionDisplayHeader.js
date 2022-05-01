import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './CollectionDisplayHeader.scss';

function CollectionDisplayHeader({ collection }) {
    
    
    
    const numberOfMovies = collection.parts.length
    return(
        <div className="collection-display-header-container">
            <Container>
                <div className="collection-display-header" style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${collection.backdrop_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
                    }}>
                    <Row>
                        <Col>
                            <div className="collection-display-poster-container">
                                <img src={`https://image.tmdb.org/t/p/w185${collection.poster_path}`} alt={collection.name} className='collection-display-poster' />
                            </div>
                        </Col>
                        <Col>
                            <div className="collection-display-header-title-container">
                                <div className="collection-display-title">
                                    <h1>{collection.name}</h1>
                                </div>
                                <div className="collection-display-overview-container">
                                    <div className="collection-display-overview-content">
                                        <h3>Number of movies: {numberOfMovies}</h3>
                                    </div>
                                    <div className="collection-display-overview-title">
                                        <h3>Overview:</h3>
                                    </div>
                                    
                                    <div className="collection-display-overview-content">
                                        <p>{collection.overview}</p>
                                    </div>
                                </div>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default CollectionDisplayHeader;