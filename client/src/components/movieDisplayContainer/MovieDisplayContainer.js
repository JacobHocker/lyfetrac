import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDisplayContainer.scss';
import MovieDisplayHeader from "../movieDisplayHeader/MovieDisplayHeader";
import MovieDisplayCast from "../movieDisplayCast/MovieDisplayCast";
import MovieDisplayCrew from "../movieDisplayCrew/MovieDisplayCrew";
import MovieDisplayInfo from "../movieDisplayInfo/MovieDisplayInfo";

function MovieDisplayContainer() {
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState({});
    const [similarMovies, setSimilarMovies] = useState([]);
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
    //Similar Movies
    useEffect(() => {
        fetch(`/similar/${id}/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((similarMovies) => { setSimilarMovies(similarMovies);
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
            {credits.crew && <MovieDisplayCrew crew={credits.crew} />}
        </div>
    );
};

export default MovieDisplayContainer;