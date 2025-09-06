import { Link } from "react-router";

export default function Features() {
  const features = [
    {
      title: "Instant Transfers",
      description: "Send money securely to anyone, anywhere, in seconds.",
      icon: (
        <svg
          className="w-8 h-8 text-[#ff2056]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h7l1 2h7M21 14l-4 4-4-4"
          />
        </svg>
      ),
    },
    {
      title: "Secure Wallet",
      description:
        "State-of-the-art encryption and multi-factor authentication protect your funds.",
      icon: (
        <svg
          className="w-8 h-8 text-[#ff2056]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0-1.104.895-2 2-2s2 .896 2 2-2 4-2 4-2-2.896-2-4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 20h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Manage Transactions",
      description:
        "Track all your transactions, balances, and payments in one place.",
      icon: (
        <svg
          className="w-8 h-8 text-[#ff2056]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 6h18M3 14h18M3 18h18"
          />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to help you with any issue.",
      icon: (
        <svg
          className="w-8 h-8 text-[#ff2056]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 10v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Features of <span className="text-[#ff2056]">Our Digital Wallet</span>
        </h1>
        <p className="text-lg text-gray-600 sm:text-xl mb-12">
          Discover why thousands of users trust us for safe and fast digital
          transactions.
        </p>

        {/* Features grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#ff2056]/10 p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#ff2056] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            to="/register"
            className="inline-block bg-[#ff2056] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#e01c4c] transition"
          >
            Create Wallet
          </Link>
        </div>
      </div>
    </section>
  );
}
