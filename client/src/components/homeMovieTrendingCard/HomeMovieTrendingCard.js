import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './HomeMovieTrendingCard.scss';

function HomeMovieTrendingCard({ title, posterPath, id}) {

    
    
    return(
        <div className="home-movie-trending-card-container">
            <Link to={`/movies/${id}`}>
                <Card  className='home-movie-trending-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='home-movie-trending-card-poster'/>
                    <Card.Body>
                        <Card.Title className='home-movie-trending-card-title'>{title}</Card.Title> 
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default HomeMovieTrendingCard;