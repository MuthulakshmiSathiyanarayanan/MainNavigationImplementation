// pages/index.js
import Logo from './components/logo'
import { cartDetails } from './components/myWork';

export default function Home() {
  const cart:any = cartDetails();
  return (
    <div>
      <header>
        {cart}
      </header>
    </div>
  );
}
