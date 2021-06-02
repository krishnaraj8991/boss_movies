import {
  fetchMovies,
  fetchMoviesSuccess,
  SortByRating,
  SortByYear,
} from "./movies/moviesActions";
import reducer from "./movies/moviesReducer";
import store from "./store";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
describe("Redux Store", () => {
  describe("Reducer tests", () => {
    it("Reducer should return basic object", () => {
      const expectedState = { key1: "key1", key2: "key2" };
      const receivedState = reducer(expectedState, { type: undefined });
      expect(expectedState).toBe(receivedState);
    });
    it("Reducer should return initial object", () => {
      const receivedState = reducer(undefined, { type: undefined });
      expect(receivedState).toBeInstanceOf(Object);
    });
  });
  describe("Store Tests", () => {
    describe("Store Actions ", () => {
      it("Store should sort movies according to rating", async () => {
        const moviesList = [
          { id: 3, rank: 3, releaseDate: 1990 },
          { id: 1, rank: 1, releaseDate: 1999 },
          { id: 2, rank: 2, releaseDate: 1995 },
        ];
        store.dispatch(
          fetchMoviesSuccess({ moviesList: moviesList, movieslabel: {} })
        );
        store.dispatch(SortByRating());
        moviesList.sort((a, b) => a.rank - b.rank);
        const receivedState = store.getState();
        expect(receivedState.moviesList).toStrictEqual(moviesList);
      });
      it("Store should sort movies according to year", async () => {
        const moviesList = [
          { id: 3, rank: 3, releaseDate: 1990 },
          { id: 1, rank: 1, releaseDate: 1999 },
          { id: 2, rank: 2, releaseDate: 1995 },
        ];
        store.dispatch(
          fetchMoviesSuccess({ moviesList: moviesList, movieslabel: {} })
        );
        store.dispatch(SortByYear());
        moviesList.sort((a, b) => a.releaseDate - b.releaseDate);
        const receivedState = store.getState();
        expect(receivedState.moviesList).toStrictEqual(moviesList);
      });
    });

    describe("API Fetch test", () => {
      beforeEach(() => {
        fetch.resetMocks();
      });
      it("Store should show error on API Fail", async () => {
        fetch.mockReject(() => Promise.reject("API is down"));
        await store.dispatch(fetchMovies());
        const receivedState = store.getState();

        expect(receivedState.error).toBe("Cant Fetch Data");
        expect(receivedState.loading).toBe(false);
      });
      it("Store should show movieData on successful api call", async () => {
        const movieList = [1, 2, 3];
        fetch.mockResponseOnce(
          JSON.stringify({ components: [{}, { items: movieList }] })
        );
        await store.dispatch(fetchMovies());
        const receivedState = store.getState();
        expect(receivedState.moviesList).toStrictEqual(movieList);
        expect(receivedState.error).toBe("");
      });
    });
  });
});
