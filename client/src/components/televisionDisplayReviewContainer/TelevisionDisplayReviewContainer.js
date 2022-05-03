import React from "react";
import TelevisionDisplayReviewCard from "../televisionDisplayReviewCards/TelevisionDisplayReviewCard";
import './TelevisionDisplayReviewContainer.scss';
import { Container, Row, Col } from 'react-bootstrap';

function TelevisionDisplayReviewContainer({ reviews }) {

    const reviewMap = reviews.map((review) => (
        <TelevisionDisplayReviewCard
            key={review.id}
            author={review.author}
            authorDetails={review.author_details}
            content={review.content}
            />
    ))
    return(
        <div className="television-display-review-container">
            <Container>
                <Row>
                    <Col>
                        <div className="tv-display-review-header">
                            <h1>Reviews</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="tv-display-reviews-section">
                <Row>
                    <Col>
                        <div className="tv-display-review-card-container">
                            {reviewMap}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TelevisionDisplayReviewContainer;