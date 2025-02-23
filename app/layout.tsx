import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishim Singhi",
  description: "Portfolio - Nishim Singhi",
  icons: {
    icon: [
      {
        url: "/images/logo.ico",
        sizes: "256x256",
        type: "image/x-icon",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-bodyColor to-[#00212c] animate-gradient bg-[200%_auto]`}>
      {children}
      </body>
    </html>
  );
}
