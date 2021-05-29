import redux from "redux";
import thunkMiddleware from "redux-thunk";
const createStore = redux.createStore;
const applyMiddlerware = redux.applyMiddleware;
// import thunkMiddleware from 'redux-thunk';

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};
const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};
const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

// reducer

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: payload, error: "" };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, movies: [], error: payload };

    default:
      return state;
  }
};

const fetchMovies = () => {
  return function (dispatch) {
    dispatch(fetchMoviesRequest());
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setData(myJson);
      })
      .catch((err) => {
        //error
      });
  };
};

const store = createStore(reducer, applyMiddlerware(thunkMiddleware));
