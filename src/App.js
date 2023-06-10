import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CartProvider} from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <>
    <Router>
    <CartProvider>
        <NavBar/>
    <Routes>
      <Route exact path="/" element={ <ItemListContainer/>}/>
      <Route path='/category/:category' element={ <ItemListContainer />}/>
      <Route path='/plants/:id' element={ <ItemDetailContainer/>}/>
      <Route path='/cart' element={ <Cart/>}/>
      <Route path='/checkout' element={ <Checkout/>}/>
    </Routes>
    </CartProvider>
  </Router>
  
   
    </>
  );
}

export default App;
