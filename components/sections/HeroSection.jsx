import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="text-blue-600 tracking-widest text-sm font-semibold">
              LIMITED OFFER
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Upgrade Your Tech <br />
              with{" "}
              <span className="bg-gradient-to-r from-white to-blue-900 bg-clip-text text-transparent">
                Tech-Gear
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Get up to <span className="text-blue-600 font-semibold">50% off</span>{" "}
              on premium gadgets and accessories today only.
            </p>

            <Link
              href="/items"
              className="inline-block mt-8 bg-gradient-to-r from-black to-blue-900 px-8 py-3 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full ml-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Find Products for You
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Choose options to get exact matches
            </p>

            <div className="space-y-4 ">
              {[
                "Choose Category",
                "Choose Brand",
                "Choose Model",
                "Choose Variant",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border rounded-lg px-4 py-3 text-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-black to-blue-900 text-sm font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </div>
                  <span>⌄</span>
                </div>
              ))}

              <button className="w-full mt-4 text-white bg-gradient-to-r from-black to-blue-900 hover:bg-yellow-300 font-semibold py-3 rounded-lg transition">
                🔍 Search Products
              </button>

              <p className="text-xs text-center text-gray-400 mt-2">
                Fast results • Perfect fit • Trusted quality
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
