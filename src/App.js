import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavList from "./components/FavList";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

const config = {
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

function App() {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [favList, setFavList] = useState([]);

  const searchForFood = async () => {
    // const corsApiUrl = "https://cors-anywhere.herokuapp.com/";

    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?location=sg&categories=food&term=${input}&limit=10`,
      config
    );

    const data = await response.json();
    console.log(data.businesses);
    setFoodList(data.businesses);
  };

  const updateInput = (string) => {
    setInput(string);
  };

  const updateFavList = (food) => {
    setFavList([...favList, food]);
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
      <p>
        This is a demo version of the application which requires CORS to be
        enabled to function properly. Please click{" "}
        <a
          style={{ color: "red" }}
          href="https://cors-anywhere.herokuapp.com/corsdemo"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to enable CORS!{" "}
      </p>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/">
            <Roulette updateInput={updateInput} />
          </Route>
          <Route path="/eatWhere">
            <Search
              updateInput={updateInput}
              foodList={foodList}
              updateFavList={updateFavList}
            />
          </Route>
          <Route path="/eatThese">
            <FavList favList={favList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
