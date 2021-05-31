import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <MovieList />
      {/* <ReactModal isOpen={true} style={{ minWidth: "500px" }}>
        <h1>Modal View</h1>
      </ReactModal> */}
    </Provider>
  );
}

export default App;
