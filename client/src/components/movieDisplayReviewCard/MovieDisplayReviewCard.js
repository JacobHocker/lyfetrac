import React from "react";
import { Card } from "react-bootstrap";
import './MovieDisplayReviewCard.scss'

function MovieDisplayReviewCard({ authorDetails, content }) {
    
    return(
        <div className="display-review-card-container">
            <Card className="movie-review-card">
                <Card.Title>
                    <div className="movie-review-card-header">
                        <h2>Posted By: {authorDetails.username}</h2>
                    </div>
                </Card.Title>
                <Card.Body>
                    <p>{content}</p>
                </Card.Body>
                {authorDetails.rating === null ?
                <div></div>
                :
                <Card.Footer className="movie-review-card-footer">
                    <h2>Rating: {authorDetails.rating}</h2>
                </Card.Footer>}
            </Card>
            
        </div>
    );
}

export default MovieDisplayReviewCard;