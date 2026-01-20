export default function Categories() {
  const categories = [
    { name: 'Smartphones', icon: '📱', count: '50+' },
    { name: 'Laptops', icon: '💻', count: '30+' },
    { name: 'Tablets', icon: '📱', count: '20+' },
    { name: 'Wearables', icon: '⌚', count: '25+' },
    { name: 'Audio', icon: '🎧', count: '40+' },
    { name: 'Accessories', icon: '🔌', count: '60+' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} products</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
