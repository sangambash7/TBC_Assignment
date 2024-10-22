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
    <main id="profile-page">
      <div className="prof-header-cont">
        <div className="profile-header">
          {user.image && (
            <Image
              src={user.image}
              alt="User Profile Avatar"
              width={72}
              height={72}
              className="profile-avatar"
            />
          )}
          <div className="header-text">
            <p className="F-name">{user.firstName}</p>
            <p className="L-name">{user.lastName}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;