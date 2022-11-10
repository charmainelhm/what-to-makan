import {
  IoLocationSharp,
  IoStarHalf,
  IoStarOutline,
  IoStar,
} from "react-icons/io5";

import { useState, useEffect, useContext } from "react";
import { ListsContext } from "../App";

const generateRating = (rating) => {
  const starsArr = [];
  for (let i = 0; i < Math.trunc(rating); i++) {
    starsArr.push(<IoStar />);
  }
  if (!Number.isInteger(rating)) {
    starsArr.push(<IoStarHalf />);
  }
  if (starsArr.length !== 5) {
    for (let i = 0; i < 5 - starsArr.length; i++) {
      starsArr.push(<IoStarOutline />);
    }
  }

  return starsArr;
};

export default function Result({ food }) {
  const { favList, setFavList } = useContext(ListsContext);
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    if (!favourite) {
      setFavList([...favList, food]);
      setFavourite(true);
    } else {
      const updatedList = favList.filter((item) => item.id !== food.id);
      setFavList(updatedList);
      setFavourite(false);
    }
  };

  useEffect(() => {
    let boolean = favList.filter((item) => item.id === food.id).length > 0;
    setFavourite(boolean);
  }, [food]);

  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div className="card flex gap-x-4">
      <img
        className="aspect-square object-cover w-1/5"
        src={food.image_url}
        alt="Restaurant"
      />
      <div className="py-2 grow text-start self-center space-y-1">
        <h2>
          <a
            className="hover:underline"
            href={food.url}
            target="_blank"
            rel="noreferrer"
          >
            {food.name}
          </a>{" "}
          <span
            className={`${
              food.price ? "inline-block" : "hidden"
            } bg-red-400 text-xs text-white uppercase align-top px-2 py-1 rounded-full`}
          >
            {food.price ? food.price : ""}
          </span>
        </h2>
        <p className="flex text-yellow-400">{generateRating(food.rating)}</p>
        <p className="text-sm lg:text-base">
          <IoLocationSharp className="inline-block text-gray-500" /> {address}
        </p>
      </div>
      <button
        title="Save item"
        className="self-start p-2 sm:p-4 text-yellow-400 text-[1.4rem] lg:text-[1.8rem] hover:scale-125"
        onClick={handleClick}
      >
        {favourite ? <IoStar /> : <IoStarOutline />}
      </button>
    </div>
  );
}
