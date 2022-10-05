import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteListing, getListings } from "../../store/listings";
import EditListingFormModal from "../EditListing";
import Reviews from "../Reviews";
import "./ListingDetailsPage.css";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const users = useSelector((state) => Object.values(state.users));
  const listings = useSelector((state) => state.listings);

  const listing = listings[id];
  const getOwner = users.filter((user) => user?.id === listing?.userId)[0];
  const cabinOwner = getOwner?.username;

  useEffect(() => {
    dispatch(getListings(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookButtonClick = (e) => {
    history.push(`/listings/${id}/book`);
  };

  return (
    <div>
      <h1 id="listing-details-title">{listing?.name}</h1>
      <div id="listing-dscrpt-container">
        <div id="listing-dscrpt-div">
          <div id="listing-dscrpt-name">{listing?.name}</div>
          <div id="listing-dscrpt-location">
            <i>{listing?.state}, {listing?.country}</i>
          </div>
          <div id="listing-dscrpt-cost">From ${listing?.cost} / night</div>
          <br/>
        </div>
          <div id="cabin-host"><b>Host</b>:&nbsp; {cabinOwner}</div>
          <br/>
      </div>
      <div id="img-container-div">
        <img id="img1" src={listing?.img1} alt="img1"></img>
        <div id="other-imgs-div">
          <img id="img2" src={listing?.img2} alt="img2"></img>
          <img id="img3" src={listing?.img3} alt="img3"></img>
          <img id="img4" src={listing?.img4} alt="img4"></img>
          <img id="img5" src={listing?.img5} alt="img5"></img>
        </div>
      </div>

        <div id="listing-btns-div">
      {sessionUser && sessionUser?.id === listing?.userId ? (
        <>
          <EditListingFormModal />
          <button
            className="listing-details-btns"
            onClick={(e) => {
              dispatch(deleteListing(id));
              history.push("/listings");
            }}
          >
            Remove cabin
          </button>
          </>
            ) : (
              <></>
            )}
          <button className="listing-details-btns" onClick={bookButtonClick}>
            Book this cabin
          </button>
        </div>
      <Reviews listing={listing} />
    </div>
  );
};

export default ListingDetailsPage;
