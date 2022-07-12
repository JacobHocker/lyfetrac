import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './HomePeopleTrendingCard.scss';
import defaultPicture from '../../assets/images/defaultprofile.png';

function HomePeopleTrendingCard({id, name, profilePath}) {
    return(
        <div className="home-people-trending-card-container">
            <Link to={`/people/${id}`}>
                <Card  className='home-people-trending-card'>
                    <Card.Img variant="top" src={profilePath === null ? defaultPicture : `https://image.tmdb.org/t/p/w185${profilePath}`}  className='home-movie-trending-card-poster'/>
                    <Card.Body>
                        <Card.Title className='home-people-trending-card-title'>{name}</Card.Title> 
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default HomePeopleTrendingCard;