import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addListing } from "../../store/listings";

const CreateListingForm = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [cost, setCost] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!name) errors.push("Please enter a listing a name.");
    if (!state)
      errors.push("Please select the state where listing is located.");
    if (!country)
      errors.push("Please select the country where listing is located.");
    if (!cost) errors.push("Please provide the cost per day for your listing.");
    if (!img1) errors.push("Please upload an image for your listing.");
    if (!img2) errors.push("Please upload an image for your listing.");
    if (!img3) errors.push("Please upload an image for your listing.");
    if (!img4) errors.push("Please upload an image for your listing.");
    if (!img5) errors.push("Please upload an image for your listing.");

    setErrors(errors);
  }, [name, state, country, cost, img1, img2, img3, img4, img5]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const listing = {
      // newListing === payload
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

    const newListing = dispatch(addListing(listing));

    if (errors.length === 0 && newListing) {
      history.push("/listings");
    }
  };
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Listing Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>State:</label>
        <input value={state} onChange={(e) => setState(e.target.value)}></input>
        <label>Country:</label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></input>
        <label>Cost Per Night:</label>
        <input value={cost} onChange={(e) => setCost(e.target.value)} />
        <label>Image 1:</label>
        <input value={img1} onChange={(e) => setImg1(e.target.value)} />
        <label>Image 2:</label>
        <input value={img2} onChange={(e) => setImg2(e.target.value)} />
        <label>Image 3:</label>
        <input value={img3} onChange={(e) => setImg3(e.target.value)} />
        <label>Image 4:</label>
        <input value={img4} onChange={(e) => setImg4(e.target.value)} />
        <label>Image 5:</label>
        <input value={img5} onChange={(e) => setImg5(e.target.value)} />
        <button type="submit">Submit Listing</button>
        <button type="button" onClick={(e) => history.push("/listings")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateListingForm;
