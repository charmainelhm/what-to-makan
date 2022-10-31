import { useState } from "react";
import Results from "./Results";

export default function Search({ updateInput, listOfFood }) {
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
        <input className="ml-2 bg-sky-200" type="submit" value="Search" />
      </form>
      <Results listOfFood={listOfFood} />
    </>
  );
}
