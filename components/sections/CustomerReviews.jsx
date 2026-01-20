export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service and fast delivery! The product quality exceeded my expectations.',
      role: 'Tech Enthusiast',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best place to buy gadgets online. Great prices and excellent customer support.',
      role: 'Software Developer',
    },
    {
      name: 'Emily Davis',
      rating: 5,
      comment: 'I\'ve been shopping here for months. Always satisfied with my purchases!',
      role: 'Designer',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-gray-600 text-lg">See what our customers are saying</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
