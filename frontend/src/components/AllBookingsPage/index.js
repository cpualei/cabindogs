import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/bookings";
import { getListings } from "../../store/listings";


const AllBookings = () => {

    const bookings = useSelector((state) => {
        return Object.values(state.bookings)
    });

    const listings = useSelector((state) => state.listings)

    console.log(bookings)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookings());
        dispatch(getListings());
    }, [dispatch]);

    return (
        <div>
            <div></div>
            <ul>
                {listings && bookings.map((booking) => (
                    <li key={booking.id}>
                        <img src={listings[booking.listingId].img1}></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllBookings;
