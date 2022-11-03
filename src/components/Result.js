export default function Result({ food, updateFavList }) {
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
      <div className="grow text-start self-center">
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
            className={`inline-block ${
              food.is_closed ? "bg-red-400" : "bg-blue-900"
            } text-xs text-white font-semibold uppercase align-top px-3 py-1 rounded-full`}
          >
            {food.is_closed ? "Closed" : "Open"}
          </span>
        </h2>
        <p>Rating: {food.rating}</p>
        <p>Price range: {food.price ? food.price : "-"}</p>
        <p>{address}</p>
      </div>
      <button
        className="self-start"
        onClick={() => {
          updateFavList(food);
        }}
      >
        Add to Fav
      </button>
    </div>
  );
}
