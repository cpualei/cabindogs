import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getListings } from "../../store/listings";

const ListingDetailsPage = () => {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);
  console.log(listings);
  const listingsArray = Object.values(listings);
  const listing = listingsArray[id];
  console.log(listing)

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div>
      <img src={listing?.img1}></img>
      <img src={listing?.img2}></img>
      <img src={listing?.img3}></img>
      <img src={listing?.img4}></img>

      <div>{listing?.name}</div>
      <div>{listing?.state}</div>
      <div>{listing?.country}</div>
      <div>${listing?.cost} / night</div>
    </div>
  );
};

export default ListingDetailsPage;
