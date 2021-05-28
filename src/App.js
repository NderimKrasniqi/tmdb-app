import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TmdbContext from './context/tmdb/tmdbContext';
import Home from './components/pages/Home';
import Navbar from './components/layout/navbar/Navbar';
import Modal from './components/layout/movies/Modal';
import MyFavorits from './components/pages/MyFavorits';
import './App.css';

const App = () => {
  const tmdbContext = useContext(TmdbContext);
  const { currentItem, isModal, favorits } = tmdbContext;

  useEffect(() => {
    localStorage.setItem('favorits', JSON.stringify(favorits));
  }, [favorits]);

  return (
    <Router>
      <Navbar />
      <main className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/liked'>
            <MyFavorits />
          </Route>
        </Switch>
        {isModal && <Modal item={currentItem} />}
      </main>
    </Router>
  );
};

export default App;
