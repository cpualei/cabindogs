import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteListing, getListings } from "../../store/listings";
import EditListingForm from "../EditListingModal";
import EditListingFormModal from "../EditListingModal/editListingModal";

import "./ListingDetailsPage.css"

const ListingDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);
  const listing = listings[id];

  useEffect(() => {
    dispatch(getListings(id));
  }, [dispatch, id]);

  return (
    <div>
      <EditListingFormModal />
      <button onClick={(e) => dispatch(deleteListing(id))}>Delete Listing</button>
      <div className="dscrpt-div">
        <div className="state-country-div">{listing?.state}, {listing?.country}</div>
        <div>{listing?.name}</div>
      </div>
      <div className="img-container-div">
        <div className="imgs-container">
          <div className="img1-div">
            <img id="img1" src={listing?.img1} alt="img1"></img>
          <div className="other-imgs-div">
            <img id="img2" src={listing?.img2} alt="img2"></img>
            <img id="img3" src={listing?.img3} alt="img3"></img>
            <img id="img4" src={listing?.img4} alt="img4"></img>
            <img id="img5" src={listing?.img5} alt="img5"></img>
          </div>
          </div>
        </div>
      </div>
        <div>From ${listing?.cost} / night</div>
    </div>

  );
};

export default ListingDetailsPage;
