import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipYard",
  description: "Gear for people who build, run, and explore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="nav-brand">
            ⚓ ShipYard
          </Link>
        </nav>
        {children}
        <footer className="footer">
          <p>Built with Next.js. ShipYard is a demo storefront.</p>
        </footer>
      </body>
    </html>
  );
}
