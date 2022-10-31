import Result from "./Result";

export default function Results({ foodList, updateFavList }) {
  const foodArr = foodList.map((food, ind) => {
    return <Result key={ind} food={food} updateFavList={updateFavList} />;
  });

  return (
    <div className="grid grid-cols-auto-fit gap-5">
      {foodArr.length === 0 ? "No results found" : foodArr}
    </div>
  );
}
