import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import { getListings } from "../../store/listings";
import ListingDetailsPage from "../ListingDetailsPage";

const AllListings = () => {
  const listings = useSelector((state) => {
    return Object.values(state.listings);
  });
  console.log(listings)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {listings.map((listing) => (
          <i key={listing.id}>
            <img src={listing.img1}></img>
            <div>{listing.name}</div>
            <div>{listing.state}</div>
            <div>{listing.country}</div>
            <div>${listing.cost} / night</div>
          </i>
        ))}
      </ul>
    </div>
  );
};

export default AllListings;
