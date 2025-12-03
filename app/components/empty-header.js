import Image from "next/image";
import LogoutButton  from "./LogoutButton";

export default function EmptyHeader({ onLogout }) {
  return (
    <div className="container">
      <header className="w-full bg-white py-4 px-6 shadow sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between">
        {/* Left: Logo */}
        <Image src="/sait-logo.png" alt="Logo" height={36} width={131} />

        {/* Right: Logout Button */}
        <LogoutButton/>
      
      </header>
    </div>
  );
}
