// components/NavBar.js
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="bg-[#c9e3fb] p-4 top-0 left-0 w-full z-[1000]">
      <ul className="list-none flex justify-around p-0 m-0">
        {categories.map((category, index) => (
          <li className="m-0" key={index}>
            <Link  className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200" href={`/c/${category}`} >
             {category}
            </Link>
          </li>
        ))}
      </ul>
        </nav>
  );
};

export default NavBar;
