// components/NavBar.js
import Link from "next/link";
async function getPostbyid() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data:string[] = await response.json() 
  return data;
}
export default async function NavBar() {
  const categories = await getPostbyid()
  return (
    <nav className="bg-[#bfddf7] p-4 left-0 w-full h-10 top-10 flex items-center   z-1000 top rounded-3xl mb-3 font-semibold">
           <ul className="list-none flex justify-around p-0 m-0 gap-4">
             {categories.map((category, index) => (
             <li className="m-0" key={index}>
               <Link  className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200" href={`/c/${category}`} >
                {category}
               </Link>
           </li>         ))}
           </ul>
             </nav>
  )
}

