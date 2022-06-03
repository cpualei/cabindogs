import { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookings, deleteBooking } from "../../store/bookings";
import { getListings } from "../../store/listings";

const AllBookings = () => {

  const { id } = useParams();
  const history = useHistory();

  // let bookingsArr = useSelector((state) => {
  //   return Object.values(state.bookings);
  // });

  const bookings = useSelector((state) => state.bookings)
  const bookingsArr = Object.values(bookings)

  const listings = useSelector((state) => state.listings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
    dispatch(getListings());
  }, [dispatch]);

  const handleDeleteClick = (e) => {
    // dispatch(deleteBooking(booking))
    history.push("/bookings")
  }

  // const startDateObj = new Date({booking.startDate}).getMonth
  // const startDay = startDateObj.getDay
  // const startMonth = startDateObj.getMonth

  return (
    <div>
      <div>Upcoming Reservations</div>
      <ul>
        {listings &&
          bookingsArr.map((booking) => (
            <li key={booking.id}>
              <div>{booking.startDate} to {booking.endDate}</div>

              <NavLink to={`/bookings/`}>
              <img src={listings[booking.listingId]?.img1}></img>
              </NavLink>
              <div>{listings[booking.listingId]?.name}</div>
              <div>{listings[booking.listingId]?.state}</div>
              <div>{listings[booking.listingId]?.country}</div>
              <div>Total Paid: ${listings[booking.listingId]?.cost}</div>
              <button>Edit Booking Dates</button>
              <button onClick={(e) => dispatch(deleteBooking(booking))}>Cancel Booking</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllBookings;
