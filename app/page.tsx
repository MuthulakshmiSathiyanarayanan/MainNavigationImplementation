import Image from "next/image";
import Link from 'next/link';

// Directly use the path relative to the `public` directory
export default function Home() {
  return (
    <div className="logo">
      <Image
        src="/assets/images.jpeg" // Path relative to the `public` directory
        alt="My Logo"
        width={100}
        height={20}
      />
    <nav className="bg-[#c9e3fb] p-4 top-0 left-0 w-full  z-[1000]">
      <ul className="list-none flex justify-around p-0 m-0">
        <li className="m-0">
          <Link href="/">Home</Link>
        </li>
        <li className="m-0">
          <Link href="/pages/electronics"legacyBehavior>
          <a className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">Electronics</a></Link>
        </li>
        <li className="m-0">
            <Link href="/pages/jewelery" legacyBehavior>
          <a className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">
            Jewelery
          </a>
        </Link>
        </li>
        <li className="m-0">
          <Link href="/pages/mensClothing"legacyBehavior>
          <a className="text-gray-900 no-underline px-4 py-2 transition-colors duration-300 hover:bg-gray-200">Men'sClothing</a></Link>
          </li>
          <li className="m-0">
            <Link href="/pages/womensClothing" legacyBehavior>
              <a className=" px-4 py-2 hover:bg-custom-gray transition-colors duration-300">Women'sClothing</a>
              </Link>
          </li>
      </ul>
    </nav>
    </div>
  );
}