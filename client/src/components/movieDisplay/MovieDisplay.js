import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDisplay.scss';

function MovieDisplay() {
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
            <h1>{movie.title}</h1>
        </div>
    );
};

export default MovieDisplay;