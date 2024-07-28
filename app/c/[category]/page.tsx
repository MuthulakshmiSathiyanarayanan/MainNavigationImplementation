'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const CategoryPage = ({params}:{params:any}) => {
//   const router = useRouter();
    // const { category } = router.query;
    console.log(params);
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // if (!category) return;

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
      {/* <h1>{category}</h1> */} 
       <ul className="bg-[#c9e3fb] p-4 top-0 left-0 w-full z-[1000]  flex  justify-between ml-5 mr-5 gap4 mt-12 h-auto" >
              {products.map((product: {
                  id: number;
                title: string;
                price: number;
                description: string;
                image: string;
              }) => {
                  return (
                    <li className="space-y-3 gap-4" key={product?.id}>
                           <Image className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                         src={product.image}
                         alt={product.title}
                          width={180} 
                          height={180} 
          />
                      <h1 className="flex  justify-center ">{product.id}</h1>
                          <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[25px] break-words flex flex-wrap justify-center max-w-[150px]">{product?.title}</h2>
                          <p className="flex  justify-center ">${product?.price}</p>
                      </li>
                  )
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;