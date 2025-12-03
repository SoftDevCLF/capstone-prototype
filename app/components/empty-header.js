import Image from "next/image";
export default function EmptyHeader() {
  return (
    <div className="container">
      <header className="w-full bg-white py-4 px-6 shadow sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <Image src="/sait-logo.png" alt="Logo" height={36} width={131} />
      </header>
    </div>
  );
}
