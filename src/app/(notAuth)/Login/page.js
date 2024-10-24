'use client';
import './Login.css';
import { authUser, getCookie } from '../../_Services/authService';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCredsCorrect, setIsCredCorrect] = useState(true);
  const [isAuthenticated, SetIsAuthenticated] = useState(getCookie('token'));
  async function sendAuthentication(e) {
    e.preventDefault();

    const response = await authUser(username, password);

    if (response) {
      window.location.href = '/';
      setIsCredCorrect(true);
    } else {
      setIsCredCorrect(false);
    }
  }

  return (
    <main>
      <div className="login">
        {!isAuthenticated ? (
          <>
            <h1>Please Authenticate To Access Resources.</h1>
            <form className="login-form" onSubmit={sendAuthentication}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn-login">
                Login
              </button>
              {!isCredsCorrect && (
                <p className="login-incorrect">
                  Username Or Passowrd Is Incorrect!
                </p>
              )}
            </form>
          </>
        ) : (
          <h1 className="login-authenticated">
            You Are Already Authenticated.
          </h1>
        )}
      </div>
    </main>
  );
}
