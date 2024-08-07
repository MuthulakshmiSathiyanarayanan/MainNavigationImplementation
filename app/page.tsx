// pages/index.js
import Logo from './components/logo'
import CartDetails from './components/cartPage';
export default function Home() {
  return (
    <div>
      <header>
        <CartDetails/>
      </header>
    </div>
  );
}
