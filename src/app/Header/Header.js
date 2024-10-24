import Link from 'next/link';
import './Header.css';
import HeaderLoggedIn from './HeaderLoggedIn';
import Hamburger from '../utils/Hamburger';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link className="nav-item" href="/">
            <h3>
              Home
            </h3>
          </Link>
        </li>
        <li>
          {' '}
          <Link className="nav-item" href="/About">
            <h3>
              About Us
            </h3>
          </Link>
        </li>
        <li>
          {' '}
          <Link className="nav-item" href="/Contact">
            <h3>
              Contact
            </h3>
          </Link>
        </li>
        <li>
          {' '}
          <Link className="nav-item" href="/Products">
            <h3>  
              Products
            </h3>
          </Link>
        </li>
        <li>
          {' '}
          <Link className="nav-item" href="/Blogs">
            <h3>
              Blogs
            </h3>
          </Link>
        </li>
        <li>
          {' '}
          <Link className="nav-item" href="/Profile">
            <h3>
              My Profile
            </h3>
          </Link>
        </li>
      </ul>
      <Hamburger />
      <HeaderLoggedIn />
    </header>
  );
}
