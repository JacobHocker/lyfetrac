import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import MovieDisplayContainer from './components/movieDisplayContainer/MovieDisplayContainer';
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import MovieSearchContainer from './components/movieSearchContainer/MovieSearchContainer';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<MoviesContainer />} />
        <Route path='movies/:id' element={<MovieDisplayContainer />} />
        <Route path='movies/search' element={<MovieSearchContainer />} />
      </Routes>
    </div>
  );
}

export default App;
