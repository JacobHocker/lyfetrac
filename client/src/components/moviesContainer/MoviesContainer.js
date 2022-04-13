import React, { useState, useEffect } from "react";
import { CardGroup } from 'react-bootstrap';
import MovieCard from "../movieCard/MovieCard";
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
    
    return(
        <div className="movies-container">
            <CardGroup>
                {movies.results && results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        />
                )) }
            </CardGroup>
            
        </div>
    );
};

export default MoviesContainer;