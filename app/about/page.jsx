// app/about/page.jsx

import Link from "next/link";

export const metadata = {
    title: "About Us | Tech-Gear",
    description: "Learn more about Tech-Gear – your trusted gadget shop",
  };
  
  export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-500">Tech-Gear</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powering your digital lifestyle with cutting-edge gadgets,
              reliability, and innovation.
            </p>
          </div>
        </section>
  
        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Tech-Gear was founded with a simple mission: to make modern
                technology accessible to everyone. From smartphones and laptops
                to everyday accessories, we curate products that balance
                performance, quality, and value.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li>✔ Trusted gadget marketplace</li>
                <li>✔ Quality-checked products</li>
                <li>✔ Customer-first approach</li>
                <li>✔ Constantly evolving tech lineup</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Why Choose Tech-Gear?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">Latest Technology</h3>
                <p className="text-gray-600">
                  We bring you the newest and most reliable gadgets on the market.
                </p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">Secure & Trusted</h3>
                <p className="text-gray-600">
                  Your trust matters. We focus on transparency and secure
                  transactions.
                </p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-xl font-medium mb-2">Customer Support</h3>
                <p className="text-gray-600">
                  Dedicated support to help you choose the right gear.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission & Vision */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To simplify technology shopping by offering reliable gadgets,
                honest pricing, and a seamless user experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
              <p className="text-gray-600">
                To become a go-to digital marketplace for tech enthusiasts and
                everyday users alike.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-black text-white py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to explore the future?
            </h2>
            <p className="text-gray-300 mb-6">
              Discover the latest gadgets curated just for you.
            </p>
            <Link
              href="/items"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </main>
    );
  }
  