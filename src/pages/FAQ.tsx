export default function FAQPage() {
  const faqs = [
    {
      question: "What is Digital Wallet and how does it work?",
      answer:
        "A digital wallet allows you to store, send, and receive money online safely and instantly. You can pay merchants, transfer money to other users, and manage your balance easily.",
    },
    {
      question: "Is my money safe in the wallet?",
      answer:
        "Yes! Our digital wallet uses advanced encryption and secure authentication methods to ensure your money is protected at all times.",
    },
    {
      question: "How can I top up or withdraw money?",
      answer:
        "You can add money to your wallet via bank transfer, card, or agent cash-in. Withdrawals can be made to your bank account or through authorized agents.",
    },
    {
      question: "Are there any fees for transactions?",
      answer:
        "Most transactions are free, but some transfers or withdrawals may incur small fees. Check the pricing section for detailed information.",
    },
    {
      question: "Can I use the wallet internationally?",
      answer:
        "Currently, the wallet is limited to local transactions, but we are working on expanding international support soon.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden rounded-md border border-gray-100 bg-gray-50"
            >
              <summary className="flex items-center justify-between gap-1.5 p-4 cursor-pointer text-gray-900">
                <h2 className="text-lg font-medium">{faq.question}</h2>

                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="px-4 pt-4 pb-4 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
