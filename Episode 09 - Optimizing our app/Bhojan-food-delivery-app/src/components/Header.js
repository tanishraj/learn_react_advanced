import { Link } from "react-router-dom";
import { OnlineStatus } from "./OnlineStatus";

export const Header = () => {
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <div className="logo">
          <h1>BHOJAN</h1>
          <OnlineStatus />
        </div>

        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
