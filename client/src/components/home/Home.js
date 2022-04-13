import React, { useState, useEffect } from 'react';
import largeLogo from '../../assets/images/ec-logo-transparent.png';
import './Home.scss';

function Home(){
    const [movie, setMovie] = useState({});

    const apiKey = '4a571a843827a09096250c11596c470d'
    const movieId = 398
    useEffect(() => {
        fetch(`/single/${movieId}/${apiKey}`)
        .then((r) => r.json())
        .then((movie) => { setMovie(movie);
        });
    }, []);

    console.log(movie)
    
    //         <h1>{movie.title}</h1>
    //         <img className='movie-poster' src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
    return(
        <div className='home-container'>
            <img src={largeLogo} alt='logo' className='large-logo' />
        </div>
    );
};

export default Home;