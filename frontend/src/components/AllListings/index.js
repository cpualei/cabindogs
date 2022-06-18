import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getListings } from "../../store/listings";
import "./AllListings.css";

const AllListings = () => {
  const listings = useSelector((state) => {
    return Object.values(state.listings);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div>
      <h1 id="title">Find your favorite cabin.</h1>
      <p id="sub-title">Bring your furry friend too.</p>
      <div id="listings-div">
        <ul id="listings-ul">
          {listings.map((listing) => (
            <li id="li" key={listing.id}>
              <NavLink to={`/listings/${listing.id}`}>
                <img id="listing-imgs" src={listing.img1} alt="img"></img>
              </NavLink>
              <div className="listing-description" id="listing-name">
                {listing.name}
              </div>
              <div className="listing-description">
                {listing.state}, {listing.country}
              </div>
              <div className="listing-description" id="listing-cost">
                From ${listing.cost} / night
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllListings;
