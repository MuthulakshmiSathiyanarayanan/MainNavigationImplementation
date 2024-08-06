
import { Product } from '@/app/components/type';
import ProductDetail from '@/app/p/[productId]/productDetails';

async function fetchCart(productId: number) {
  console.log(productId);
  const response = await fetch(`https://fakestoreapi.com/carts/user/${productId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch cart data');
  }
  return data;
}

// Server-side component for the cart page
export default async function CartPage({ params }: { params: { productID: number } }) {
  try {
    console.log(params);
    const cartItems = await fetchCart(params.productID);

    if (cartItems.length === 0) {
      return <p>No items in your cart.</p>;
    }

    return (
      <div>
        <ProductDetail productData={cartItems} />
      </div>
    );
    
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return <p>Something went wrong</p>;
  }
}