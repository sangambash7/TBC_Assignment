import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" to="/about">
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
