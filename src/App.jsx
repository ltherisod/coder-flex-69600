import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import { Button } from 'react-bootstrap';
import NavbarBootstrap from './components/NavbarBootstrap';
// import Button from './examples/Button'
function App() {
// const nombre = 'Laura'
// const saludar = () => {
//   alert('Holis')
// }
// const login = () =>{
//   console.log('holaaa')
// }
  return (
<>
{/* <Navbar/> */}
<NavbarBootstrap/>
<ItemListContainer greeting='Bienvenidos a mi App 🙌'/>
{/* ejemplos de props */}
{/* <Button text='Hola Coders 😊' style='button-purple'  handler={saludar}/>
<Button text='Log in' style='button-gray'  handler={login} disabled={true}/> */}
</>
  )
}

export default App
