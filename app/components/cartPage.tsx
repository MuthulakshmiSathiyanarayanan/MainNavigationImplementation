'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const CartDetails = () => {
  const [cartDetails, setcartDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartDetails = async () => {
      const cartResponse = await fetch(`https://fakestoreapi.com/carts/user/1`);
      const data = await cartResponse.json();
      const allProducts = data.flatMap(order => order.products);
      const uniqueProductIds = [...new Set(allProducts.map(product => product.productId))];

      const fetchCartDetail = async (productId) => {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(url);
        const productData = await response.json();
        return productData;
      };

      const cartDetailsPromises = uniqueProductIds.map(id => fetchCartDetail(id));
      const cartDetails = await Promise.all(cartDetailsPromises);

      setcartDetails(cartDetails);
      setLoading(false);
    };

    fetchCartDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        {cartDetails.map(product => (
          <li key={product.id}>
                <h2>{product.title}</h2>
                <Image
                className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
              />                
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetails;


// export async function cartDetails() {
//     const cartResponse = await fetch(`https://fakestoreapi.com/carts/user/1`)

//     const data = await cartResponse.json();
//     // console.log(data);
//     const allProducts = data.flatMap(order => order.products);
//     console.log(allProducts);
//     const uniqueProductIds = [...new Set(allProducts.map(product => product.productIdExtracted))];
//     console.log(uniqueProductIds)





//     async function fetchProductDetail(productIdExtracted) {
//         const url = `https://fakestoreapi.com/products/${productIdExtracted}`;
//         const response = await fetch(url);
//         const productData = await response.json();
//         return productData;
//     }

//     //Fetch data for each product ID
//     const CartDetailsPromises = uniqueProductIds.map(id => fetchProductDetail(id));

//     // Wait for all fetch requests to complete
//     const productDetails = await Promise.all(productDetailsPromises);

//     // Process the fetched data (e.g., log it or return it)
//     console.log(productDetails);
//     console.log(uniqueProductIds);

//     //return productDetails;
// }