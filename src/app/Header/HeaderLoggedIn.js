"use client";

import { useEffect, useState } from "react";
import { getCurrentAuthUser } from "../_Services/authService";
import "./HeaderLoggedIn.css"

export default function HeaderLoggedIn() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getCurrentAuthUser();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  function handleLogout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    setUserData(null);
    window.location.href = "/Login";
  }

  if (userData) {
    return (
      <div className="header-loggedIn">
        <span className="header-hello">{`Hello ${userData.firstName}!`} </span>
        <span className="header-logout">
          <button className="btn-logout" onClick={handleLogout}>
            Log Out
          </button>
        </span>
      </div>
    );
  }
}
