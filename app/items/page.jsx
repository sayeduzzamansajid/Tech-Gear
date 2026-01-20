import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/api';

export default async function ItemsPage() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover our complete collection of premium gadgets</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found.</p>
            <p className="text-gray-400 mt-2">Make sure the backend server is running on port 3001</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
