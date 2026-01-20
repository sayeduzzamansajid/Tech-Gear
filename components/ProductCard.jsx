import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ id, name, description, price, image }) {
  const shortDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <Link
            href={`/items/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
