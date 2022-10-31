import { useState } from "react";

export default function Search({ updateInput }) {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
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
          onChange={handleChange}
          type="text"
          placeholder="Enter food here"
        />
        <input className="ml-2 bg-sky-200" type="submit" value="Search" />
      </form>
    </>
  );
}
