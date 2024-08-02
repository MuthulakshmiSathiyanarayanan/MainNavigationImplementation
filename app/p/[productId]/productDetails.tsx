import React from 'react'
import Image from 'next/image'
import { Product } from '@/app/components/type'

const ProductDetail:React.FC<Product> = ({id, image, title,price}) => {

    
  return (
    <div>
     <ul className="flex flex-col bg-[#e9e4ad]">
          {/* {products.map((product) => ( */}
            <li
              className="bg-[#cbd8e0] p-1 rounded-3xl mt-6"
            
            >
              <h1 className="flex  ml-[25px]">ID: {id}</h1>
              <Image
                className="p-[5px] max-w-[150px] min-w-[150px] max-h-[180px] min-h-[180px] bg-customDark rounded-[20px] mt-[15px] ml-[25px]"
                src={image}
                alt={title}
                width={180}
                height={180}
              />
              <p className="flex ml-[25px]">${price}</p>
              <h2 className="bg-customLight italic text-lg font-normal rounded-[5px] p-[2px] ml-[25px] break-words flex flex-wrap justify-center max-w-[150px]">
                {title}
              </h2>
            </li>
           {/* ))} */}
        </ul>  
    </div>
  )
}
export default ProductDetail;