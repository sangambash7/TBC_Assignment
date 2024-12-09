'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

interface UserInterface {
  user: {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    name: string;
    nickname: string;
    age: number;
    picture: string;
    sid: string;
    sub: string;
    updated_at: string;
  };
}

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return (
    user && (
      <main className="bg-main p-12">
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-col items-center justify-center gap-3 bg-mainDarker p-3 border shadow-2xl">
            <p className="F-name">{user.given_name}</p>
            <p className="L-name">{user.family_name}</p>
            <p className="L-name">{user.nickname}</p>
            <p className="L-name">
              <span>mail: </span>
              <Link
                className="text-inherit no-underlin cursor-pointer hover:text-blue-500"
                href={`mailto:${user.email}`}
              >
                {user.email}
              </Link>
            </p>
          </div>
        </div>
      </main>
    )
  );
};

export default Profile;
