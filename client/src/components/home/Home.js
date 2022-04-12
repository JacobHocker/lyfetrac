import React, { useState, useEffect } from 'react';
import './Home.scss';

function Home(){
    const [movie, setMovie] = useState({});

    const apiKey = '4a571a843827a09096250c11596c470d'
    const movieId = 550
    useEffect(() => {
        fetch(`/single/${movieId}/${apiKey}`)
        .then((r) => r.json())
        .then((movie) => { setMovie(movie);
        });
    }, []);

    console.log(movie)
    return(
        <div className='home-container'>
            <h1>{movie.title}</h1>
            <img className='movie-poster' src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default Home;