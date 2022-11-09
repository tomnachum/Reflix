import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseUser from "./components/ChooseUser/ChooseUser";
import NavBar from "./components/NavBar/NavBar";
import Catalog from "./components/Catalog/Catalog";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path={["/", "/catalog", "/movies/:id"]}
          component={NavBar}
        ></Route>
        <Switch>
          <Route exact path="/" component={ChooseUser}></Route>
          <Route exact path="/catalog" component={Catalog}></Route>
          <Route exact path="/movies/:id" component={Movie}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
