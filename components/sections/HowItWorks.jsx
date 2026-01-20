export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Browse Products",
      description: "Explore our wide range of gadgets by categories or featured collections.",
      icon: "📱",
    },
    {
      step: "02",
      title: "Add to Cart",
      description: "Select your desired items and add them to your secure shopping cart.",
      icon: "🛒",
    },
    {
      step: "03",
      title: "Fast Checkout",
      description: "Proceed to checkout with our simple and safe payment options.",
      icon: "💳",
    },
    {
      step: "04",
      title: "Receive & Enjoy",
      description: "Get your gadgets delivered quickly and enjoy the latest technology.",
      icon: "🎁",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tl from-black to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
          <p className="text-gray-300 text-lg">
            Shopping at Tech-Gear is straightforward. Just follow these 4 simple steps to get your favorite gadgets.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur rounded-xl p-8 text-center border border-white/10 hover:border-blue-500/40 hover:shadow-lg transition">
              
              {/* Icon */}
              <div className="text-5xl mb-4 text-blue-400">{step.icon}</div>
              
              {/* Step Number */}
              <div className="text-sm text-blue-400 font-bold mb-2">{step.step}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
