import React from "react";
import { Card } from "react-bootstrap";
import './MovieDisplayReviewCard.scss'

function MovieDisplayReviewCard({author, authorDetails, content}) {
    // const authorMap = authorDetails.map((detail) => (
    //     <div className="review-card-header">
    //         <img src={detail.avatar_path} alt={detail.username} className='review-author-image' />{detail.username}
    //     </div>
    // ))
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