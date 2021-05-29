import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  SORT_BY_YEAR,
  SORT_BY_RATING,
} from "./moviesTypes";
export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};
export const fetchMoviesSuccess = (data) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};
export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};
export const SortByYear = () => {
  return {
    type: SORT_BY_YEAR,
  };
};
export const SortByRating = () => {
  return {
    type: SORT_BY_RATING,
  };
};
export const fetchMovies = () => {
  return function (dispatch) {
    dispatch(fetchMoviesRequest());
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        const payload = {
          movieslabel: myJson.components[0],
          moviesList: myJson.components[1].items,
        };
        dispatch(fetchMoviesSuccess(payload));
      })
      .catch((err) => {
        //error
        dispatch(fetchMoviesFailure("Cant Fetch Data"));
      });
  };
};
