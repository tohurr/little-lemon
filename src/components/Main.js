import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Menu from './Menu';
import About from './About';
import BookingPage from './BookingPage'
import Order from './Order'

function Main() {
return (
    <>
    <main>
      <Routes>
        <Route path="/reserve-table" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations-booking" element={<BookingPage />}></Route>
        <Route path="/order-online" element={<Order />}></Route>
      </Routes>
    </main>
    </>
  );
}

export default Main;