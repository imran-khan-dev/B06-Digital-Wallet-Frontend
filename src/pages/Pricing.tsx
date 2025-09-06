export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0 BDT",
      features: [
        "Basic Wallet Access",
        "Send & Receive Money",
        "Transaction History",
      ],
      cta: "/register",
      bg: "bg-white",
      textColor: "text-gray-900",
    },
    {
      name: "Premium",
      price: "500 BDT / month",
      features: [
        "Everything in Free",
        "Priority Support",
        "Higher Transfer Limits",
        "Advanced Analytics",
      ],
      cta: "/register",
      bg: "bg-[#ff2056]/10",
      textColor: "text-[#ff2056]",
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Custom Solutions",
        "Dedicated Account Manager",
        "Team Wallets",
        "Advanced Security Features",
      ],
      cta: "/contact",
      bg: "bg-white",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-600 sm:text-xl mb-12">
          Choose a plan that fits your needs. Whether you’re an individual or a
          business, we’ve got you covered.
        </p>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-md p-6 flex flex-col justify-between ${plan.bg}`}
            >
              {/* Plan Name */}
              <h2 className={`text-2xl font-semibold mb-4 ${plan.textColor}`}>
                {plan.name}
              </h2>

              {/* Price */}
              <p className={`text-3xl font-bold mb-6 ${plan.textColor}`}>
                {plan.price}
              </p>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-gray-700 text-sm">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.cta}
                className={`inline-block w-full text-center px-4 py-3 rounded-lg font-medium shadow ${
                  plan.name === "Premium"
                    ? "bg-[#ff2056] text-white hover:bg-[#e01c4c]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                } transition`}
              >
                {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
