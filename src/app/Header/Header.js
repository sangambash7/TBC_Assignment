import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link className="nav-item" href="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" href="/About">
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" href="/Contact">
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" href="/Blogs">
            Blogs
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-item" href="/Profile">
            My Profile
          </Link>
        </li>
      </ul>
    </header>
  );
}
