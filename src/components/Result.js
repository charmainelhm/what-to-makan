export default function Result({ food, updateFavList }) {
  const address = food.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div>
      <img
        className="aspect-square object-cover"
        src={food.image_url}
        alt="Restaurant"
      />
      <h2>{food.name}</h2>
      <p>Rating: {food.rating}</p>
      <p>Price range: {food.price ? food.price : "-"}</p>
      <p>{address}</p>
      <button
        onClick={() => {
          updateFavList(food);
        }}
      >
        Add to Fav
      </button>
    </div>
  );
}