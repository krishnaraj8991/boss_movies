import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./moviesTypes";

const initialState = {
  loading: false,
  movieslabel: {},
  moviesList: [],
  error: "",
};

const reducer = (state = initialState, { type, payload }) => {
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

    default:
      return state;
  }
};
export default reducer;
