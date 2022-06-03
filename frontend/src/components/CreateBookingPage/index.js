import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage, addBooking } from "../../store/bookings";
import { Calendar } from "react-calendar";
import { getListings } from "../../store/listings";

const CreateBookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  // const bookedListingId = useSelector((state) => state.listings[booking.listingId].id)
  // console.log(bookedListingId)
  const listing = useSelector((state) => state.listings[id])
  console.log(listing)
  const booking = useSelector((state) => state.bookings[id]);

  const [totalCost, setTotalCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [value, onChange] = useState(new Date());

  // const calendar = useSelector((state) => state = {
  //     date: new Date()
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      userId: sessionUser.id,
      listingId: listing.id,
      totalCost,
      startDate,
      endDate,
    };



    dispatch(addBooking(newBooking)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });

      if (errors.length === 0 && newBooking) {
        history.push("/bookings");
      }
  };

  useEffect(() => {
    dispatch(getBookingPage(id));
    dispatch(getListings());
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>{booking?.name}</div>
          <div>{booking?.state}</div>
          <div>{booking?.country}</div>
          <img src={booking?.img1} alt="img1"></img>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>Start Date:</label>
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            />
          <label>End Date:</label>
          <input value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
          <p>Total Cost: ${booking?.cost + booking?.cost * 0.4}</p>
          <label>Confirm Total Cost:</label>
          <input
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingPage;
