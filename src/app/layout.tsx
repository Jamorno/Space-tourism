import type { Metadata } from "next";
import { Barlow, Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow-sans",
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellefair-sans",
  weight: ["400"]
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "space tourism",
  description: "By jamorn suttipong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${bellefair.variable} ${barlowCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
