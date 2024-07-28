// pages/index.js
import  NavBar  from './components/header';
import Logo from './components/logo'

export default function Home() {
  return (
    <div>
      <header>
        <Logo />
     <NavBar/>
      </header>
    </div>
  );
}
