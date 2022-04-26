import React from "react";
import { Card } from "react-bootstrap";
import './PeopleCard.scss';
import { Link } from 'react-router-dom';

function PeopleCard({ id, personPicture, knownFor, name }){
    return(
        <div className="people-card-container">
            <Link to={`/people/${id}`}>
                <Card className="people-card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${personPicture}`}  className='people-card-image'/>
                    <Card.Body>
                        <Card.Title className="people-card-name">{name}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="people-card-footer">
                        {knownFor}
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    );
}

export default PeopleCard;