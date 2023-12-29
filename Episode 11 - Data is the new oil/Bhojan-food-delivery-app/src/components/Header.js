import { useContext } from "react";
import { Link } from "react-router-dom";
import { OnlineStatus } from "./OnlineStatus";
import { ThemeContext } from "../context/ThemeContext";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className=" fixed top-0 bg-grey950 shadow-sm min-h-20 min-w-full z-50 flex items-center justify-between">
      <nav className="flex items-center justify-between max-w-screen-xl w-full m-auto px-4">
        <div className="flex items-center relative mt-2.5">
          <h1 className="text-primary text-450 font-bold">BHOJAN</h1>
          <OnlineStatus />
        </div>

        <ul className="flex justify-between items-center text-primary gap-8 list-none">
          <li>
            <Link
              className="text-primary text-250 tracking-wider uppercase cursor-pointer transition-colors duration-300 transition-border hover:text-primary50 hover:border-blue-300 decoration-none"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-primary text-250 tracking-wider uppercase cursor-pointer transition-colors duration-300 transition-border hover:text-primary50 hover:border-blue-300 decoration-none"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-primary text-250 tracking-wider uppercase cursor-pointer transition-colors duration-300 transition-border hover:text-primary50 hover:border-blue-300 decoration-none"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="filter-button text-250 font-medium text-white cursor-pointer transition-all duration-500 ease-in-ou hover:text-white"
            >
              {theme === "light" ? "☀︎" : "⛅️"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
