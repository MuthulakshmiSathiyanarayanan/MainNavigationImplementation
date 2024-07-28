'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const CategoryPage = ({params}:{params:any}) => {
    console.log(params);
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);//interface tried 
  
  useEffect(() => {
     const fetchProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
          const data = await res.json();
          console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

     fetchProducts();
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (products.length === 0) return <p>No products found for this category.</p>;

  return (
      <div>
       <ul className="auto grid grid-cols-3 gap-10 bg-[#667685] " >
              {products.map((product: {
                  id: number;
                title: string;
                price: number;
                description: string;
                image: string;
              }) => {
                  return (
                    <li className="space-y-1 space-x-3x-1 gap-3 bg-[#cbd8e0] p-1 rounded-3xl mt-6" key={product?.id}>
                       <h1 className="flex ml-[25px] ">ID:{product.id}</h1>
                           <Image className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                         src={product.image}
                         alt={product.title}
                          width={180} 
                          height={180} 
          />
                      <p className="flex  ml-[25px]">${product?.price}</p>
                          <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[25px] break-words flex flex-wrap justify-center max-w-[150px]">{product?.title}</h2>
                         
                      </li>
                  )
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;