import Result from "./Result";

export default function Results({ foodList, updateFavList }) {
  const foodArr = foodList.map((food, ind) => {
    return <Result key={ind} food={food} updateFavList={updateFavList} />;
  });

  return (
    <div className="max-w-screen-lg mx-auto space-y-3">
      {foodArr.length === 0 ? "No results found" : foodArr}
    </div>
  );
}

// <div className="grid grid-cols-auto-fit gap-5">
// {foodArr.length === 0 ? "No results found" : foodArr}
// </div>
