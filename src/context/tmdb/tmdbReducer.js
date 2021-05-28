import {
  SET_LOADING,
  FETCH_DATA,
  SET_MODAL,
  CLEAR_MODAL,
  ADD_TO_FAVORITS,
  REMOVE_FROM_FAVORITS,
  SEARCH,
  CLEAR_SEARCH,
  GET_CURRENT,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITS:
      const favoritItem = action.payload;
      const existItem = state.favorits.find((m) => m.id === favoritItem.id);
      if (existItem) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favorits: [...state.favorits, favoritItem],
          currentItem: favoritItem,
        };
      }
    case REMOVE_FROM_FAVORITS:
      const removedFavorit = action.payload;
      const filterdFavorits = state.favorits.filter(
        (m) => m.id !== removedFavorit.id
      );
      return {
        ...state,
        favorits: [...filterdFavorits],
        currentItem: { ...removedFavorit },
      };

    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_CURRENT:
      const currentItem = action.payload;
      const found = state.favorits.find((m) => m.id === currentItem.id);

      if (found) {
        return {
          ...state,
          currentItem: { ...currentItem, isFavorit: true },
          loading: false,
        };
      } else {
        return {
          ...state,
          currentItem: currentItem,
          loading: false,
        };
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case CLEAR_MODAL:
      return {
        ...state,
        currentItem: {},
        isModal: false,
      };
    case SEARCH:
      return {
        ...state,
        searchData: action.payload,
        isSearching: true,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchData: [],
        isSearching: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
