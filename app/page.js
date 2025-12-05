import Link from "next/link";
import { AuthContextProvider } from "./_utils/auth-context";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Capstone Prototype</h1>
      <Link href="login">Login</Link>
    </div>
  );
}
