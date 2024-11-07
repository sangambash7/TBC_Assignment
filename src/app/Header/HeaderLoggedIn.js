'use client';

import './HeaderLoggedIn.css';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function HeaderLoggedIn() {
  const { user, error, isLoading } = useUser();

  return (
    user && (
      <div className="header-loggedIn">
        <span className="header-hello">{`Hello ${user?.nickname}!`} </span>
        <span className="header-logout">
          <button className="btn-logout">
            <a href="/api/auth/logout">Log Out</a>
          </button>
        </span>
      </div>
    )
  );
}
