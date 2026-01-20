import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchProduct } from '@/lib/api';

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const product = await fetchProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {product.specs && Object.keys(product.specs).length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">Specifications</h2>
                  <dl className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex border-b border-gray-200 pb-2">
                        <dt className="font-medium text-gray-700 w-1/3 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </dt>
                        <dd className="text-gray-600 flex-1">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
