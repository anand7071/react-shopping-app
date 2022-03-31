
import { Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { NavBar } from './components/navbar';
import { Products } from './components/products';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/" component={Products} />
        <Products />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
