import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavList from "./components/FavList";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export const ListsContext = React.createContext();

function App() {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [favList, setFavList] = useState([]);
  const [mobileNav, setMobileNav] = useState(false);

  const searchForFood = async () => {
    const corsApiUrl = "https://cors-anywhere.herokuapp.com/";

    const response = await fetch(
      `${corsApiUrl}https://api.yelp.com/v3/businesses/search?location=singapore&categories=food&term=${input}&limit=15&sort_by=rating`,
      config
    );

    const data = await response.json();
    console.log(data.businesses);
    setFoodList(data.businesses);
  };

  const updateInput = (string) => {
    setInput(string);
  };

  const handleClick = (boolean) => {
    setMobileNav(boolean);
  };

  // Retrieve fav listing from local storage
  useEffect(() => {
    const storedFavList = JSON.parse(localStorage.getItem("favList"));
    if (storedFavList) {
      setFavList(storedFavList);
    }
  }, []);

  // Save fav listing to local storage
  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(favList));
  }, [favList]);

  useEffect(() => {
    if (input !== "") {
      console.log("Retrieving food info...");
      searchForFood();
    }
  }, [input]);

  return (
    <div className="App">
      <div className="bg-blue-1000 text-white sm:sidebar">
        <div className="flex justify-between sm:bg-blue-800 px-5 py-7">
          <h1 className="text-2xl lg:text-[1.8rem]"> What to Makan</h1>
          <button
            className="sidebar-icon sm:hidden"
            onClick={() => handleClick(true)}
          >
            <IoMenu />
          </button>
        </div>
        <div
          className={`mobile-nav ${
            mobileNav ? "" : "translate-x-full"
          } sm:relative sm:translate-x-0`}
        >
          <button
            className="sidebar-icon p-2 sm:hidden"
            onClick={() => handleClick(false)}
          >
            <IoClose />
          </button>
          <p className="bg-blue-900 m-3 p-4 italic text-sm">
            This is a demo version of the application which requires CORS to be
            enabled to function properly. Please click{" "}
            <a
              className="text-yellow-300"
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to enable CORS!{" "}
          </p>
          <Navigation handleClick={handleClick} />
        </div>
      </div>
      <div className="text-center py-6 md:content-container">
        <ListsContext.Provider value={{ foodList, favList, input, setFavList }}>
          <Switch>
            <Route exact path="/">
              <Roulette updateInput={updateInput} />
            </Route>
            <Route path="/eatWhere">
              <Search updateInput={updateInput} />
            </Route>
            <Route path="/eatThese">
              <FavList />
            </Route>
          </Switch>
        </ListsContext.Provider>
      </div>
    </div>
  );
}

export default App;
