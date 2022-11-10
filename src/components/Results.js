import Result from "./Result";
import { useContext, useEffect, useState } from "react";
import { ListsContext } from "../App";

export default function Results() {
  const { foodList, input } = useContext(ListsContext);

  const foodArr = foodList.map((food, ind) => {
    return <Result key={ind} food={food} />;
  });

  return (
    <div
      className="w-11/12 max-w-[850px] mx-auto space-y-5"
      style={{ display: input === "" ? "none" : "block" }}
    >
      <p style={{ display: foodArr.length === 0 ? "none" : "block" }}>
        Displaying results for{" "}
        <span className="text-red-400 font-bold">{input}</span>
      </p>
      {foodArr.length === 0 ? `No results found for ${input}!` : foodArr}
    </div>
  );
}

// <div className="grid grid-cols-auto-fit gap-5">
// {foodArr.length === 0 ? "No results found" : foodArr}
// </div>
