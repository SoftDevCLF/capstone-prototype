import Image from "next/image";
export default function EmptyHeader() {
  return (
    <header className="w-full bg-white py-4 px-6 shadow flex justify-between items-center">
      <Image src="/sait-logo.png" alt="Logo" height={36} width={131} />
      
      {/* Right Logout Button */}
      <button className="text-white bg-[#005EB8] border-white border px-4 py-1 rounded hover:bg-[#004D96] transition">
        Logout
      </button>
    </header>
  );
}
