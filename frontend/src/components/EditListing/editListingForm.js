import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateListing } from "../../store/listings";
import "./EditListing.css"

const EditListingForm = ({ setShowModal }) => {
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const listings = useSelector((state) => state.listings);
  const listing = listings[id];
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(listing.name);
  const [state, setState] = useState(listing.state);
  const [country, setCountry] = useState(listing.country);
  const [cost, setCost] = useState(listing.cost);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (name.length > 35) errors.push("Listing must be shorter than 35 characters.");
    if (state.length > 35) errors.push("State must be shorter than 35 characters.");
    if (country.length > 35) errors.push("Country must be shorter than 35 characters.");
    // if (!cost) errors.push("Please provide the cost per day for your listing.");
    // if (!img1) errors.push("Please upload an image for your listing.");
    // if (!img2) errors.push("Please upload an image for your listing.");
    // if (!img3) errors.push("Please upload an image for your listing.");
    // if (!img4) errors.push("Please upload an image for your listing.");
    // if (!img5) errors.push("Please upload an image for your listing.");

    setErrors(errors);
  }, [name, state, country, cost, img1, img2, img3, img4, img5]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const listing = {
      userId: sessionUser.id,
      name,
      state,
      country,
      cost,
      img1,
      img2,
      img3,
      img4,
      img5,
    };

    const updatedListing = dispatch(updateListing(id, listing));

    if (updatedListing) {
      setShowModal(false);
    }
  };

  return (
    <div id="edit-form-div">
      <h1 id="edit-listing-title">Update Listing</h1>
      <form
        id="form"
        onSubmit={(e) => handleSubmit(e)}>
        <input
          className="edit-listing-inputs"
          value={name}
          placeholder="Listing Name"
          onChange={(e) => setName(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={state}
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={cost}
          placeholder="Cost per night "
          onChange={(e) => setCost(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={img1}
          placeholder="Image 1"
          alt="img1"
          onChange={(e) => setImg1(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={img2}
          placeholder="Image 2"
          alt="img2"
          onChange={(e) => setImg2(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={img3}
          placeholder="Image 3"
          alt="img3"
          onChange={(e) => setImg3(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={img4}
          placeholder="Image 4"
          alt="img4"
          onChange={(e) => setImg4(e.target.value)}
          required
          />
        <input
          className="edit-listing-inputs"
          value={img5}
          placeholder="Image 5"
          alt="img5"
          onChange={(e) => setImg5(e.target.value)}
          required
          />
          <ul id="errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        <button className="update-cancel-btns" type="submit">Update Listing</button>
        <button className="update-cancel-btns" type="button" onClick={(e) => history.push("/listings")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditListingForm;
