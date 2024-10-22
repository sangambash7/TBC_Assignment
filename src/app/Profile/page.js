'use client';
import React, { useEffect, useState } from 'react';
import { getCurrentAuthUser } from '../_Services/authService';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getCurrentAuthUser();
      setUser(userData);
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <main id="prof">
        <div className="loader"></div>
      </main>
    );
  }

  if (!user) {
    return <p>User not found or not authenticated.</p>;
  }

  return (
    <main id="prof">
      <h1>Profile Page</h1>
      <h2>User Information</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {/* Render more user information as needed */}
    </main>
  );
};

export default Profile;
