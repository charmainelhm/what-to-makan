export default function FavItem({ food }) {
  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative group bg-black">
        <img
          className="aspect-square object-cover group-hover:opacity-90"
          src={food.image_url}
          alt="Restaurant"
        />
        <button className="hidden absolute top-0 right-0 bg-transparent text-lg group-hover:block">
          X
        </button>
      </div>
      <div className="p-5">
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
        <p>Price range: {food.price ? food.price : "-"}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
