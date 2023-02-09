import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import greeksalad from '../image/greeksalad.jpg'
import lemondessert from '../image/lemondessert.jpg'
import bruchetta from '../image/bruchetta.svg'

function Specials() {
    return (
        <>
    <div className="specials">
        <div className="specials-menu">
            <h2>Specials</h2>
            <Link to="/menu"><button>Online Menu</button></Link>
        </div>
        <div className="divcard">
            <Card style={{ width: '14rem' }} className="card">
            <Card.Img variant="top" src={greeksalad}/>
                <Card.Body>
                    <div className="menu-price">
                        <Card.Title>Greek Salad</Card.Title>
                        <p>$12.99</p>
                    </div>
                    <Card.Text>
                    The famous greek salad of crispy lettuce, peppers, olives and our
                    Chicago style feta cheese, garnished with crunchy garlic and rosemary
                    croutons.
                    </Card.Text>
                    <Link to="order-online">Order a delivery</Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="card">
            <Card.Img variant="top" src={bruchetta}/>
                <Card.Body>
                    <div className="menu-price">
                        <Card.Title>Bruschetta</Card.Title>
                        <p>$5.99</p>
                    </div>
                    <Card.Text>
                    Our Bruschetta is made from grilled bread that has been smeared with
                    garlic and seasoned with salt and olive oil.
                    </Card.Text>
                    <Link to="order-online">Order a delivery</Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="card">
            <Card.Img variant="top" src={lemondessert}/>
                <Card.Body>
                    <div className="menu-price">
                        <Card.Title>Lemon Dessert</Card.Title>
                        <p>$5.00</p>
                    </div>
                    <Card.Text>
                    This comes straight from grandma’s recipe book, every last ingredient
                    has been sourced and is as authentic as can be imagined.
                    </Card.Text>
                    <Link to="order-online">Order a delivery</Link>
                </Card.Body>
            </Card>
        </div>
    </div>
        </>
      );
    }

export default Specials;