"use client";
import "./global.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/Login";

  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="application">
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
          </div>
        </div>
      </body>
    </html>
  );
}
