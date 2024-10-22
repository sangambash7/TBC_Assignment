'use client';
import React, { useEffect, useState } from 'react';
import { getCurrentAuthUser } from '../_Services/authService';
import Image from 'next/image';
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
      <div className="profile-header">
        <div className="avatar-cont">
          {user.image && (
            <Image
              src={user.image}
              alt="User Profile Avatar"
              width={64}
              height={64}
              className="profile-avatar"
            />
          )}
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
        <h1>Profile Page</h1>
      </div>
    </main>
  );
};

export default Profile;
