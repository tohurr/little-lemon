import './Styles.css';
import logo from '../image/llogo.png'


function Nav() {
return (
    <>
    <nav>
    <img src={logo} alt="Logo" className="logo"/>
        <ul>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Menu</a> </li>
            <li> <a href="#">Reservations</a> </li>
            <li> <a href="#">Order Online</a> </li>
            <li> <a href="#">Login</a> </li>
        </ul>
    </nav>
    </>
  );
}
export default Nav;