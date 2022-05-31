import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing } from "../../store/listings";

const ListingDetailsPage = () => {
  const listings = useSelector((state) => state?.listings);
  console.log(listings)
  const listingdetails = Object?.values(listings);
  console.log(listingdetails)


  const { id } = useParams();
    // const listing = listings.find((listing) => id === listing.id);
//   const listing = listings.filter((listing) => {
//     return +id === listing.id;
//   });
//   console.log(listing);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getListing(id));

  //     if (listing) {
  //       return;
  //     }
  //   }, [dispatch, id]);

  //   return (
  //     <div>
  //       <img src={listing.img1}></img>

  //       <div>{listing.name}</div>
  //       <div>{listing.state}</div>
  //       <div>{listing.country}</div>
  //       <div>${listing.cost} / night</div>
  //     </div>
  //   );
};

export default ListingDetailsPage;
