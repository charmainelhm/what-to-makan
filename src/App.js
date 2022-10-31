import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavouriteList from "./components/FavouriteList";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-lg font-bold">What to Makan</h1>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/">
            <Roulette />
          </Route>
          <Route path="/eatWhere">
            <Search />
          </Route>
          <Route path="/eatThese">
            <FavouriteList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
