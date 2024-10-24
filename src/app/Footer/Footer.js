import Link from 'next/link';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>2024@Sandro Gambashidze</p>
      <div className="footer-menu">
        <ul>
          <li>
            <Link className="footer-nav-item" href="/">
              <h4>
                Home
              </h4>
            </Link>
          </li>
          <li>
            {' '}
            <Link className="footer-nav-item" href="/About">
              <h4>
                About Us
              </h4>
            </Link>
          </li>
          <li>
            {' '}
            <Link className="footer-nav-item" href="/Contact">
              <h4>
                Contact
              </h4>
            </Link>
          </li>
          <li>

            {" "}
            <Link className="footer-nav-item" href="/Products">
              <h4>
                Products
              </h4>
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" href="/Blogs">
              <h4>
                Blogs
              </h4>
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-nav-item" href="/Profile">
              <h4>
                My Profile
              </h4>
              </Link>
            {' '}
            
          </li>
        </ul>
      </div>
    </footer>
  );
}
