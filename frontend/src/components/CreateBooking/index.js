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

  const listing = useSelector((state) => state.listings[id]?.cost);
  const booking = useSelector((state) => state.bookings[id]);

  // const [totalCost, setTotalCost] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPeople, setTotalPeople] = useState("");
  const [totalDogs, setTotalDogs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      userId: sessionUser.id,
      listingId: listing.id,
      totalPeople,
      totalDogs,
      startDate,
      endDate,
    };

    // const booking = await dispatch(addBooking(newBooking));
    await dispatch(addBooking(newBooking));

    // if (errors.length === 0 && booking) {
    //   history.push("/bookings");
    // }
  };

  useEffect(() => {
    dispatch(getBookingPage(id));
    dispatch(getListings());
  }, [dispatch, id]);

  const goBack = () => {
    history.goBack();
  };

  const parseDate = (date) => {
    const mdy = date.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  };

  const findTotalNights = (startDate, endDate) => {
    let start = parseDate(startDate);
    let end = parseDate(endDate)
    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  };

  const numNights = findTotalNights(startDate, endDate);
  const totalNights = numNights ? numNights : 0;

  const findTotalCost = (listing, totalNights) => {
    const costPerNightWithTax = listing + (listing * 0.4);
    // const roundedCost = parseFloat(listing + (listing * 0.4)).toFixed(2);
    // const [integerPart, decimalPart] = roundedCost.split('.');
    // // Pad the decimal part with zeros to ensure two decimal places
    // const paddedDecimalPart = decimalPart.padEnd(2, '0');
    // const costPerNightWithTax = `${integerPart}.${paddedDecimalPart}`;

    if (totalNights === 0) {
      return <b>Minimum of one night required</b>;
    } else {
      return `$${costPerNightWithTax * totalNights}`;
    }
  }

  const totalCost = findTotalCost(listing, totalNights);

  return (
    <>
      <h1 id="create-booking-title">Create a booking for...</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="create-booking-container">
          <div id="create-booking-img-div">
            <img id="create-booking-img" src={booking?.img1} alt="img1"></img>
          </div>
          <div id="create-booking-info-form">
            <div id="create-booking-name">{booking?.name}</div>
            <div id="create-booking-state-country">
              {booking?.state}, {booking?.country}
            </div>
            <div id="create-booking-dates-div">
              <label className="create-booking-labels">Start date</label>
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
              <label className="create-booking-labels">End date</label>
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
              <label
                id="create-booking-dogs-label"
                className="create-booking-labels"
              >
                Dogs
              </label>
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
            <label
              id="create-booking-total-cost"
              className="create-booking-labels"
            >
              Cost per night: ${listing} <br />
              Total nights: {totalNights} <br/>
              Total cost: {totalCost}
            </label>
            <div className="create-bookings-btns-div">
              <button id="submit-cancel-btn" type="submit">
                Confirm booking
              </button>
              <button id="submit-cancel-btn" onClick={goBack}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateBookingPage;
