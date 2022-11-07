import FavItem from "./FavItem";
import { ListsContext } from "../App";
import { useContext } from "react";

export default function FavList() {
  const { favList, setFavList } = useContext(ListsContext);

  const removeFromFavList = (foodId) => {
    const updatedList = favList.filter((food) => food.id !== foodId);
    setFavList(updatedList);
  };

  const foodArr = favList.map((food, ind) => {
    return (
      <FavItem key={ind} food={food} removeFromFavList={removeFromFavList} />
    );
  });
  return (
    <>
      <h3>This is where you can find places you've starred!</h3>
      <div className="grid grid-cols-auto-fill gap-5">
        {foodArr.length === 0 ? "No items here yet" : foodArr}
      </div>
    </>
  );
}
