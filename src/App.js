import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import React, { Component } from "react";
import { data } from "./AppData";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { BUDGET, ERROR } from "./Constants";

class App extends Component {
  constructor() {
    super();
    this.state = data;
  }

  changeMovieStatus = (movieId, isRented) => {
    if (isRented && this.state.budget - BUDGET.MOVIE_PRICE < 0) {
      alert(ERROR.LOW_BUDGET);
      return;
    }
    let updatedMovies = [...this.state.movies];
    let movieToUpdateIdx = updatedMovies.findIndex(m => m.id === movieId);
    updatedMovies[movieToUpdateIdx].isRented = isRented;
    let factor = isRented ? BUDGET.DECREASE : BUDGET.INCREASE;
    this.setState({
      movies: updatedMovies,
      budget: this.state.budget + BUDGET.MOVIE_PRICE * factor,
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
                  budget={this.state.budget}
                />
              )}
            ></Route>
            <Route
              exact
              path="/movies/:id"
              render={({ match }) => (
                <MovieDetails
                  movie={this.state.movies.find(m => m.id === +match.params.id)}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
