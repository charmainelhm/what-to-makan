import { useState } from "react";
import Results from "./Results";

export default function Search({ updateInput }) {
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
      <h3>This is the search section</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Enter food here"
        />
        <input
          className="btn btn-solid border-red-400 ml-4 hover:btn-outline"
          type="submit"
          value="Search"
        />
      </form>
      <Results />
    </>
  );
}
