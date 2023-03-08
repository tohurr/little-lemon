import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import { useReducer } from 'react';
import HomePage from './HomePage';
import Menu from './Menu';
import About from './About';
import BookingPage from './BookingPage'
import Order from './Order'



export default function Main() {

    // function initializeTimes() {

    // }

    // const initialState = initializeTimes();
    // const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState)
    const [availableTimes, setAvailableTimes] = useState("18:00")

    // const updateTimes


return (
    <>
    <main>
      <Routes>
        <Route path="/little-lemon" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations-booking" element={<BookingPage availableTimes={availableTimes} setAvailabletimes={setAvailableTimes}/>}></Route>
        <Route path="/order-online" element={<Order />}></Route>
      </Routes>
    </main>
    </>
  );
}