'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth-client';
import { createProduct } from '@/lib/api';

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });
  const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const auth = await isAuthenticated();
    if (!auth) router.push('/login');
    else setAuthChecked(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecChange = (index, key, value) => {
    setSpecs((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
  };

  const addSpecField = () => setSpecs((prev) => [...prev, { name: '', value: '' }]);
  const removeSpecField = (index) => setSpecs((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      const filteredSpecs = specs.filter((s) => s.name.trim() && s.value.trim());
      await createProduct({
        ...formData,
        price: parseFloat(formData.price),
        specs: filteredSpecs,
      });

      setSuccess(true);
      setFormData({ name: '', description: '', price: '', image: '' });
      setSpecs([]);
      setTimeout(() => router.push('/items'), 2000);
    } catch {
      setError('Failed to create product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!authChecked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-900">
        <p className="text-white/70">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Add New Product
          </h1>

          {success && (
            <div className="mb-6 bg-green-700/20 border border-green-400 text-green-200 px-4 py-3 rounded-lg text-center">
              Product created successfully! Redirecting...
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-700/20 border border-red-400 text-red-200 px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                Product Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., iPhone 15 Pro Max"
                required
                className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white/90 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                required
                placeholder="Enter product description..."
                className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            {/* Price & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-white/90 mb-2">
                  Price ($) *
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g., 999.99"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-white/90 mb-2">
                  Image URL *
                </label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Specifications */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-white/90">
                  Specifications (Optional)
                </label>
                <button
                  type="button"
                  onClick={addSpecField}
                  className="text-sm text-blue-400 hover:text-blue-500 font-medium"
                >
                  + Add Spec
                </button>
              </div>

              {specs.map((spec, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Spec name"
                    value={spec.name}
                    onChange={(e) => handleSpecChange(index, 'name', e.target.value)}
                    className="flex-1 px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                  <input
                    type="text"
                    placeholder="Spec value"
                    value={spec.value}
                    onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                    className="flex-1 px-4 py-2 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpecField(index)}
                    className="px-4 py-2 bg-red-700/20 text-red-200 rounded-lg hover:bg-red-600/30 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-black to-blue-900 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Product...' : 'Create Product'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/items')}
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
