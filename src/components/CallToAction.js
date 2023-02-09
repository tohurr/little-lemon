import {Link} from 'react-router-dom';
import restauranfood from '../image/restauranfood.jpg'

function CallToAction() {
    return (
        <>
        <div className="hero">
            <div className="hero-items">
                <h1>Little Lemon</h1>
                <h3 className="sub-heading">Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/reservations-booking"><button>Reserve a table</button></Link>
            </div>
                <img src={restauranfood} alt="restauranfood"/>
        </div>
        </>
      );
    }

export default CallToAction;