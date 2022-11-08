import FavItem from "./FavItem";
import { ListsContext } from "../App";
import { useContext } from "react";
import { IoStar } from "react-icons/io5";

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
      <h3>Eat These!</h3>
      <div className="grid grid-cols-auto-fill gap-5 py-8">
        {foodArr.length === 0
          ? "Places you have liked will be found here, start adding restaurants to your collection now!"
          : foodArr}
      </div>
    </>
  );
}
