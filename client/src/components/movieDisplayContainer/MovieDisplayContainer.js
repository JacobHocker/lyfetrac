import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDisplayContainer.scss';
import MovieDisplayHeader from "../movieDisplayHeader/MovieDisplayHeader";
import MovieDisplayCast from "../movieDisplayCast/MovieDisplayCast";
import MovieDisplayCrew from "../movieDisplayCrew/MovieDisplayCrew";
import MovieDisplayInfo from "../movieDisplayInfo/MovieDisplayInfo";
import MovieDisplayRecommend from "../movieDisplayRecommend/MovieDisplayRecommend";
import MovieDisplayCollection from "../movieDisplayCollection/MovieDisplayCollection";
import MovieDisplayReviewsContainer from "../movieDisplayReviewsContainer/MovieDisplayReviewsContainer";

function MovieDisplayContainer() {
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [movieReviews, setMovieReviews] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d';
    const {id} = useParams()
    const pageNumber = 1
    //Movie
    useEffect(() => {
        fetch(`/single/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((movie) => { setMovie(movie);
        });
    }, [id]);
    //Movie Credits
    useEffect(() => {
        fetch(`/credits/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((credits) => { setCredits(credits);
        });
    }, [id]);
    //Recommended Movies
    useEffect(() => {
        fetch(`/recommendations/${id}/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((recommendations) => { setRecommendations(recommendations);
        });
    }, [id]);
    //Movie Reviews
    useEffect(() => {
        fetch(`/reviews/${id}/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((movieReviews) => { setMovieReviews(movieReviews);
        });
    }, [id]);
    
    return(
        <div className="movie-display-container">
            {movie.title && <MovieDisplayHeader movie={movie} />}
            {credits.cast && <MovieDisplayCast cast={credits.cast} />}
            {movie.title && <MovieDisplayInfo movie={movie} />}
            {movie.belongs_to_collection === null ? <div></div> : movie.belongs_to_collection && <MovieDisplayCollection collection={movie.belongs_to_collection} />}
            {movieReviews.page && <MovieDisplayReviewsContainer reviews={movieReviews} />}
            {credits.crew && <MovieDisplayCrew crew={credits.crew} />}
            {recommendations.page && <MovieDisplayRecommend movies={recommendations}/>}
        </div>
    );
};

export default MovieDisplayContainer;