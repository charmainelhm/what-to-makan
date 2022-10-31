import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex space-x-4 justify-center">
      <Link to="/" className="hover:underline">
        Eat What
      </Link>
      <Link to="/eatWhere" className="hover:underline">
        Eat Where
      </Link>
      <Link to="/eatThese" className="hover:underline">
        Eat These
      </Link>
    </nav>
  );
}
