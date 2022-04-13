import React, { useState, useEffect } from "react";
import './MoviesContainer.scss';

function MoviesContainer() {
    const [movies, setMovies] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d'
    const pageNumber = 2
    useEffect(() => {
        fetch(`/top-rated/${apiKey}/${pageNumber}`)
        .then((r) => r.json())
        .then((movies) => { setMovies(movies);
        });
    }, []);

    const results = movies.results
    const display = results.map((movie) => (
        <div>
        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} className='movie-poster' />
        <p>{movie.title}</p>
        </div>
    ))
    
    
    return(
        <div className="movies-container">
            {display}
            
        </div>
    );
};

export default MoviesContainer;