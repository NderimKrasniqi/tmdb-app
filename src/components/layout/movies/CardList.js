import React, { useContext, useEffect } from 'react';
import CardItem from './CardItem';
import TmdbContext from '../../../context/tmdb/tmdbContext';
import Spinner from '../movies/Spinner';
import './CardList.css';
const CardList = ({ data }) => {
  const tmdbContext = useContext(TmdbContext);
  const { fetchData, loading } = tmdbContext;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='cardlist'>
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
