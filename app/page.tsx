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
    <nav className="navbar">
      <ul className="navLinks">
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