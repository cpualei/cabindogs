import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookings, deleteBooking } from "../../store/bookings";
import { getListings } from "../../store/listings";
// import BookingDate from "../BookingDate";
import "./AllBookings.css"

const AllBookings = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);
  const bookings = useSelector((state) => state.bookings);
  const bookingsArr = Object.values(bookings);
  const bookingsArr2 = [...bookingsArr].reverse();

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings());
  }, [dispatch]);

  // const startDateObj = new Date({booking.startDate}).getMonth
  // const startDay = startDateObj.getDay
  // const startMonth = startDateObj.getMonth


  return (
    <div id="bookings-div">
      <h1 id="bookings-title">Upcoming Reservations.</h1>
      <div id="bookings-ul-div">
        <ul id="bookings-ul">
          {listings &&
            bookingsArr2.map((booking) => (
              <li id="booking-li" key={booking.id} >
                  {/* <p>{listings[booking.listingId]?.name}</p> */}
                  <img id="booking-img" src={listings[booking.listingId]?.img1}></img>
                  <div id="booking-description-div">
                    <div className="booking-description" id="booking-name">{listings[booking.listingId]?.name}</div>
                    <div className="booking-description" id="booking-state">{listings[booking.listingId]?.state}, {listings[booking.listingId]?.country}</div>
                    {/* <div id="booking-description" id="booking-guests">{listings[booking.listingId]?.guests}</div> */}
                    <div className="booking-description" id="booking-dates">{
                      // <BookingDate booking={booking?.startDate} />
                      booking?.startDate
                    } to {
                    booking?.endDate
                    }</div>
                    <div className="booking-description" id="booking-cost">Total Paid: ${listings[booking?.listingId]?.cost+((listings[booking?.listingId]?.cost)*0.4)}</div>
                    <div id="delete-btn-div">
                      <button
                        id="delete-btn"
                        onClick={(e) => {
                          dispatch(deleteBooking(booking));
                          history.push("/bookings");
                        }}
                        >
                        Cancel Reservation
                      </button>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AllBookings;
