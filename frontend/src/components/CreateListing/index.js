import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addListing } from "../../store/listings";
import "./CreateListing.css";

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

    if (!name) errors.push("Please enter a cabin name.");
    if (!state)
      errors.push("Please select the state where cabin is located.");
    if (!country)
      errors.push("Please select the country where cabin is located.");
    if (!cost) errors.push("Please provide the cost per day for your cabin.");
    if (!img1) errors.push("Please upload an image for your cabin.");
    if (!img2) errors.push("Please upload an image for your cabin.");
    if (!img3) errors.push("Please upload an image for your cabin.");
    if (!img4) errors.push("Please upload an image for your cabin.");
    if (!img5) errors.push("Please upload an image for your cabin.");

    setErrors(errors);
  }, [name, state, country, cost, img1, img2, img3, img4, img5]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    const newListing = dispatch(addListing(listing));

    if (errors.length === 0 && newListing) {
      history.push("/listings");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://cdn.vox-cdn.com/uploads/chorus_asset/file/23453275/4026_McKeown_Lake_Rd_NW_044.jpg)`,
          // height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="create-listing-outer-container">
          <div id="create-listing-container">
            <div id="create-listing-title-div">
              <h1 id="create-listing-title">
                Earn up to $7,000/month hosting in California.
              </h1>
              <p id="create-listing-subtitle">
                Sign up for free, host when you want, and get paid every week.
              </p>
            </div>
            <div id="create-listing-form-div">
              <form id="create-listing-form" onSubmit={(e) => handleSubmit(e)}>
                <div id="create-listing-inputs-div">
                  <input
                    className="create-listing-inputs"
                    placeholder="Cabin name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Cost per night"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Image 1"
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Image 2"
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Image 3"
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Image 4"
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
                    required
                  />
                  <input
                    className="create-listing-inputs"
                    placeholder="Image 5"
                    value={img5}
                    onChange={(e) => setImg5(e.target.value)}
                    required
                  />
                </div>
                <ul id="errors">
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
                <p id="create-listing-form-bottom-text">
                  By clicking 'Submit your cabin', you agree to absolutely
                  nothing and your cabin will be submitted.
                </p>
                <button className="submit-cancel-btns" type="submit">
                  Submit your cabin
                </button>
                <button
                  className="submit-cancel-btns"
                  type="button"
                  onClick={(e) => history.push("/")}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateListingForm;
