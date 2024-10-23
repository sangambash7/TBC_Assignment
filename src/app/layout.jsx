'use client';

import './global.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentAuthUser } from './_Services/authService';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/Login';

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getCurrentAuthUser();
      setUserData(data);
      setLoading(false); // Stop loading once data is fetched
    };
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body>
          <main id="loading-main">
            <div className="loader"></div>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">
          <div className="application">
            {!isLoginPage && <Header userData={userData} />}
            {children}
            {!isLoginPage && <Footer />}
          </div>
        </div>
      </body>
    </html>
  );
}
