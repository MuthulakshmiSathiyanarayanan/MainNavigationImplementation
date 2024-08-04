'use client';
import React from 'react'
import Image from 'next/image'
import { Product, ProductDetailsProps } from '@/app/components/type'
// import { AddCart } from './cart';
import { useRouter} from 'next/navigation';


const ProductDetail = ({ productData }: { productData: Product }) => {
  const router = useRouter()
  console.log("--productData---", productData);
  const addToCart = () => {
          router.push(`/cart/${productData.id}`);
  }
      return (
    <div>
     <ul className="bg-[#8bd6ed] max-w-[250px] p-1 rounded-3xl mt-6 ml-[25px]">
           {/* {products.map((product) => (  */}
            <li>
              <h1 className="flex  ml-[25px]">ID: {productData.id}</h1>
              <Image
                className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                src={productData.image}
                alt={productData.title}
                width={180}
                height={180}
              />
              <p className="flex ml-[25px]">${productData.price}</p>
              <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[105px] break-words flex flex-wrap justify-center max-w-[150px]">
                {productData.title}
                   </h2>
                   <p>{ }</p>
                  <button className="bg-slate-400 ml-[25px]" onClick={addToCart}>Add to cart</button>

            </li>
            {/* ))}  */}
        </ul>  
    </div>
  )
}
export default ProductDetail;