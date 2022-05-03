import React from "react";
import './TelevisionDisplayReviewCard.scss';
import { Card } from 'react-bootstrap';

function TelevisionDisplayReviewCard({authorDetails, content}) {
    return(
        <div className="television-display-review-card-container">
            <Card className="tv-review-card">
                <Card.Title>
                    <div className="tv-review-card-header">
                        <h2>Posted By: {authorDetails.username}</h2>
                    </div>
                </Card.Title>
                <Card.Body>
                    <p>{content}</p>
                </Card.Body>
                {authorDetails.rating === null ?
                <div></div>
                :
                <Card.Footer className="tv-review-card-footer">
                    <h2>Rating: {authorDetails.rating}</h2>
                </Card.Footer>}
            </Card>
        </div>
    );
}

export default TelevisionDisplayReviewCard;
