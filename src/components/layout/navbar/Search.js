import React, { useState, useContext, useEffect } from 'react';
import TmdbContext from '../../../context/tmdb/tmdbContext';
import './Search.css';

const Search = () => {
  const tmdbContext = useContext(TmdbContext);
  const { getSearch, clearSearch } = tmdbContext;
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length <= 0) {
      clearSearch();
    } else {
      getSearch(text);
    }
    // eslint-disable-next-line
  }, [text]);

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='search'>
      <input
        type='text'
        name='text'
        placeholder='Search ...'
        value={text}
        onChange={onChange}
        autoComplete='off'
        autoFocus
      />
    </div>
  );
};

export default Search;
