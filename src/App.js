import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <MovieList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
