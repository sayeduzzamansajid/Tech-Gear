// app/faq/page.jsx

export const metadata = {
    title: "FAQ | Tech-Gear Help Center",
    description: "Frequently asked questions about Tech-Gear",
  };
  
  const faqs = [
    {
      question: "Do I need an account to buy products?",
      answer:
        "No, you can browse products freely. An account is required only for adding items.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "Currently, this is a demo project. Payment features are not implemented.",
    },
    {
      question: "How do I add a new product?",
      answer:
        "You must be logged in. Then go to the Add Item page from the dashboard.",
    },
    {
      question: "Are the products real?",
      answer:
        "No. This project is built for learning and demonstration purposes only.",
    },
  ];
  
  export default function FAQPage() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="bg-black text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-gray-300">
            Find answers to commonly asked questions
          </p>
        </section>
  
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
  
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border rounded-lg p-4"
              >
                <summary className="font-medium cursor-pointer">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    );
  }
  