import React, { useContext } from 'react';
import CardList from '../layout/movies/CardList';
import Search from '../layout/navbar/Search';
import TmdbContext from '../../context/tmdb/tmdbContext';

const Home = () => {
  const tmdbContext = useContext(TmdbContext);
  const { isSearching, data, searchData } = tmdbContext;

  const collection = isSearching ? searchData : data;

  return (
    <div>
      <Search />
      <CardList data={collection} />
    </div>
  );
};

export default Home;
