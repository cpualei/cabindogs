import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getListings } from "../../store/listings";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);
  const listingsArray = Object.values(listings);
  const listing = listingsArray[id];

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div>
      <img src={listing?.img1}></img>

      <div>{listing?.name}</div>
      <div>{listing?.state}</div>
      <div>{listing?.country}</div>
      <div>${listing?.cost} / night</div>
    </div>
  );
};

export default ListingDetailsPage;
