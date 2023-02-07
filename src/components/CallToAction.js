import {Link} from 'react-router-dom';

function CallToAction() {
    return (
        <>
        <div className="hero">
    <div>
       <h1>Little Lemon</h1>
       <h4>Chicago</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua.
       </p>
        <Link to="/reservations-booking"><button>Reserve a table</button></Link>
    </div>
        <div>
            <img src={""} alt="Hero Image" className=""/>
        </div>
        </div>
        </>
      );
    }

export default CallToAction;