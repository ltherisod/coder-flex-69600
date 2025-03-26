// import Button from '../examples/Button'
import '../styles/Navbar.css'
import CartWidget from './CartWidget'

const Navbar = () => {
  
    return(
        <nav className='nav-container'>
            <img src='../logo-shop.png' ale='logo' className='logo'/>
            <div className='a-container'>
                <a>Nuevos</a>
                <a>Ofertas</a>
                <a>Más vendidos</a>
            </div>
           <CartWidget/>
        </nav>
    )
}

export default Navbar