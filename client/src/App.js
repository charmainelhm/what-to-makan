import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavouriteList from "./components/FavouriteList";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  // const [listOfFood, setListOfFood] = useState([]);

  const updateInput = (string) => {
    setInput(string);
  };

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
            <Search updateInput={updateInput} />
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
