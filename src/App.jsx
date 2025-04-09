import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import { Button } from 'react-bootstrap';
import NavbarBootstrap from './components/NavbarBootstrap';
// import FetchCountry from './examples/FetchCountry';
// import FetchData from './examples/FetchData';
// import { withLogging } from './hocs/withLogging';
// import Hello from './examples/Hello';

// import Button from './examples/Button'
function App() {
console.log('soy App')
// const HelloConLogging= withLogging(Hello)
  return (
<>

<NavbarBootstrap/>
<ItemListContainer greeting='Bienvenidos a mi App 🙌'/>
{/* <FetchCountry/> */}
{/* <FetchData/> */}
{/* <HelloConLogging/> */}
{/* <Hello/> */}
</>
  )
}

export default App
