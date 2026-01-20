export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Premium Quality",
      description:
        "Every product comes from trusted brands and authorized suppliers. Each item undergoes quality checks to ensure durability, performance, and authenticity.",
      icon: "⭐",
      points: ["Original products only", "Brand warranty included", "Strict quality checks"],
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "We process orders quickly and partner with reliable courier services to ensure safe and timely delivery to your doorstep.",
      icon: "🚚",
      points: ["Quick order processing", "Secure packaging", "Nationwide delivery"],
    },
    {
      title: "Transparent & Fair Pricing",
      description:
        "No hidden charges. No fake discounts. Enjoy the best value with honest pricing, seasonal deals, and exclusive member offers.",
      icon: "💰",
      points: ["Competitive market prices", "Regular discounts", "Best value guarantee"],
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Have questions or issues? Our support team is available to guide you before and after your purchase.",
      icon: "💬",
      points: ["Pre-purchase assistance", "After-sales support", "Quick response time"],
    },
  ];

  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "150+", label: "Premium Brands" },
    { value: "10000+", label: "Products Sold" },
    { value: "99%", label: "Positive Reviews" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-medium 
                           bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold mb-4">Why Choose Tech-Gear?</h2>
          <p className="text-gray-300 text-lg">
            Quality, trust, and long-term value—so you can shop confidently and enjoy your gadgets worry-free.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-xl p-6 text-center 
                         border border-white/10 hover:border-blue-500/40 
                         hover:bg-white/10 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4 text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-400 space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats / Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
