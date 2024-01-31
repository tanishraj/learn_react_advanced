import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { OnlineStatus } from "../atoms/OnlineStatus";
import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { ICON_MAPPER } from "../../utils/iconMapper";
import { MapButton } from "../atoms/MapButton";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className=" fixed top-0 bg-grey950   shadow-sm min-h-20 min-w-full z-50 flex items-center justify-between">
      <nav className="flex items-center justify-between max-w-screen-xl w-full m-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center relative mt-2.5">
            <Link to="/">
              <h1
                data-testid="logo"
                className="text-primary text-450 font-bold"
              >
                BHOJAN
              </h1>
            </Link>
            <OnlineStatus />
          </div>
          <div className="flex items-center gap-2">
            <MapButton />
          </div>
        </div>

        <ul className="flex justify-between items-center text-primary gap-10 list-none">
          {NAVIGATION_ITEMS.map((navItem) => (
            <li key={navItem.name}>
              <Link
                className="flex items-center gap-1 text-white font-medium text-250 tracking-wider cursor-pointer transition-colors duration-300 transition-border hover:text-primary50 hover:border-blue-300 decoration-none"
                to={navItem?.path}
              >
                {ICON_MAPPER?.[navItem?.icon]}{" "}
                {navItem?.icon === "cart"
                  ? `${navItem?.name} (${cart.length})`
                  : navItem?.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              data-testid="themeToggler"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="filter-button flex text-250 font-medium text-white cursor-pointer transition-all duration-500 ease-in-ou hover:text-white"
            >
              {theme === "light" ? (
                <div data-testid="lightMode">
                  <MdOutlineLightMode />
                </div>
              ) : (
                <div data-testid="darkMode">
                  <IoIosMoon />
                </div>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
