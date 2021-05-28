import React, { useContext } from 'react';
import TmdbContext from '../../../context/tmdb/tmdbContext';
import './CardItem.css';

const CardItem = ({ item }) => {
  const tmdbContext = useContext(TmdbContext);
  const { getCurrentItem } = tmdbContext;

  const onClicked = () => {
    getCurrentItem(item.id, item.media_type, item.isFavorit);
  };
  return (
    <div className='card'>
      <img
        className='card__image'
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
            : `https://image.tmdb.org/t/p/w342/${item.backdrop_path}`
        }
        alt={item.titel}
        onClick={onClicked}
      ></img>
    </div>
  );
};

export default CardItem;
