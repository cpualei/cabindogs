import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage } from "../../store/bookings";
import { Calendar } from 'react-calendar';
import "./Calendar.css"


const CreateBookingPage = () => {

    const { id } = useParams();

    const [value, onChange] = useState(new Date());

    // const calendar = useSelector((state) => state = {
    //     date: new Date()
    // });

    const booking = useSelector((state) => state.bookings[id]);
    // const listing = listings[id];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookingPage(id));
    }, [dispatch, id]);

    const history = useHistory();

    const confirmBookingBtn = (e) => {
        history.push("/bookings")
    }

    return (
        <div>
            <div><Calendar onChange={onChange} value={value} /></div>
            <button onClick={confirmBookingBtn}>Confirm Booking</button>
            <img src={booking?.img1} alt="img1"></img>
            <div>{booking?.name}</div>
            <div>{booking?.state}</div>
            <div>{booking?.country}</div>
            <div>Total Cost: ${booking?.cost+(booking?.cost*0.4)}</div>
        </div>
    )
}

export default CreateBookingPage;
