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
  return async function (dispatch) {
    dispatch(fetchMoviesRequest());
    // await fetch("data.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //
    await fetch("http://api.tvmaze.com/shows", {
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson[0]);

        const payload = {
          movieslabel: {},
          moviesList: myJson,
        };
        dispatch(fetchMoviesSuccess(payload));
      })
      .catch((err) => {
        //error
        dispatch(fetchMoviesFailure("Cant Fetch Data"));
      });
  };
};
