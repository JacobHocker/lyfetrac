import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

function MovieCard({ title, posterPath, id }) {
    return(
        <div className="card-container">
            <Link to={`/movies/${id}`}>
                <Card  className='movie-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='movie-card-poster'/>
                    <Card.Body>
                        <Card.Title className='movie-card-title'>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default MovieCard;