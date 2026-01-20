const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/items`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProduct(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/items/${id}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function createProduct(product) {
  const res = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  
  if (!res.ok) {
    throw new Error('Failed to create product');
  }
  
  return res.json();
}
