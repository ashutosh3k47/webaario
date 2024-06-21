import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Typewriter from "@/components/Typewriter";
import Globe from "@/components/Globe";
import Scroll from "@/components/Scroll";
import Services from "@/components/Services";
import Customer from "@/components/Customer";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Teambg from "@/components/Teambg";
import Form from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webaario",
  description: "Online platform to boost brands",
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
        <div id="home" className="relative w-full flex items-center justify-center">

          <Hero />
        </div>
        <div className="relative items-center justify-center ">

          <Typewriter />
        </div>

        <div id="about" className="relative items-center justify-center flex ">
        <Globe />
        <Scroll />
        </div>


        <div className="relative items-center justify-center ">
        <Services />
        </div>

        

        
        <div className="relative items-center justify-center ">
          <Teambg />
          
          </div>

          <div className="relative items-center justify-center ">
        
          <Footer />
          </div>
        
        {children}</body>
    </html>
  );
}
