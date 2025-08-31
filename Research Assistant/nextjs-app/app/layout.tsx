import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Research Assistant",
  description: "AI-powered research assistant to support your studies and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="navbar">
          <nav className="nav-container">
            <h1 className="logo">Research Assistant</h1>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main">{children}</main>

        {/* Footer */}
        <footer className="footer">
          © 2025 Research Assistant. Built with ❤️ using Next.js.
        </footer>
      </body>
    </html>
  );
}
