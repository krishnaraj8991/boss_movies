import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./Header"
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>

          <MovieList />
        
    </Provider>
  );
}

export default App;
