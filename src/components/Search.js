import { useState } from "react";
import Results from "./Results";

export default function Search({
  updateInput,
  foodList,
  removeFromFavList,
  addToFavList,
  isFavourite,
}) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInput(input);
    setInput("");
  };
  return (
    <>
      <p>This is the search section</p>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Enter food here"
        />
        <input
          className="btn btn-solid border-red-400 ml-2 hover:btn-outline"
          type="submit"
          value="Search"
        />
      </form>
      <Results
        foodList={foodList}
        removeFromFavList={removeFromFavList}
        addToFavList={addToFavList}
        isFavourite={isFavourite}
      />
    </>
  );
}
