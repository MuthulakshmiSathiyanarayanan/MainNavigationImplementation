'use client';
import { Metadata } from 'next';
import Image from 'next/image';
import { Product,Props } from '@/app/components/type';

// Function to fetch products by category
async function fetchProducts(category: string,sort:string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data: Product[] = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  if (sort === 'price-asc') {
    data.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    data.sort((a, b) => b.price - a.price);
  }
  return data;
}
// Server-side component for the category page
export default async function CategoryPage({ params,searchParams }:Props) {
    const { category } = params;
  const sort = searchParams.sort || 'price-asc';
  try {
    const products:Product[] = await fetchProducts(category,sort);
    
    if (products.length === 0) {
      return <p>No products found for this category.</p>;
    }

    return (
      <div>
          <div className="mb-4">
        {/* Sorting options could be managed on the client side if needed */}
        <p>Sorted by: {sort === 'price-asc' ? 'Price: Low to High' : 'Price: High to Low'}</p>
      </div>
        <ul className="auto grid grid-cols-3 gap-10 bg-[#667685]">
          {products.map((product) => (
            <li
              className="space-y-1 space-x-3x-1 gap-3 bg-[#cbd8e0] p-1 rounded-3xl mt-6"
              key={product.id}
            >
              <h1 className="flex ml-[25px]">ID: {product.id}</h1>
              <Image
                className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
              />
              <p className="flex ml-[25px]">${product.price}</p>
              <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[25px] break-words flex flex-wrap justify-center max-w-[150px]">
                {product.title}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <p>Something went wrong </p>;
  }
}
