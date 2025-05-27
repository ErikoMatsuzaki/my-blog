import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "モダンなブログ | 日常とIT技術の記録",
  description: "日常の出来事やIT技術に関する記事を発信するブログサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-gray-800">My Blog</a>
              <div className="flex gap-4">
                <a href="/" className="text-gray-600 hover:text-gray-900">ホーム</a>
                <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="bg-white border-t mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} My Blog. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
