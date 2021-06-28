import { act } from "@testing-library/react";
import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SORT_BY_RATING,
  SORT_BY_YEAR,
} from "./moviesTypes";

const initialState = {
  loading: false,
  movieslabel: {},
  moviesList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movieslabel: payload.movieslabel,
        moviesList: payload.moviesList,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: payload };
    case SORT_BY_RATING: {
      const next = state.moviesList;
      next.sort((a, b) => b.rating.average - a.rating.average);
      return { ...state, moviesList: [...next] };
    }
    case SORT_BY_YEAR: {
      const next = state.moviesList;
      next.sort((a, b) => Date.parse(a.premiered) - Date.parse(b.premiered));
      return { ...state, moviesList: [...next] };
    }
    default:
      return state;
  }
};
export default reducer;
