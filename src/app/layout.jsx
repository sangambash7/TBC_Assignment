import "../index.css";

export const metadata = {
  title: "TBC Assignment",
  description: "TBC Assignment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
