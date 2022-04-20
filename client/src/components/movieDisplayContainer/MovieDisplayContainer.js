import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDisplayHeader from "../movieDisplayHeader/MovieDisplayHeader";
import './MovieDisplayContainer.scss';

function MovieDisplayContainer() {
    const [movie, setMovie] = useState({});

    const apiKey = '4a571a843827a09096250c11596c470d'
    const {id} = useParams()

    useEffect(() => {
        fetch(`/single/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((movie) => { setMovie(movie);
        });
    }, [id]);


    console.log(movie)
    return(
        <div className="movie-display-container">
            {movie.title && <MovieDisplayHeader movie={movie} />}
        </div>
    );
};

export default MovieDisplayContainer;