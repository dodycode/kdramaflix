import React, { useEffect, useState } from 'react';

import Logo from "@/images/logo.png";
import NavbarItems from './NavbarItems';

const Navbar: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 5) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      w-full 
      fixed 
      z-40 
      transition 
      duration-500  
      py-[18px]
      ${showBackground ? "bg-black bg-opacity-50" : "bg-up-gradient"}
    `}>
      <div className="container flex items-center">
        <img className="h-4 lg:h-7" src={Logo.src} alt="Kdrama Flix" />
        <NavbarItems />
      </div>
    </nav>
  );
};

export default Navbar;