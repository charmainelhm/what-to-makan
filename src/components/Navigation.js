import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoStar, IoFastFood, IoSearch } from "react-icons/io5";

export default function Navigation({ handleClick }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
    handleClick();
  }, [location]);

  return (
    <nav className="flex flex-col">
      <Link
        to="/"
        className={`nav-item ${currentPath === "/" ? "nav-item-focus" : ""}`}
      >
        <IoFastFood className="inline-block mr-1 align-baseline" /> Eat What
      </Link>
      <Link
        to="/eatWhere"
        className={`nav-item ${
          currentPath === "/eatWhere" ? "nav-item-focus" : ""
        }`}
      >
        <IoSearch className="inline-block mr-1 align-baseline" /> Eat Where
      </Link>
      <Link
        to="/eatThese"
        className={`nav-item ${
          currentPath === "/eatThese" ? "nav-item-focus" : ""
        }`}
      >
        <IoStar className="inline-block mr-1 align-baseline" /> Eat These
      </Link>
    </nav>
  );
}
