export default function FavItem({ food }) {
  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        className="aspect-square object-cover"
        src={food.image_url}
        alt="Restaurant"
      />
      <div className="p-5">
        <h2 className="text-lg font-bold">
          <a className="hover:underline" href={food.url} target="_blank">
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
        <p>Price range: {food.price ? food.price : "-"}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
