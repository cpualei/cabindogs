import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage, addBooking } from "../../store/bookings";
import { getListings } from "../../store/listings";
import "./CreateBooking.css"

const CreateBookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const listing = useSelector((state) => state.listings[id]);
  const booking = useSelector((state) => state.bookings[id]);

  const [totalCost, setTotalCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!totalCost) errors.push("Please confirm total cost");
    if (!startDate) errors.push("Please select a start date.");
    if (!endDate) errors.push("Please select an end date.");

    setErrors(errors);
  }, [totalCost, startDate, endDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      userId: sessionUser.id,
      listingId: listing.id,
      totalCost,
      startDate,
      endDate,
    };

    const booking = await dispatch(addBooking(newBooking))

    if (errors.length === 0 && booking) {
      // e.preventDefault();
      history.push("/bookings");
    }
  };

  useEffect(() => {
    dispatch(getBookingPage(id));
    dispatch(getListings());
  }, [dispatch, id]);

  return (
    <div>
      <h1 id="title">Create a booking.</h1>
      <div id="create-booking-form-div">
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
          <div>{booking?.name}</div>
          <div>{booking?.state}</div>
          <div>{booking?.country}</div>
          <img id="create-booking-img" src={booking?.img1} alt="img1"></img>
          <ul id="errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className="labels-inputs">Start Date:</label>
          <input
            className="labels-inputs"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label className="labels-inputs">End Date:</label>
          <input
            className="labels-inputs"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <p className="labels-inputs">Total Cost: ${booking?.cost + booking?.cost * 0.4}</p>
          <label className="labels-inputs">Confirm Total Cost:</label>
          <input
            className="labels-inputs"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            required
          />
          <button id="submit-btn" type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingPage;
