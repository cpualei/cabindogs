import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteListing, getListings } from "../../store/listings";
import EditListingFormModal from "../EditListing";
import "./ListingDetailsPage.css";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const listings = useSelector((state) => state.listings);
  const listing = listings[id];

  useEffect(() => {
    dispatch(getListings(id));
  }, [dispatch, id]);

  const history = useHistory();

  const bookButtonClick = (e) => {
    history.push(`/listings/${id}/book`);
  };

  return (
    <div>
      <div id="listing-details-div">
        <h1 id="title">Listing Details.</h1>
        <div id="dscrpt-div">
          <div id="dscrpt-name">{listing?.name}</div>
          <div className="dscrpt">
            {listing?.state}, {listing?.country}
          </div>
          <div className="dscrpt">From ${listing?.cost} / night</div>
        </div>
        <div id="img-container-div">
          <div id="imgs-container">
            <div id="other-imgs-div">
              <img id="img1" src={listing?.img1} alt="img1"></img>
              <img id="img2" src={listing?.img2} alt="img2"></img>
              <img id="img3" src={listing?.img3} alt="img3"></img>
              <img id="img4" src={listing?.img4} alt="img4"></img>
              <img id="img5" src={listing?.img5} alt="img5"></img>
            </div>
          </div>
        </div>
        {sessionUser ? (
          <div>
            <EditListingFormModal />
            <button
              id="listing-details-btns"
              onClick={(e) => {
                dispatch(deleteListing(id));
                history.push("/listings");
              }}
            >
              Remove Listing
            </button>
            <button
              id="listing-details-btns"
              onClick={bookButtonClick}>Book this Cabin</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ListingDetailsPage;
