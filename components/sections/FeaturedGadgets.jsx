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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smartphones */}
          <div className="bg-white rounded-xl shadow-md shadow-gray-400 p-6 hover:shadow-xl hover:-translate-y-1 transition">
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
          <div className="bg-white rounded-xl shadow-md shadow-gray-400  p-6 hover:shadow-xl hover:-translate-y-1 transition">
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
          <div className="bg-white rounded-xl shadow-md shadow-gray-400  p-6 hover:shadow-xl hover:-translate-y-1 transition">
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

          {/* camera  */}
          <div className="bg-white rounded-xl shadow-md shadow-gray-400  p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 7h3l2-3h8l2 3h3v12H3V7zM12 11a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-black">Cameras</h3>
            <p className="text-gray-600 mb-4">
              Professional cameras for photography, vlogging, and cinematic video creation.
            </p>

            <ul className="text-sm text-gray-500 space-y-1 mb-5">
              <li>• DSLR & mirrorless options</li>
              <li>• 4K / 8K video support</li>
              <li>• Advanced autofocus systems</li>
            </ul>

            <Link href="/items" className="font-semibold text-blue-600 hover:text-blue-700">
              Browse Cameras →
            </Link>
          </div>

          {/* Drone  */}
          <div className="bg-white rounded-xl shadow-md shadow-gray-400  p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v8m-4-4h8M4 12h4m8 0h4M6 6l3 3m6-3l-3 3m0 6l3 3m-6-3l-3 3" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-black">Drones</h3>
            <p className="text-gray-600 mb-4">
              Capture cinematic aerial footage with intelligent flight control and stabilization.
            </p>

            <ul className="text-sm text-gray-500 space-y-1 mb-5">
              <li>• 4K & HDR video recording</li>
              <li>• GPS & obstacle avoidance</li>
              <li>• Long flight battery life</li>
            </ul>

            <Link href="/items" className="font-semibold text-blue-600 hover:text-blue-700">
              Explore Drones →
            </Link>
          </div>

          {/* Headphones  */}
          <div className="bg-white rounded-xl shadow-md shadow-gray-400  p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 18V6a3 3 0 016 0v12M6 18h3M15 18h3" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-black">Headphones</h3>
            <p className="text-gray-600 mb-4">
              Premium sound engineered for comfort, clarity, and deep immersive bass.
            </p>

            <ul className="text-sm text-gray-500 space-y-1 mb-5">
              <li>• Active noise cancellation</li>
              <li>• Wireless & low-latency modes</li>
              <li>• All-day battery performance</li>
            </ul>

            <Link href="/items" className="font-semibold text-blue-600 hover:text-blue-700">
              Shop Headphones →
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
