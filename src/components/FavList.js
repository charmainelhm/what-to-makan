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
      <h3>Eat These!</h3>
      <p
        className="px-2"
        style={{ display: foodArr.length === 0 ? "block" : "none" }}
      >
        Places you have liked will be found here, start adding restaurants to
        your collection now!
      </p>
      <div className="grid grid-cols-auto-fill gap-5 py-8 w-11/12 mx-auto">
        {foodArr}
      </div>
    </>
  );
}
