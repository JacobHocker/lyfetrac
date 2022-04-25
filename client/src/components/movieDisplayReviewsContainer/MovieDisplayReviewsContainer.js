import React from "react";
import MovieDisplayReviewCard from "../movieDisplayReviewCard/MovieDisplayReviewCard";
import { Container, Row, Col } from "react-bootstrap";
import './MovieDisplayReviewsContainer.scss';

function MovieDisplayReviewsContainer({ reviews }) {
    console.log(reviews)

    const reviewMap = reviews.results.map((review) => (
        <MovieDisplayReviewCard
            key={review.id}
            author={review.author}
            authorDetails={review.author_details}
            content={review.content}
            />
    ))
    return(
        <div className="movie-display-reviews-container">
            <Container>
                <Row>
                    <Col>
                        <div className="movie-display-review-header">
                            <h1>Reviews</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="movie-display-reviews-section">
                <Row>
                    <Col>
                        <div className="movie-display-review-card-container">
                            {reviewMap}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieDisplayReviewsContainer;