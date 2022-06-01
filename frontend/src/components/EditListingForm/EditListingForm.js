// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const EditListingForm = () => {
//   const sessionUser = useSelector((state) => state.session.user);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [name, setName] = useState(listing.name);
//   const [state, setState] = useState(listing.state);
//   const [country, setCountry] = useState(listing.country);
//   const [cost, setCost] = useState(listing.cost);
//   const [img1, setImg1] = useState(listing.img1);
//   const [img2, setImg2] = useState(listing.img2);
//   const [img3, setImg3] = useState(listing.img3);
//   const [img4, setImg4] = useState(listing.img4);
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newListing = { // newListing === payload
//       ...listing,
//       userId: sessionUser.id,
//       name,
//       state,
//       country,
//       cost,
//       img1,
//       img2,
//       img3,
//       img4,
//     };

//     dispatch(addListing(newListing)).catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       });

//       if (errors.length > 0) {
//         history.push("/");
//       };
//   };

//   const handleCancelClick = (e) => {
//     e.preventDefault();
//     history.push(`/listings`);
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <ul>
//           {errors.map((error, idx) => (
//             <li key={idx}>{error}</li>
//           ))}
//         </ul>
//         <label>Listing Name:</label>
//         <input value={name} onChange={(e) => setName(e.target.value)}></input>
//         <label>State:</label>
//         <input value={state} onChange={(e) => setState(e.target.value)}></input>
//         <label>Country:</label>
//         <input
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         ></input>
//         <label>Cost Per Night:</label>
//         <input value={cost} onChange={(e) => setCost(e.target.value)}></input>
//         <label>Image 1:</label>
//         <input value={img1} onChange={(e) => setImg1(e.target.value)}></input>
//         <label>Image 2:</label>
//         <input value={img2} onChange={(e) => setImg2(e.target.value)}></input>
//         <label>Image 3:</label>
//         <input value={img3} onChange={(e) => setImg3(e.target.value)}></input>
//         <label>Image 4:</label>
//         <input value={img4} onChange={(e) => setImg4(e.target.value)}></input>
//         <button type="submit">Update Listing</button>
//         <button type="button" onClick={handleCancelClick}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditListingForm;
