export default function FavItem({ food }) {
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
      <p>Price range: {food.price ? food.price : "-"}</p>
      <p>{address}</p>
    </div>
  );
}
