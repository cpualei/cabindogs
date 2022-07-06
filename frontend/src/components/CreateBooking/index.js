import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage, addBooking } from "../../store/bookings";
import { getListings } from "../../store/listings";
import "./CreateBooking.css";

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
  const [totalPeople, setTotalPeople] = useState("");
  const [totalDogs, setTotalDogs] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!startDate) errors.push("Please select a start date.");
    if (!endDate) errors.push("Please select an end date.");
    if (!totalCost) errors.push("Please confirm total cost");

    setErrors(errors);
  }, [startDate, endDate, totalPeople, totalDogs, totalCost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      userId: sessionUser.id,
      listingId: listing.id,
      // totalPeople,
      // totalDogs,
      totalCost,
      startDate,
      endDate,
    };

    const booking = await dispatch(addBooking(newBooking));

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
  };

  return (
    <div>
      <h1 id="create-booking-title">Create a booking.</h1>
      <div id="create-booking-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div id="create-booking-div">
            <div id="create-booking-img-div">
              <img id="create-booking-img" src={booking?.img1} alt="img1"></img>
            </div>
            <div id="create-booking-info-form">
              <div id="create-booking-name">{booking?.name}</div>
              <div id="create-booking-state-country">
                {booking?.state}, {booking?.country}
              </div>
              <div id="create-booking-dates-div">
                <label className="create-booking-labels">Start Date</label>
                <input
                  type="date"
                  id="create-booking-start-date-input"
                  className="create-booking-inputs"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div id="create-booking-dates-div">
                <label className="create-booking-labels">End Date</label>
                <input
                  type="date"
                  id="create-booking-end-date-input"
                  className="create-booking-inputs"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
              <div className="create-booking-people-dogs-div">
                <label className="create-booking-labels">People</label>
                <select
                  className="create-booking-inputs"
                  value={totalPeople}
                  onChange={(e) => setTotalPeople(e.target.value)}
                  required
                >
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
                <label id="create-booking-dogs-label" className="create-booking-labels">Dogs</label>
                <select
                  className="create-booking-inputs"
                  value={totalDogs}
                  onChange={(e) => setTotalDogs(e.target.value)}
                  required
                >
                  <option value="0">0</option>
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
              </div>
              <div id="create-booking-total-cost-div">
                <label
                  id="create-booking-total-cost"
                  className="create-booking-labels"
                >
                  Total Cost: ${booking?.cost + booking?.cost * 0.4}
                </label>
                <input
                  id="create-booking-total-cost-input"
                  className="create-booking-inputs"
                  value={totalCost}
                  onChange={(e) => setTotalCost(e.target.value)}
                  required
                />
              </div>
              <ul id="create-booking-errors">
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <div className="create-bookings-btns-div">
                <button id="submit-cancel-btn" type="submit">
                  Confirm Booking
                </button>
                <button id="submit-cancel-btn" onClick={goBack}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingPage;
