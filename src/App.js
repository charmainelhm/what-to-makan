import Navigation from "./components/Navigation";
import Roulette from "./components/Roulette";
import Search from "./components/Search";
import FavouriteList from "./components/FavouriteList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>What to Makan</h1>
      <Navigation />
      <Roulette />
      <Search />
      <FavouriteList />
    </div>
  );
}

export default App;
