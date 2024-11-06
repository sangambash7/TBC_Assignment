'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkisIsAuthenticated } from '../_Services/authService';

export default function authLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getAuthStatus() {
      const res = await checkisIsAuthenticated();
      setIsAuthenticated(res);
    }
    getAuthStatus();
  }, []);

  return <>{isAuthenticated ? children : router.push('/Login')}</>;
}
