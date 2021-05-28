import React, { useReducer } from 'react';
import axios from 'axios';
import TmdbContext from './tmdbContext';
import TmdbReducer from './tmdbReducer';
import {
  FETCH_DATA,
  SET_LOADING,
  SET_MODAL,
  CLEAR_MODAL,
  ADD_TO_FAVORITS,
  REMOVE_FROM_FAVORITS,
  SEARCH,
  CLEAR_SEARCH,
  GET_CURRENT,
} from '../types';
console.log(process.env);
const TmdbState = (props) => {
  const favoritsInLocal = localStorage.getItem('favorits');

  const initialState = {
    data: [],
    currentItem: {},
    favorits: favoritsInLocal ? JSON.parse(favoritsInLocal) : [],
    searchData: [],
    loading: false,
    isModal: false,
    isSearching: false,
  };

  const [state, dispatch] = useReducer(TmdbReducer, initialState);

  const getSearch = async (text) => {
    if (text !== '') {
      setLoading();
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${text}&page=1&include_adult=false`
      );

      const result = res.data.results.filter(
        (item) => item.media_type !== 'person' && item.poster_path !== null
      );

      dispatch({ type: SEARCH, payload: result });
    }
  };

  // Get movies
  const fetchData = async () => {
    setLoading();
    const firstPage = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}&page=1`
    );
    const secondPage = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}&page=2`
    );
    const filteredPageOne = firstPage.data.results.filter(
      (item) => item.media_type !== 'person'
    );
    const filteredPageTwo = secondPage.data.results.filter(
      (item) => item.media_type !== 'person'
    );
    const result = [...filteredPageOne, ...filteredPageTwo];

    dispatch({ type: FETCH_DATA, payload: result });
  };

  const getCurrentItem = async (id, media_type, isFavorit) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&append_to_response=media_type`
    );
    dispatch({
      type: GET_CURRENT,
      payload: { ...res.data, media_type, isFavorit },
    });
    setModal();
  };

  const addToFavorits = (item) => {
    dispatch({ type: ADD_TO_FAVORITS, payload: { ...item, isFavorit: true } });
  };
  const removeFromFavorits = (item) => {
    dispatch({
      type: REMOVE_FROM_FAVORITS,
      payload: { ...item, isFavorit: false },
    });
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Opens modal
  const setModal = () => dispatch({ type: SET_MODAL });
  // Removes modal
  const clearModal = () => dispatch({ type: CLEAR_MODAL });

  return (
    <TmdbContext.Provider
      value={{
        data: state.data,
        currentItem: state.currentItem,
        favorits: state.favorits,
        isModal: state.isModal,
        searchData: state.searchData,
        isSearching: state.isSearching,
        fetchData,
        getCurrentItem,
        setModal,
        clearModal,
        addToFavorits,
        removeFromFavorits,
        getSearch,
        clearSearch,
      }}
    >
      {props.children}
    </TmdbContext.Provider>
  );
};

export default TmdbState;
