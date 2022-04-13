import React from "react";
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

function MovieCard({ title, posterPath }) {
    return(
        <div className="card-container">
            <Card  className='movie-card'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='movie-card-poster'/>
                <Card.Body>
                    <Card.Title className='movie-card-title'>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MovieCard;