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
  const [img1, setImg1] = useState(listing.img1);
  const [img2, setImg2] = useState(listing.img2);
  const [img3, setImg3] = useState(listing.img3);
  const [img4, setImg4] = useState(listing.img4);
  const [img5, setImg5] = useState(listing.img5);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (name.length > 35) errors.push("Listing must be shorter than 35 characters.");
    if (state.length > 35) errors.push("State must be shorter than 35 characters.");
    if (country.length > 35) errors.push("Country must be shorter than 35 characters.");
    if (cost < 1) errors.push("Please provide the cost per day for your listing.");
    if (!img1.includes('http' || 'https' && '.jpeg' || '.jpg' || '.png')) errors.push("Please provide a valid image for listing image 1.");
    if (!img2.includes('http' || 'https' && '.jpeg' || '.jpg' || '.png')) errors.push("Please provide a valid image for listing image 2.");
    if (!img3.includes('http' || 'https' && '.jpeg' || '.jpg' || '.png')) errors.push("Please provide a valid image for listing image 3.");
    if (!img4.includes('http' || 'https' && '.jpeg' || '.jpg' || '.png')) errors.push("Please provide a valid image for listing image 4.");
    if (!img5.includes('http' || 'https' && '.jpeg' || '.jpg' || '.png')) errors.push("Please provide a valid image for listing image 5.");
    setErrors(errors)
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
      <h1 id="edit-listing-title">Update cabin</h1>
      <p id="edit-listing-subtitle">Fields with an asterisk (*)  are required.</p>
      <form
        id="form"
        onSubmit={(e) => handleSubmit(e)}>
          <label className="edit-listing-labels">Cabin name *</label>
        <input
          className="edit-listing-inputs"
          value={name}
          placeholder="Cabin name"
          onChange={(e) => setName(e.target.value)}
          required
          />
          <label className="edit-listing-labels">State *</label>
        <input
          className="edit-listing-inputs"
          value={state}
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Country *</label>
        <input
          className="edit-listing-inputs"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cost per night *</label>
        <input
          className="edit-listing-inputs"
          value={cost}
          placeholder="Cost per night "
          onChange={(e) => setCost(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cabin image 1 *</label>
        <input
          className="edit-listing-inputs"
          value={img1}
          placeholder="Image 1"
          alt="img1"
          onChange={(e) => setImg1(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cabin image 2 *</label>
        <input
          className="edit-listing-inputs"
          value={img2}
          placeholder="Image 2"
          alt="img2"
          onChange={(e) => setImg2(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cabin image 3 *</label>
        <input
          className="edit-listing-inputs"
          value={img3}
          placeholder="Image 3"
          alt="img3"
          onChange={(e) => setImg3(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cabin image 4 *</label>
        <input
          className="edit-listing-inputs"
          value={img4}
          placeholder="Image 4"
          alt="img4"
          onChange={(e) => setImg4(e.target.value)}
          required
          />
          <label className="edit-listing-labels">Cabin image 5 *</label>
        <input
          className="edit-listing-inputs"
          value={img5}
          placeholder="Image 5"
          alt="img5"
          onChange={(e) => setImg5(e.target.value)}
          required
          />
          <ul id="edit-listing-errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        <button className="update-cancel-btns" type="submit">Update cabin</button>
        <button className="update-cancel-btns" type="button" onClick={(e) => history.push("/listings")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditListingForm;
