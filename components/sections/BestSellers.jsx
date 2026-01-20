import Link from 'next/link';

export default function BestSellers() {
  const bestSellers = [
    { name: 'iPhone 15 Pro Max', price: '$1,199', image: '📱' },
    { name: 'MacBook Pro 16"', price: '$2,499', image: '💻' },
    { name: 'Sony WH-1000XM5', price: '$399', image: '🎧' },
    { name: 'iPad Pro 12.9"', price: '$1,099', image: '📱' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-gray-600 text-lg">Our most popular products this month</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 text-center">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600 text-center mb-4">{product.price}</p>
              <Link
                href="/items"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/items"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
