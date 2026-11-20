
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={inter.className}>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              ⚓ ShipYard
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/#Sneakers">Sneakers</Link>
              <Link href="/#Audio">Audio</Link>
              <Link href="/#Wearables">Wearables</Link>
              <Link href="/#Gadgets">Gadgets</Link>
            </div>
            <span className="nav-cart">🛒</span>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>Built with Next.js. ShipYard is a demo storefront.</p>
        </footer>
      </body>
    </html>
  );
}
