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
      comment: "I've been shopping here for months. Always satisfied with my purchases!",
      role: 'Designer',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-black to-blue-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-medium 
                           bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
            Customer Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Hear directly from satisfied shoppers who trust Tech-Gear for their gadgets.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-500/40 hover:shadow-lg transition">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl drop-shadow-lg">⭐</span>
                ))}
              </div>
              {/* Comment */}
              <p className="text-gray-300 mb-4 italic">&quot;{review.comment}&quot;</p>
              {/* Name & Role */}
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
