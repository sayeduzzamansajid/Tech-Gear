import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Smartphones",
      icon: "📱",
      count: "50+",
      description: "Flagship & budget-friendly phones",
      slug: "smartphones",
    },
    {
      name: "Laptops",
      icon: "💻",
      count: "30+",
      description: "Powerful machines for work and creativity",
      slug: "laptops",
    },
    {
      name: "Tablets",
      icon: "📲",
      count: "20+",
      description: "Portable productivity devices",
      slug: "tablets",
    },
    {
      name: "Wearables",
      icon: "⌚",
      count: "25+",
      description: "Smartwatches & fitness trackers",
      slug: "wearables",
    },
    {
      name: "Audio",
      icon: "🎧",
      count: "40+",
      description: "Headphones & speakers",
      slug: "audio",
    },
    {
      name: "Accessories",
      icon: "🔌",
      count: "60+",
      description: "Chargers, cables & essential gadgets",
      slug: "accessories",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tl from-black to-blue-900 text-white ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-medium 
                           bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
            Browse by Category
          </span>
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-300 text-lg">
            Quickly find the right gadgets for productivity, entertainment, 
            or everyday digital life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/items?category=${category.slug}`}
              className="group bg-white/5 backdrop-blur rounded-xl p-6 
                         border border-white/10 hover:border-blue-500/40
                         hover:bg-white/10 transition cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              {/* Name */}
              <h3 className="font-semibold text-white mb-1">{category.name}</h3>
              {/* Description */}
              <p className="text-gray-400 text-sm mb-2">{category.description}</p>
              {/* Count */}
              <span className="text-xs text-blue-400 font-medium">
                {category.count} products
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">
            Want to explore everything Tech-Gear offers?
          </p>
          <Link
            href="/items"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white 
                       px-8 py-3 rounded-lg font-semibold transition"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
