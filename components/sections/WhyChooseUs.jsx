export default function WhyChooseUs() {
  const features = [
    {
      title: 'Premium Quality',
      description: 'We only stock products from trusted brands and verified suppliers',
      icon: '⭐',
    },
    {
      title: 'Fast Shipping',
      description: 'Get your orders delivered quickly with our express shipping options',
      icon: '🚚',
    },
    {
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and special offers',
      icon: '💰',
    },
    {
      title: '24/7 Support',
      description: 'Our customer service team is always ready to help you',
      icon: '💬',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tech-Gear?</h2>
          <p className="text-gray-600 text-lg">We're committed to providing the best shopping experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
