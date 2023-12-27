import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <h1>BHOJAN</h1>
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
  );
};
