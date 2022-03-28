
import './App.css';
import { Footer } from './components/footer';
import { NavBar } from './components/navbar';
import { Products } from './components/products';

function App() {
  return (
    <div>
      <NavBar/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
