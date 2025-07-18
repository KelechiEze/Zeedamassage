import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins font from Google Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // You can adjust weights as needed
});

export const metadata: Metadata = {
  title: "Zeedaa Bliss",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
