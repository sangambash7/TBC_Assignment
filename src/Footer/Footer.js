import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>2024@Sandro Gambashidze</p>
      <div className="footer-menu">
        <ul>
          <li>
            <Link className="footer-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" to="/about">
              About Us
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
