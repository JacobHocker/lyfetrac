import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './MovieCard.scss';

function MovieCard({ title, posterPath, id, rating }) {
    const movieTitles = () => {
        if(title.length <= 27) {

        }
    }

    const movieRatings = () => {
        if(rating <= 1.0) {
            return <Card.Footer className="terrible-rated-movie">{rating}</Card.Footer>
        } if (rating >= 1.0 && rating <= 3.0) {
            return <Card.Footer className="poor-rated-movie">{rating}</Card.Footer>
        } if (rating >= 3.0 && rating <= 6.0) {
            return <Card.Footer className="fair-rated-movie">{rating}</Card.Footer>
        } if (rating >= 6.0 && rating <= 9.0) {
            return <Card.Footer className="good-rated-movie">{rating}</Card.Footer>
        } else {
            return <Card.Footer className="great-rated-movie">{rating}</Card.Footer>
        }
    }
    
    return(
        <div className="card-container">
            <Link to={`/movies/${id}`}>
                <Card  className='movie-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='movie-card-poster'/>
                    <Card.Body>
                        <Card.Title className='movie-card-title'>{title}</Card.Title> 
                        
                    </Card.Body>
                    {movieRatings()}
                </Card>
            </Link>
        </div>
    );
};

export default MovieCard;