import FavItem from "./FavItem";

export default function FavList({ favList }) {
  const foodArr = favList.map((food, ind) => {
    return <FavItem key={ind} food={food} />;
  });
  return (
    <div className="grid grid-cols-auto-fill gap-5">
      {foodArr.length === 0 ? "No items here yet" : foodArr}
    </div>
  );
}
