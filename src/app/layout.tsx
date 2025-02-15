import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Portfolio - Full Stack Developer",
  description: "Personal portfolio showcasing my work and skills as a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-black/[.08] dark:border-white/[.145]">
          <nav className="max-w-4xl mx-auto p-6 flex justify-between items-center">
            <h1 className="font-bold">Your Name</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
