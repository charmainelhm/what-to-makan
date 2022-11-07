import Result from "./Result";
import { useContext } from "react";
import { ListsContext } from "../App";

export default function Results() {
  const { foodList } = useContext(ListsContext);

  const foodArr = foodList.map((food, ind) => {
    return <Result key={ind} food={food} />;
  });

  return (
    <div className="max-w-screen-md mx-auto space-y-5">
      {foodArr.length === 0 ? "No results found" : foodArr}
    </div>
  );
}

// <div className="grid grid-cols-auto-fit gap-5">
// {foodArr.length === 0 ? "No results found" : foodArr}
// </div>
