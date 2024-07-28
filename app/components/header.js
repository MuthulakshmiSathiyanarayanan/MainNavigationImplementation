import React from 'react'
import Link from 'next/link'; 

export function Header() {
  return (
    <div>
       <nav className="bg-[#c9e3fb] p-4 top-0 left-0 w-full z-[1000]">
        <ul className="list-none flex justify-around p-0 m-0">
          <li className="m-0">
            <Link href="/">Home</Link>
          </li>
          <li className="m-0">
            <Link href="/c/electronics" className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">
                Electronics
              
            </Link>
          </li>
          <li className="m-0">
            <Link href="/c/jewelery" className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">
                Jewelry
                         </Link>
          </li>
          <li className="m-0">
            <Link href="/c/mensClothing" className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">
                Men's Clothing
            </Link>
          </li>
          <li className="m-0">
            <Link href="/c/womensClothing" className="px-4 py-2 hover:bg-custom-gray transition-colors duration-300">
                Women's Clothing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

