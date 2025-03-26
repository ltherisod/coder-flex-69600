import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
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
<Navbar/>
<ItemListContainer greeting='Bienvenidos a mi App 🙌'/>
{/* ejemplos de props */}
{/* <Button text='Hola Coders 😊' style='button-purple'  handler={saludar}/>
<Button text='Log in' style='button-gray'  handler={login} disabled={true}/> */}
</>
  )
}

export default App
