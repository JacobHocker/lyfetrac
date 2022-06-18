import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import CollectionDisplayContainer from './components/collectionDisplayContainer/CollectionDisplayContainer';
import EpisodeDisplayContainer from './components/episodeDisplayContainer/EpisodeDisplayContainer';
import Home from './components/home/Home';
import MovieDisplayContainer from './components/movieDisplayContainer/MovieDisplayContainer';
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import NavBar from './components/nav/NavBar';
import PeopleContainer from './components/peopleContainer/PeopleContainer';
import PeopleDisplayContainer from './components/peopleDisplayContainer/PeopleDisplayContainer';
import SearchFilmContainer from './components/searchFilmContainer/SearchFilmContainer';
import SeasonsContainer from './components/seasonsContainer/SeasonsContainer';
import SeasonsDisplayContainer from './components/seasonsDisplayContainer/SeasonsDisplayContainer';
import TelevisionContainer from './components/televisionContainer/TelevisionContainer';
import TelevisionDisplayContainer from './components/televisionDisplayContainer/TelevisionDisplayContainer';
import UserLoginContainer from './components/userLoginContainer/UserLoginContainer';
import UserSignUpContainer from './components/userSignUpContainer/UserSignUpContainer';

function App() {
  const [user, setUser] = useState(null);

  //Auto-Login
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);
  console.log(user)
  return (
    <div className="App">
      <NavBar userStatus={user} user={user}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLoginContainer onLogin={setUser} />} />
        <Route path='/signup' element={<UserSignUpContainer onSignUp={setUser}/>} />
        <Route path='movies' element={<MoviesContainer />} />
        <Route path='movies/:id' element={<MovieDisplayContainer />} />
        <Route path='film/search' element={<SearchFilmContainer />} />
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
