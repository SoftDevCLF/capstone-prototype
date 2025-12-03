import Header from "../components/empty-header";
import Navbar from "../components/nav-bar";
import Footer from "../components/footer";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Navbar />

      <main className="grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-10 flex justify-center">
          <LoginForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
