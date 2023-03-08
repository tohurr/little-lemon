import './Styles.css';
import {useState} from "react";

export default function BookingForm( {availableTimes, setAvailableTimes} ) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("none");
    // const [availableTimes, setAvailableTimes] = ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion,
        }
        console.log(reservation);
        // submitForm(reservation);
    }

    // const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00',];

    return (
        <>
        <h1>BookingForm</h1>
        <form className="form" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <fieldset>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)} >
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>17:00</option>
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>18:00</option>
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>19:00</option>
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>20:00</option>
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>21:00</option>
                <option value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>22:00</option>
                {/* {   availableTimes.map((times, index) => {
                    return <option value={times} key={index}>{times}</option>
                    })
                } */}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>none</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {/* <input type="submit" value="Make Your reservation" /> */}
            <button type="submit">Make Your reservation</button>
        </fieldset>
        </form>
        </>
      );
    }