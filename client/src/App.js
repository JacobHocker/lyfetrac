import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<MoviesContainer />} />
      </Routes>
    </div>
  );
}

export default App;
