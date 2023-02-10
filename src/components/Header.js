import './Styles.css';
import logo from '../image/logo.svg'
import {Link} from 'react-router-dom';

function Header() {
return (
    <>
    <nav>
        <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/menu">Menu</Link> </li>
                <li> <Link to="/reservations-booking">Reservations</Link> </li>
                <li> <Link to="order-online">Order Online</Link> </li>
                <li> <Link to="login">Login</Link> </li>
            </ul>
    </nav>
    </>
  );
}
export default Header;