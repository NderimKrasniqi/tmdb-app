import React, { useContext } from 'react';
import CardList from '../../components/layout/movies/CardList';
import TmdbContext from '../../context/tmdb/tmdbContext';

const MyFavorits = () => {
  const tmdbContext = useContext(TmdbContext);
  const { favorits } = tmdbContext;

  return <CardList data={favorits} />;
};

export default MyFavorits;
