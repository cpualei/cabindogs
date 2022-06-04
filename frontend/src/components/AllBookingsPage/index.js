import { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookings, deleteBooking } from "../../store/bookings";
import { getListings } from "../../store/listings";

const AllBookings = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.bookings);
  const listings = useSelector((state) => state.listings);
  const bookingsArr = Object.values(bookings);
  // const booking = bookings[id];
  // console.log(booking)


  useEffect(() => {
    dispatch(getBookings());
    dispatch(getListings());
  }, [dispatch]);

  // const startDateObj = new Date({booking.startDate}).getMonth
  // const startDay = startDateObj.getDay
  // const startMonth = startDateObj.getMonth

  return (
    <div>
      <div>Upcoming Reservations</div>
      <ul>
        {listings &&
          bookingsArr.map((booking) => (
            <i key={booking.id}>
              <img src={listings[booking.listingId]?.img1}></img>
              <div>{listings[booking.listingId]?.name}</div>
              <div>{listings[booking.listingId]?.state}</div>
              <div>{listings[booking.listingId]?.country}</div>
              <div>{booking.startDate} to {booking.endDate}</div>
              <div>Total Paid: ${listings[booking.listingId]?.cost}</div>
              <button>Edit Booking Dates</button>
              <button
                onClick={(e) => {
                  dispatch(deleteBooking(booking));
                  history.push("/bookings");
                }}
              >
                Cancel Booking
              </button>
            </i>
          ))}
      </ul>
    </div>
  );
};

export default AllBookings;
