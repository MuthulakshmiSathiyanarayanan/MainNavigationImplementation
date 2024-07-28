'use client';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
       <ul className="bg-[#c9e3fb] p-4 top-0 left-0 w-full z-[1000] space-y-4">
              {products.map((product: {
                  id: number;
                title: string;
                price: number;
                  description: string;
              }) => {
                  return (
                      <li className="space-y-3" key={product?.id}>
                      <h1>{product.id}</h1>
                          <h2>{product?.title}</h2>
                          <p>${product?.price}</p>
                      </li>
                  )
        })}
      </ul>
    </div>
  );
};

export default CategoryPage;