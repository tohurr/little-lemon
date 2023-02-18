import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import { useReducer } from 'react';
import HomePage from './HomePage';
import Menu from './Menu';
import About from './About';
import BookingPage from './BookingPage'
import Order from './Order'
import BookingForm from './BookingForm'

// availableTimes

// const updateTimes = (state, action) => {
//   if (action.type === '17:00') return {times: state.times + 1}
//   return state;
// }

function Main() {

  const updateTimes = (state, action) => {
    if (action.type === '17:00') return {times: state.times + 1}
    return state;
  }

  const initializeTimes = {times: 17};
  const [state, dispatch] = useReducer(updateTimes, initializeTimes)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("");
    console.log(state);
}

return (
    <>
    <main>
      <Routes>
        <Route path="/little-lemon" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations-booking" element={<BookingPage />}></Route>
        <Route path="/order-online" element={<Order />}></Route>
      </Routes>
      <BookingForm
      availableTimes="17:00, 18:00, 19:00, 20:00, 21:00, 22:00"
      />
      <form onSubmit={handleSubmit}>
      <select id="res-time " {...state} >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
      <button onClick={() => dispatch({type: '17:00'})}>cliick</button>
      </form>
    </main>
    </>
  );
}

export default Main;