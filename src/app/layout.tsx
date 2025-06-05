import type { Metadata } from "next";
import { Geist, Geist_Mono, Rock_3D } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rock3D = Rock_3D({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock3d",
});

export const metadata: Metadata = {
  title: "Mi portafolio",
  description: "Mi portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rock3D.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
