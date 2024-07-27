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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/electronics">Electronics</Link>
        </li>
        <li>
          <Link href="/pages/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link href="/pages/mensClothing">Men'sClothing</Link>
          </li>
          <li>
            <Link href="/pages/womensClothing">Women'sClothing</Link>
          </li>
      </ul>
    </nav>
    </div>
  );
}