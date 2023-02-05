import './Styles.css';
import logo from '../image/llogo.png'

function Footer() {
return (
    <>
    <footer>
        <img src={logo} alt="Logo" className="logo"/>
        <ul>
            <h3>Doormat Navigation</h3>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
        </ul>
        <ul>
            <h3>Contact</h3>
            <li><a href="">Address</a></li>
            <li><a href="">Phone Number</a></li>
            <li><a href="">Email</a></li>
        </ul>
        <ul>
            <h3>Social Media Links</h3>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
        </ul>
    </footer>
    </>
  );
}
export default Footer;