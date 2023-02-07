import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Specials() {
    return (
        <>
    <div className="specials">
        <div className="specials-menu">
            <h2>Specials</h2>
            <Link to="/menu"><button>Online Menu</button></Link>
        </div>
        <div className="divcard">
            <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                     Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
        </>
      );
    }

export default Specials;