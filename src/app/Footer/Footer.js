import Link from "next/link";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>2024@Sandro Gambashidze</p>
      <div className="footer-menu">
        <ul>
          <li>
            <Link className="footer-nav-item" href="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" href="/About">
              About Us
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" href="/Contact">
              Contact
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" href="/Assignment-3">
              Assignment-3
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
