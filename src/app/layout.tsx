import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD WASIULLAH | Creative Developer & AI Engineer",
  description: "Portfolio of MD WASIULLAH - Computer Science Engineering Student specializing in AI/ML and Web Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#050505] text-white selection:bg-[#0050FF] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
