import { IoLocationSharp, IoClose } from "react-icons/io5";

export default function FavItem({ food, removeFromFavList }) {
  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div className="card">
      <div className="relative group bg-black">
        <img
          className="aspect-square object-cover group-hover:opacity-80"
          src={food.image_url}
          alt="Restaurant"
        />
        <button
          title="Remove item"
          className="hidden absolute top-0 right-0 bg-transparent text-white p-3 group-hover:block"
          onClick={() => removeFromFavList(food.id)}
        >
          <IoClose className="text-2xl" />
        </button>
      </div>
      <div className="p-5">
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
            } bg-red-400 text-xs text-white font-semibold uppercase align-top px-2 py-1 rounded-full`}
          >
            {food.price ? food.price : ""}
          </span>
        </h2>
        {/* <p>Price range: {food.price ? food.price : "-"}</p> */}
        <p>
          <IoLocationSharp className="inline-block" />
          {address}
        </p>
      </div>
    </div>
  );
}
