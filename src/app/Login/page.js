"use client";
import "./Login.css";
import { authUser } from "../_Services/authService";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function sendAuthentication(e) {
    e.preventDefault();

    const response = await authUser(username, password);

    if (response) {
      router.push("/");
    } else {
    }
  }

  return (
    <main>
      <div className="login">
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
        </form>
      </div>
    </main>
  );
}
