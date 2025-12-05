"use client";

import Image from "next/image";
import LogoutButton  from "./LogoutButton";
import { usePathname } from "next/navigation";

export default function EmptyHeader() {
  const pathname = usePathname(); // get current URL path
  const isLoginPage = pathname === "/login"; // adjust if your login path is different

  return (
     <header className="w-full bg-white py-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between">
      <Image src="/sait-logo.png" alt="Logo" height={36} width={131} />

        {/* Only show logout button if NOT on the login page */}
        {!isLoginPage && <LogoutButton />}
      
      </header>
  );
}
