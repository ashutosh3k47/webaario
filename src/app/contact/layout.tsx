import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import Link from "next/link";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">

          <Navbar/>
        </div>
        <div className="relative w-full flex items-center justify-center">

          <Form />
        </div>

        <div className="relative items-center justify-center ">
        
        <Footer />
        </div>

        
        
        {children}</body>
    </html>
  );
}
