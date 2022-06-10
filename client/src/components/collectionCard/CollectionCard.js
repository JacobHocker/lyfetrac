import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './CollectionCard.scss';

function CollectionCard({ name, posterPath, id}) {

    
    
    return(
        <div className="card-container">
            <Link to={`/collection/${id}`}>
                <Card  className='collection-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${posterPath}`}  className='collection-card-poster'/>
                    <Card.Body>
                        <Card.Title className='collection-card-title'>{name}</Card.Title> 
                        
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default CollectionCard;