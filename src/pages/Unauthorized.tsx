import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, you don’t have permission to view this page.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-2 rounded-lg bg-[#ff2056] text-white font-medium shadow hover:bg-[#e01c4c] transition"
            >
              Go Home
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
