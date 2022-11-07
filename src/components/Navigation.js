import { Link } from "react-router-dom";
import { IoStar, IoFastFood, IoSearch } from "react-icons/io5";

export default function Navigation() {
  return (
    <nav className="flex flex-col">
      <Link to="/" className="nav-item">
        <IoFastFood className="inline-block" /> Eat What
      </Link>
      <Link to="/eatWhere" className="nav-item">
        <IoSearch className="inline-block" /> Eat Where
      </Link>
      <Link to="/eatThese" className="nav-item">
        <IoStar className="inline-block" /> Eat These
      </Link>
    </nav>
  );
}
