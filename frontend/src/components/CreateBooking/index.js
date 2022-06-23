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

  const [totalGuests, setTotalGuests] = useState("");
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
      history.push("/bookings");
    }
  };

  useEffect(() => {
    dispatch(getBookingPage(id));
    dispatch(getListings());
  }, [dispatch, id]);

  const goBack = () => {
    history.goBack();
  }

  return (
    <div>
      <h1 id="create-booking-title">Create a booking.</h1>
      <div id="create-booking-container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div id="create-booking-div">
                <div id="create-booking-img-div">
                    <img id="create-booking-img" src={booking?.img1} alt="img1"></img>
                </div>
              <div id="create-booking-info-div">
                  <div id="create-booking-name">{booking?.name}</div>
                  <div id="create-booking-state-country-div">{booking?.state}, {booking?.country}</div>
                <label className="labels-inputs">Start Date:</label>
                <input
                  type="date"
                  className="labels-inputs"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
                <label className="labels-inputs">End Date:</label>
                <input
                  type="date"
                  className="labels-inputs"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
                <p className="labels-inputs">Total Cost: ${booking?.cost + booking?.cost * 0.4}</p>
                <label className="labels-inputs"># of Guests:</label>
                <select
                  className="labels-inputs"
                  onChange={(e) => setTotalGuests(e.target.value)}
                  required>
                    <option value="">-- Select # of guests --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <ul id="errors">
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
                <div id="create-bookings-btns-div">
                  <button id="submit-cancel-btn" type="submit">Confirm Booking</button>
                  <button id="submit-cancel-btn" onClick={goBack}>Cancel</button>
                </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingPage;
