// 'use client';

import './globals.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  // if (!routing.locales.includes(locale)) {
  //   notFound();
  // }

  const messages = await getMessages();
  return (
    <html lang={locale}>
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
              <NextIntlClientProvider messages={messages}>
                <Header />
                {children}
                <Footer />
              </NextIntlClientProvider>
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
