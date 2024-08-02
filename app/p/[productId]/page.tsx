// app/c/[category]/page.tsx (or .js)
import Image from 'next/image';
import { Product,ProductDetailsProps} from '@/app/components/type'; 
import ProductDetail from './productDetails'

// Function to fetch products by category
async function fetchProducts(productId: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data: Product = await response.json();
   console.log(data);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  // console.log(data);
  return data;
 
}
// Server-side component for the category page
export default async function ProductPage({ params }: { params: { productId:number} }) {
  try {
    const products = await fetchProducts(params.productId);
    console.log("----products---",products);


    if (Object.keys(products).length === 0) {
      return <p>No products found for this category.</p>;
    }
    return (
      <div>
   <ProductDetail productData={products} />

      </div>
    );
    
    
  }
  catch (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong </p>;
  }
}
