import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Movie from "./components/Catalog/Movies/Movie/Movie";
import React, { Component } from "react";
import { data } from "./AppData";

class App extends Component {
  constructor() {
    super();
    this.state = data;
  }

  changeMovieStatus = (movieId, isRented) => {
    let updatedMovies = [...this.state.movies];
    let movieToUpdateIdx = updatedMovies.findIndex(m => m.id === movieId);
    updatedMovies[movieToUpdateIdx].isRented = isRented;
    this.setState({
      movies: updatedMovies,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path={["/", "/catalog", "/movies/:id"]}
            component={NavBar}
          ></Route>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home users={this.state.users} />}
            ></Route>
            <Route
              exact
              path="/catalog"
              render={() => (
                <Catalog
                  movies={this.state.movies}
                  changeMovieStatus={this.changeMovieStatus}
                />
              )}
            ></Route>
            <Route exact path="/movies/:id" component={Movie}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
