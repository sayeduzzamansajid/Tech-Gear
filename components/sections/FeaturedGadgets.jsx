import Link from "next/link";

export default function FeaturedGadgets() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
            Featured Categories
          </span>
          <h2 className="text-4xl text-white font-bold mb-4">
            Featured Gadgets
          </h2>
          <p className="text-gray-200 text-lg">
            Handpicked premium tech designed to boost productivity, creativity,
            and everyday digital life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Smartphones */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Smartphones</h3>
            <p className="text-gray-600 mb-4">
              Experience flagship-level performance with stunning displays,
              advanced cameras, and long-lasting batteries.
            </p>
            <ul className="text-sm text-gray-500 mb-4 space-y-1">
              <li>✔ High-performance chipsets</li>
              <li>✔ Pro-grade camera systems</li>
              <li>✔ 5G & fast charging</li>
            </ul>
            <Link
              href="/items"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore Smartphones →
            </Link>
          </div>

          {/* Laptops */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Laptops</h3>
            <p className="text-gray-600 mb-4">
              Reliable machines built for developers, students, and creative
              professionals.
            </p>
            <ul className="text-sm text-gray-500 mb-4 space-y-1">
              <li>✔ Powerful processors</li>
              <li>✔ Lightweight & portable</li>
              <li>✔ Long battery life</li>
            </ul>
            <Link
              href="/items"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore Laptops →
            </Link>
          </div>

          {/* Audio Devices */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Audio Devices</h3>
            <p className="text-gray-600 mb-4">
              Immersive sound solutions for music, gaming, and productivity.
            </p>
            <ul className="text-sm text-gray-500 mb-4 space-y-1">
              <li>✔ Noise cancellation</li>
              <li>✔ Wireless connectivity</li>
              <li>✔ Studio-quality sound</li>
            </ul>
            <Link
              href="/items"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore Audio →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Not sure what you’re looking for?
          </p>
          <Link
            href="/items"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
