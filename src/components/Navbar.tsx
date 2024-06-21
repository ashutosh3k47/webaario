"use client";


import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

import Image from "next/image";
import Logo from "@/app/images/logo.png";



function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ", className)}
    >

        
        <Menu setActive={setActive} >

        <div className="flex items-left mb-4 ">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={40} height={50} />
        </Link>
      </div>


            
            <a href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </a>
       
        <Link href={"#about"}>
        <MenuItem setActive={setActive} active={active} item="About us">
         
        </MenuItem>
        </Link>

        
        <a href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact us">
        </MenuItem>
        </a>
        

        </Menu>

    </div>
  );
}

export default Navbar
