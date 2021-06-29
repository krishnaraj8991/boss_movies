import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Header data-test='Header' />
      <Router>
        <Route path='/' exact component={null}>
          <MovieList data-test='MovieList' />
        </Route>
        <Route path='/:id' exact component={MoviePage} />
        {/* <MovieList data-test='MovieList' /> */}
        {/* <MoviePage /> */}
        {/* </Route> */}
        {/* <Route path='/doc' exact component={Doc}/>
      <Route path='/doc/:id' component={DocItem}/>
      <Route path='/clock' component={Clock}/> */}
      </Router>
      {/* <ReactModal isOpen={true} style={{ minWidth: "500px" }}>
        <h1>Modal View</h1>
      </ReactModal> */}
      <Footer data-test='Footer' />
    </Provider>
  );
}

export default App;
