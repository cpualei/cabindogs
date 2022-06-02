import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage } from "../../store/bookings";


const CreateBookingForm = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const listings = useSelector((state) => state.listings);
    const listing = listings[id];

    useEffect(() => {
        dispatch(getBookingPage(id));
    }, [dispatch, id]);

    return (
        <div>
            <button>Book</button>
            <img src={listing?.img1} alt="img1"></img>
        </div>
    )
}

export default CreateBookingForm;
