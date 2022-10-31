import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavouriteList from "./components/FavouriteList";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

function App() {
  const [input, setInput] = useState("");
  const [listOfFood, setListOfFood] = useState([]);

  const searchForFood = async () => {
    const corsApiUrl = "https://cors-anywhere.herokuapp.com/";

    const response = await fetch(
      `${corsApiUrl}https://api.yelp.com/v3/businesses/search?location=sg&categories=food&term=${input}&limit=10`,
      config
    );

    const data = await response.json();
    // console.log(data.businesses);
    setListOfFood(data.businesses);
  };

  const updateInput = (string) => {
    setInput(string);
  };

  useEffect(() => {
    if (input !== "") {
      console.log("Retrieving food info...");
      searchForFood();
    }
  }, [input]);

  return (
    <div className="App">
      <h1 className="text-lg font-bold">What to Makan V1</h1>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/">
            <Roulette />
          </Route>
          <Route path="/eatWhere">
            <Search updateInput={updateInput} listOfFood={listOfFood} />
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
