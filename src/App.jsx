import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBootstrap from './components/NavbarBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importamos al proveedor
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
// import Checkout from './components/Checkout';
import ReactHookForm from './components/ReactHookForm';

function App() {
  return (
<BrowserRouter>
<CartProvider>
<NavbarBootstrap/>

<Routes>
  <Route path='/' element={<ItemListContainer greeting='Bienvenidos a mi App 🙌'/>}/>
  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Estas en la categoria:'/>}/>
  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<ReactHookForm/>}/>
</Routes>
</CartProvider>

</BrowserRouter>
  )
}

export default App
