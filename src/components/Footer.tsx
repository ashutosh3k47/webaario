import React from 'react'
import Image from "next/image";
import Logo from "@/app/images/logo.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black-800 text-white pt-16 pb-8">
        
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 px-4 flex flex-col">
        <Image src={Logo} alt="Logo" width={70} height={50} />
          <h3 className="text-xl font-bold mb-6">Webaario</h3>
          <ul className="list-none md:inline-flex">
            <li className="mr-4">
              <div className="text-base hover:text-gray-400">
              Embark on your brands journey with Webaario, <br /> where excellence begins
              </div>
            </li>
           
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-6">Quick link</h3>
          <ul className="list-none flex flex-col ">
            {/* <li className="mr-4">
              <a className="text-base hover:text-gray-400" href="#">
                Home
              </a>
            </li> */}
            <li className="mr-4">
              <a className="text-base hover:text-gray-400" href="/contact">
                Contact us
              </a>
            </li>
            {/* <li className="mr-4">
              <a className="text-base hover:text-gray-400" href="#">
                About us
              </a>
            </li> */}
            <li className="mr-4">
              <a className="text-base hover:text-gray-400" href="tel:7903363881">
                Call us
              </a>
            </li>
            <li className="mr-4">
              <a className="text-base hover:text-gray-400" href="mailto:ashutosh3k47@gmail.com">
                Mail us
              </a>
            </li>   
          </ul>
        </div>
        
        
        
      </div>
      
    </footer>
  )
}

export default Footer
