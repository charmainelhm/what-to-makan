import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Eat What</Link>
      <Link to="/eatWhere">Eat Where</Link>
      <Link to="/eatThese">Eat These</Link>
    </nav>
  );
}
