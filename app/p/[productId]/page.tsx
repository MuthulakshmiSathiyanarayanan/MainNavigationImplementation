// app/c/[category]/page.tsx (or .js)
import Image from 'next/image';
import { Product } from '@/app/components/type'; // Ensure this import path is correct

// Function to fetch products by category
async function fetchProducts(productId:number) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data: Product[] = await response.json();
  // console.log(data);
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
  //  console.log(products);

    if (products.length === 0) {
      return <p>No products found for this category.</p>;
    }
    return (
      <div>
        <ul className="flex flex-col bg-[#e9e4ad]">
          {/* {products.map((product) => ( */}
            <li
              className="bg-[#cbd8e0] p-1 rounded-3xl mt-6"
            
            >
              <h1 className="flex  ml-[25px]">ID: {products.id}</h1>
              <Image
                className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                src={products.image}
                alt={products.title}
                width={180}
                height={180}
              />
              <p className="flex ml-[25px]">${products.price}</p>
              <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[25px] break-words flex flex-wrap justify-center max-w-[150px]">
                {products.title}
              </h2>
            </li>
           {/* ))} */}
        </ul>
      </div>
    );
    
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong </p>;
  }
}
