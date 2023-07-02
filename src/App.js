import './App.css';
import Header from './Components/Header/Header';
import { Home } from './Modules/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Product from './Modules/Product/Product';
import Footer from './Components/Footer/Footer';
import Products from './Modules/Products/Products';
import CategoryProducts from './Modules/CategoryProducts/CategoryProducts';
import Cart from './Modules/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/Shop-v1/home' element={<Home />} />
        <Route path='/Shop-v1/products/:id' element={<Product />} />
        <Route path='/Shop-v1/categories/:name' element={<CategoryProducts />} />
        <Route path='/Shop-v1/products' element={ <Products/>}/>
        <Route path='/Shop-v1/cart' element={ <Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
