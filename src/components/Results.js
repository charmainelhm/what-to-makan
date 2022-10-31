import Result from "./Result";

export default function Results({ listOfFood }) {
  const foodArr = listOfFood.map((restaurant, ind) => {
    return <Result key={ind} resInfo={restaurant} />;
  });

  return (
    <div className="grid grid-cols-auto-fit gap-5">
      {foodArr.length === 0 ? "No results found" : foodArr}
    </div>
  );
}
