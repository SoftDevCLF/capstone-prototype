"use client";
import Image from "next/image";
import Logo from "../src/saitlogo.png";

function TopBar() {
  return (
    <header className="bg-white border-b-30 border-[#A6192E] flex justify-between items-center px-6 py-3">
      {/* Left side: Logo*/}
      <div className="flex items-center gap-3">
        <Image 
          src={Logo} 
          alt="SAIT Logo" 
          width={80}   
          height={80}  
        />
      </div>

      {/* Logout Button */}
      <button className="text-white bg-[#005EB8] border-white border px-4 py-1 rounded hover:bg-[#004D96] transition">
        Logout
      </button>
    </header>
    
  );
}

export default TopBar;

