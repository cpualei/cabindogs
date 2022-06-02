import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/bookings";


const AllBookings = () => {

    const bookings = useSelector((state) => {
        return Object.values(state.bookings)
    });

    console.log(bookings)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch]);

    return (
        <div>
            <div>This page has rendered!</div>
            <ul>
                {bookings.map((booking) => (
                    <i key={booking.id}>
                        <img src={booking.img1}></img>
                    </i>
                ))}
            </ul>
        </div>
    )
}

export default AllBookings;
