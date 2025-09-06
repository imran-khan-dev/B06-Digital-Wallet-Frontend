export default function HeroSection() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Your Money,{" "}
            <span className="text-[#ff2056]">Simplified & Secure</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base text-gray-600 sm:text-lg/relaxed">
            Send, receive, and manage your money instantly with our trusted
            digital wallet. Fast, safe, and designed for you.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              className="inline-block rounded-lg bg-[#ff2056] px-6 py-3 font-medium text-white shadow hover:bg-[#e01c4c] transition"
              href="/register"
            >
              Create Wallet
            </a>
            <a
              className="inline-block rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 shadow hover:bg-gray-100 transition"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
