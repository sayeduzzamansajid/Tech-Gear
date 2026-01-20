// app/blog/page.jsx

export const metadata = {
    title: "Tech Insights | Tech-Gear Blog",
    description: "Latest tech news, guides, and gadget insights",
  };
  
  const posts = [
    {
      id: 1,
      title: "Top 5 Gadgets Every Developer Should Own",
      excerpt:
        "Boost productivity with these essential gadgets for developers.",
      date: "Jan 2026",
    },
    {
      id: 2,
      title: "Laptop Buying Guide for Students",
      excerpt:
        "Everything you need to know before buying a laptop as a student.",
      date: "Dec 2025",
    },
    {
      id: 3,
      title: "Why Tech Accessories Matter More Than You Think",
      excerpt:
        "Small accessories can make a big difference in daily workflow.",
      date: "Nov 2025",
    },
  ];
  
  export default function BlogPage() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <section className="bg-black text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Tech Insights</h1>
          <p className="text-gray-300">
            Latest news, guides, and articles from Tech-Gear
          </p>
        </section>
  
        {/* Blog Posts */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white border rounded-lg p-6 hover:shadow transition"
              >
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-blue-600 font-medium">
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  