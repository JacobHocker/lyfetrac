import React from "react";
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

function MovieCard({ title, posterPath }) {
    return(
        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MovieCard;