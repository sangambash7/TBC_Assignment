'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function authLayout({ children }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (user) return <>{children}</>;

  return (
    <>
      <Link href="/Login" style={{ textDecoration: 'underline' }}>
        Click Here To Login
      </Link>
    </>
  );

  // return router.push('/Login');
}
