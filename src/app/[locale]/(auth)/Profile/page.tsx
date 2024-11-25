'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Profile.css';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  nickname: string;
  picture: string;
  sid: string;
  sub: string;
  updated_at: string;
}

const Profile: React.FC<User> = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return (
    user && (
      <main id="profile-page">
        <div className="prof-header-cont">
          <div className="profile-header">
            {user.image && (
              <Image
                src={user.picture}
                alt="User Profile Avatar"
                width={72}
                height={72}
                className="profile-avatar"
              />
            )}
            <div className="header-text">
              <p className="F-name">{user.given_name}</p>
              <p className="L-name">{user.family_name}</p>
            </div>
          </div>
        </div>
        <div className="grid-cont">
          <div className="personal-info grid-item">
            <h6>{user.nickname}</h6>
            <p className="age">
              <span>Age:</span> {user.age}{' '}
            </p>
            <p className="address">
              <span>Address: </span>
              {user.address?.country}/{user.address?.address}
            </p>
          </div>
          {/* <div className="education  grid-item">
            <h6>Education</h6>
            <p className="uni">{user.university}</p>
          </div> */}
          {/* <div className="workplace  grid-item">
            <h6>Workplace</h6>
            <p className="company">{user.company?.name} </p>
            <p className="comp-title">{user.company?.title}</p>
          </div> */}
          <div className="contacts grid-item">
            <h6>Contact info</h6>
            <p className="mail">
              <span>mail:</span>
              <Link href={`mailto:${user.email}`}>{user.email}</Link>
            </p>
            {/* <p className="phone">
              <span>phone:</span>
              <Link href={`tel:${user.phone}`}>{user.phone}</Link>
            </p> */}
          </div>
          {/* <div className="payment-info">
            <h6 className="payment-title">Payment Information</h6>
            <div className="payment-types">
              <div className="cards">
                <h5>Banking Cards</h5>
                <p>
                  <span>{user.bank?.cardType}:</span>{' '}
                  {' ' + '**** ****' + ' ' + user.bank?.cardNumber.slice(-4)}
                </p>
              </div>
              <div className="wallets">
                <h5>Crypto Wallets</h5>
                <p>
                  <span>{user.crypto?.coin}:</span>{' '}
                  {user.crypto?.wallet?.slice(0, 4) +
                    ' ' +
                    '**** ****' +
                    ' ' +
                    user.crypto?.wallet?.slice(-4)}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    )
  );
};

export default Profile;
