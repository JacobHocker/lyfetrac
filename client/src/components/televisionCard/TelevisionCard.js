import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TelevisionCard.scss';

function TelevisionCard({ title, posterPath, id, rating }) {
    const tvRatings = () => {
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
            <Link to={`/tv/${id}`}>
                <Card  className='tv-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='tv-card-poster'/>
                    <Card.Body>
                        <Card.Title className='tv-card-title'>{title}</Card.Title> 
                        
                    </Card.Body>
                    {tvRatings()}
                </Card>
            </Link>
        </div>
    );
}

export default TelevisionCard;