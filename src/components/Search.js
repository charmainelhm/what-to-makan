import { useState } from "react";
import Results from "./Results";
import { IoSearch } from "react-icons/io5";

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
      <h3 className="mb-3">Eat Where?</h3>
      <form onSubmit={handleSubmit} className="search-bar mb-4">
        <input
          className="grow py-3 px-4"
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Enter food here"
        />
        <button
          type="submit"
          className="border-l-2 border-gray-300 hover:bg-yellow-200"
        >
          <IoSearch className="text-lg" />
        </button>
      </form>
      <Results />
    </>
  );
}
