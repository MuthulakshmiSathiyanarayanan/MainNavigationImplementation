// app/c/[category]/page.tsx (or .js)
import { Product } from '@/app/components/type'; // Ensure this import path is correct
import ProductDetail from './productDetail';
// Function to fetch products by category
async function fetchProducts(productId:number) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data: Product[] = await response.json();
  // console.log(data);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  // console.log(data);
  return [data];
 
}
// Server-side component for the category page
export default async function ProductPage({ params }: { params: { productId:number} }) {
  try {
    const products = await fetchProducts(params.productId);
  //  console.log(products);

    if (products.length === 0) {
      return <p>No products found for this category.</p>;
    }
    return (
      <div>
        {products?.map((e) => (
          <ProductDetail{...e} />
       ))}
      </div>
    );
    
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong </p>;
  }
}
