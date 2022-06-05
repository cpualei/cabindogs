import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getListings } from "../../store/listings";
import "./AllListings.css"
// import "../images/map"

const AllListings = () => {
  const listings = useSelector((state) => {
    return Object.values(state.listings);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div className="listings-div">
      <ul className="listings-ul">
        {listings.map((listing) => (
          <li id="li" key={listing.id}>
            <NavLink to={`/listings/${listing.id}`}>
            <img id="listing-imgs" src={listing.img1} alt="img"></img>
            </NavLink>
            <div className="listing-description" id="listing-name">{listing.name}</div>
            <div className="listing-description">{listing.state}, {listing.country}</div>
            <div className="listing-description" id="listing-cost">From ${listing.cost} / night</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllListings;
