import { Link } from "react-router";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Empowering Your Money,{" "}
          <span className="text-[#ff2056]">Anytime, Anywhere</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Our Digital Wallet makes managing your money simple, fast, and secure.
          Send and receive payments instantly, track your balance, and enjoy a
          safe digital wallet experience — all in one place.
        </p>

        {/* Features */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="bg-[#ff2056]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#ff2056] mb-2">
              Instant Transfers
            </h3>
            <p className="text-gray-700 text-sm">
              Send money securely to anyone, anytime.
            </p>
          </div>
          <div className="bg-[#ff2056]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#ff2056] mb-2">
              Easy Management
            </h3>
            <p className="text-gray-700 text-sm">
              Track balances and transactions effortlessly.
            </p>
          </div>
          <div className="bg-[#ff2056]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#ff2056] mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-700 text-sm">
              We are always here to help you when needed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/register"
            className="inline-block bg-[#ff2056] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#e01c4c] transition"
          >
            Create Wallet
          </Link>
          <Link
            to="/features"
            className="inline-block border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 shadow hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
