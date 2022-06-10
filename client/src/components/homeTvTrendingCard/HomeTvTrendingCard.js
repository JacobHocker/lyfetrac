import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './HomeTvTrendingCard.scss';

function HomeTvTrendingCard({id, title, posterPath}) {
    return(
        <div className="home-tv-trending-card-container">
            <Link to={`/tv/${id}`}>
                <Card  className='home-tv-trending-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='home-tv-trending-card-poster'/>
                    <Card.Body>
                        <Card.Title className='home-tv-trending-card-title'>{title}</Card.Title> 
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default HomeTvTrendingCard;