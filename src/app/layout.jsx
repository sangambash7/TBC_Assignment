"use client";
import "./global.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="application">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
