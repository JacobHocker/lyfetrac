import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import HomeMovieTrendingCard from "../homeMovieTrendingCard/HomeMovieTrendingCard";
import './HomeMovieTrending.scss';

function HomeMovieTrending() {
    const [activeTime, setActiveTime] = useState("day");
    const [movies, setMovies] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d';

    const timeFrames = [
        {id: 0, title: "Day", value: "day"},
        {id: 1, title: "Week", value: "week"}
    ]
    useEffect(() => {
        fetch(`/${activeTime === "day" ? "movie-trending-day" : "movie-trending-week"}/${apiKey}`)
        .then((r) => r.json())
        .then((movies) => setMovies(movies))
    }, [activeTime])

    const responsive = {
        xxLarge: {
            breakpoint: { max: 3000, min: 1401 },
            items: 5
        },
        xLarge: {
            breakpoint: { max: 1400, min: 1201 },
            items: 5
        },
        large: {
            breakpoint: { max: 1200, min: 993 },
            items: 4
        },
        medium: {
            breakpoint: { max: 992, min: 769 },
            items: 3
        },
        small: {
            breakpoint: { max: 768, min: 577 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        }
    };

    
    return(
        <div className="home-movie-trending-container">
            <Container>
                <Row>
                    <Col>
                        <div className="home-movie-trending-header">
                            <h1>Trending Movies</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="home-movie-trending-button-container">
                            {timeFrames.map((time) => (
                                <button 
                                key={time.id}
                                className={activeTime === time.value ? "active-button" : "inactive-button"}
                                onClick={() => setActiveTime(time.value)}
                                >{time.title}</button>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="home-trending-cards-container">
                        {movies?.results && <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {movies.results.map((movie) => (
                                <HomeMovieTrendingCard 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                posterPath={movie.poster_path}
                                />
                            ))}
                        </Carousel>}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomeMovieTrending;