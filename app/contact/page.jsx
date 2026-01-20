// app/contact/page.jsx

export const metadata = {
    title: "Contact Us | Tech-Gear",
    description: "Get in touch with Tech-Gear support and team",
  };
  
  export default function ContactPage() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <section className="bg-black text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300">
            Have questions? We’d love to hear from you.
          </p>
        </section>
  
        {/* Contact Content */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Reach out to us for product inquiries, support, or general questions.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>📧 Email: support@techgear.com</li>
              <li>📞 Phone: +880 1234 567 890</li>
              <li>📍 Location: Dhaka, Bangladesh</li>
              <li>🕒 Support Hours: 9 AM – 6 PM</li>
            </ul>
          </div>
  
          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border px-4 py-2 rounded"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Send Message
            </button>
          </form>
        </section>
      </main>
    );
  }
  