export default function Result({ resInfo }) {
  const address = resInfo.location.display_address.reduce(
    (finalStr, curStr) => (finalStr += `${curStr} `),
    ""
  );

  return (
    <div>
      <img
        className="aspect-square object-cover"
        src={resInfo.image_url}
        alt="Restaurant"
      />
      <h2>{resInfo.name}</h2>
      <p>Price range: {resInfo.price}</p>
      <p>{address}</p>
    </div>
  );
}
