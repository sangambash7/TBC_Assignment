'use client';

import './globals.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
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
      <UserProvider>
        <body>
          <div id="root">
            <div className="application">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
