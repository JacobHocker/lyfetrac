import React from 'react';
import { Routes, Route} from 'react-router-dom';
import CollectionDisplayContainer from './components/collectionDisplayContainer/CollectionDisplayContainer';
import EpisodeDisplayContainer from './components/episodeDisplayContainer/EpisodeDisplayContainer';
import Home from './components/home/Home';
import MovieDisplayContainer from './components/movieDisplayContainer/MovieDisplayContainer';
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import MovieSearchContainer from './components/movieSearchContainer/MovieSearchContainer';
import NavBar from './components/nav/NavBar';
import PeopleContainer from './components/peopleContainer/PeopleContainer';
import PeopleDisplayContainer from './components/peopleDisplayContainer/PeopleDisplayContainer';
import SeasonsContainer from './components/seasonsContainer/SeasonsContainer';
import SeasonsDisplayContainer from './components/seasonsDisplayContainer/SeasonsDisplayContainer';
import TelevisionContainer from './components/televisionContainer/TelevisionContainer';
import TelevisionDisplayContainer from './components/televisionDisplayContainer/TelevisionDisplayContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<MoviesContainer />} />
        <Route path='movies/:id' element={<MovieDisplayContainer />} />
        <Route path='movies/search' element={<MovieSearchContainer />} />
        <Route path='/people' element={<PeopleContainer />} />
        <Route path='/people/:id' element={<PeopleDisplayContainer />} />
        <Route path='/collection/:id' element={<CollectionDisplayContainer />} />
        <Route path='/tv' element={<TelevisionContainer />} />
        <Route path='/tv/:id' element={<TelevisionDisplayContainer />} />
        <Route path='/tv/:id/seasons' element={<SeasonsContainer />} />
        <Route path='/tv/:tvId/season/:seasonNumber' element={<SeasonsDisplayContainer />} />
        <Route path='/tv/:tvId/season/:seasonNumber/episode/:episodeNumber' element={<EpisodeDisplayContainer />} />
      </Routes>
    </div>
  );
}

export default App;
