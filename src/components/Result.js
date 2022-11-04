import {
  IoLocationSharp,
  IoStarHalf,
  IoStarOutline,
  IoStar,
} from "react-icons/io5";

import { useState, useEffect } from "react";

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

export default function Result({
  food,
  addToFavList,
  removeFromFavList,
  isFavourite,
}) {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    if (!favourite) {
      addToFavList(food);
      setFavourite(true);
    } else {
      removeFromFavList(food.id);
      setFavourite(false);
    }
  };

  useEffect(() => {
    let boolean = isFavourite(food.id);
    setFavourite(boolean);
  }, []);

  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div className="flex gap-x-4 rounded-lg overflow-hidden shadow-lg">
      <img
        className="aspect-square object-cover w-1/5"
        src={food.image_url}
        alt="Restaurant"
      />
      <div className="grow text-start self-center space-y-1">
        <h2 className="text-lg font-bold">
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
            } bg-red-400 text-xs text-white font-semibold uppercase align-top px-2 py-1 rounded-full`}
          >
            {food.price ? food.price : ""}
          </span>
        </h2>
        <p className="flex">{generateRating(food.rating)}</p>
        <p>
          <IoLocationSharp className="inline-block" /> {address}
        </p>
      </div>
      <button className="self-start" onClick={handleClick}>
        {favourite ? <IoStar /> : <IoStarOutline />}
      </button>
    </div>
  );
}
