import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6 pt-24 text-center">
        <div>
          <p className="text-7xl font-extrabold text-blue-600">
            404
          </p>

          <h1 className="mt-5 text-4xl font-extrabold text-[#0F2747]">
            Page Not Found
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            This page appears to have wandered away from the construction site.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block bg-[#0F2747] px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;