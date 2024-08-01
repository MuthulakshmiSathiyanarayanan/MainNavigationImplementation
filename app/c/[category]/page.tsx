import Image from 'next/image';
import { Product, Props } from '@/app/components/type';
import Link from 'next/link';
import SortingPage from '@/app/components/sorting';

async function fetchProductDetails(category: string,sort:string,searchTerm:string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);//axis , no need to mention resp.json
  const data: Product[] = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

   // Filter products based on the search term
   //search
   const filteredData = data.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
//sort
  if (sort === 'price-asc') {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredData.sort((a, b) => b.price - a.price);
    
  }
  return filteredData;
}


//read in the same order as passed 
export default async function CategoryPage({ params,searchParams }:Props) {
    const { category } = params;//array folder structure path name
  const sort = searchParams.sort || 'price-desc';//sorting 
  const searchTerm = searchParams.search || ''; // Get search term 
  
  try {
    const products:Product[] = await fetchProductDetails(category,sort,searchTerm);//passing the 
    
    if (products.length === 0) {
      return <p>No products found for this category.</p>;
    }

    return (
      <div>
          <div className="mb-4">
          <p>Sorted by: {sort === 'price-asc' ? 'Price: Low to High' : 'Price: High to Low'}        </p>
          {searchTerm && <p>Search term: {searchTerm}</p>}
      </div>
        <ul className="auto grid grid-cols-3 gap-10 bg-[#667685]">
          {products.map((product) => (
            <li
              className="space-y-1 space-x-3x-1 gap-3 bg-[#cbd8e0] p-1 rounded-3xl mt-6"
              key={product.id}
            >
              <Link className="flex ml-[25px] bg-[#d4dca3] w-12 justify-center" href={`/p/${product.id}`}>ID: {product.id}</Link>
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
