'use client';

import { useState } from 'react';
import Image from 'next/image';
import newsletterImg from '../../app/assets/newsletter.jpg'; // Replace with your image path

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-24 bg-gradient-to-tl from-black to-blue-900 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Left Image */}
        <div className="flex-1 w-full">
          <Image
            src={newsletterImg}
            alt="Newsletter"
            className="rounded-xl shadow-2xl"
            width={600}
            height={600}
            priority
          />
        </div>

        {/* Right Form + Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-3xl md:text-[44px] font-extrabold mb-4 text-white drop-shadow-lg ">
            Stay Ahead of the Tech
          </h2>
          <p className="text-gray-300 text-sm md:text-[16px] mb-8">
            Subscribe to Tech-Gear’s newsletter to receive the latest gadget launches, tech insights, and exclusive deals delivered directly to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4  w-full max-w-[90%]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1  px-5 py-4 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
            >
              Subscribe
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <p className="mt-6 text-green-400 font-medium animate-pulse">
              🎉 Thank you for subscribing!
            </p>
          )}

          {/* Social Proof / Stats */}
          <div className="mt-12 flex flex-col sm:flex-row gap-10 text-gray-300 text-sm md:text-base justify-start lg:justify-start">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-bold text-blue-400">5,000+</span>
              <span>Subscribers</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-3xl font-bold text-purple-400">120+</span>
              <span>Weekly Tech Tips</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl md:text-2xl font-bold text-blue-400">🎁 Exclusive</span>
              <span>Deals & Launches</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-gray-400 text-sm max-w-md">
            By subscribing, you agree to our <span className="underline">Privacy Policy</span>. We respect your privacy and will never spam.
          </p>
        </div>
      </div>
    </section>
  );
}
