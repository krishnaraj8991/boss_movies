import { createStore, applyMiddleware } from "redux";
import movieReducer from "./movies/moviesReducer";
import ThunkMiddleware from "redux-thunk";

const store = createStore(movieReducer, applyMiddleware(ThunkMiddleware));

export default store;
