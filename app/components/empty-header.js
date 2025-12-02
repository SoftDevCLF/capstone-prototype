import Image from "next/image";
export default function EmptyHeader() {
  return (
    <header className="w-full bg-white py-4 px-6 shadow">
      <Image src="/sait-logo.png" alt="Logo" height={36} width={131} />
    </header>
  );
}
