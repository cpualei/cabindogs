import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookingPage } from "../../store/bookings";
import Calendar from "react-calendar";


const CreateBookingPage = () => {

    const { id } = useParams();

    // const [date, setDate] = useState(new Date());

    // const calendar = useSelector((state) => state = {
    //     date: new Date()
    // });

    const listings = useSelector((state) => state.listings);
    const listing = listings[id];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookingPage(id));
    }, [dispatch, id]);

    // const onChange = (date) => {

    // }

    return (
        <div>
            <Calendar />
            <button>Confirm Booking</button>
            <img src={listing?.img1} alt="img1"></img>
            <div>{listing?.name}</div>
            <div>{listing?.state}</div>
            <div>{listing?.country}</div>
            <div>Total Cost: ${listing?.cost}</div>
        </div>
    )
}

export default CreateBookingPage;
