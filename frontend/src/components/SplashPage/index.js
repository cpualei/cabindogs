import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./SplashPage.css";


const SplashPage = () => {
  return (
    <div>
      <div id="h1-div">
        <h1 id="h1">Find yourself outside.</h1>
      </div>
      <div id="h3-div">
        <h3 id="h3">
          Discover cabins for rent all over<br></br>
          the world. For you and your furry friend.
        </h3>
      </div>
      <div id="imgs-div">
          <SearchBar />
        <div id="man-dog-img-div">
          <img
            id="cabin-img"
            src="https://shorttermrentalz.com/wp-content/uploads/2020/05/Unique-Airbnb-Fund.jpg"
          ></img>
        </div>
        <div id="smaller-imgs-div">
          <div id="cabin-img-div">
            <img
              className="cabin-img2"
              src="https://www.beaversbendcreativeescape.com/wp-content/uploads/2020/02/Campfire-at-Pet-Friendly-Cabins-in-Oklahoma.jpg"
            ></img>
            <div id="img-text-container">
              <div className="img-text-outter-div">FOURTH OF JULY</div>
                <div className="img-text-inner-div">Book your July 4th weekend trip<br></br>
                now to get the best spot!</div>
            </div>
            <NavLink to="/listings">
              <button id="cabin-btn">View cabins</button>
            </NavLink>
            <div id="solid-color-div"></div>
          </div>
          <div id="cabin-img-div2">
            <img
              className="cabin-img3"
              src="https://cdn.vox-cdn.com/thumbor/0eoiN9XqqsSVbiCNo_h0hbUP_yI=/0x0:1023x682/1200x800/filters:focal(431x260:593x422)/cdn.vox-cdn.com/uploads/chorus_image/image/64006695/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.0.jpg"
            ></img>
            <div className="img-text-outter-div-2">HOSTING MADE EASY</div>
              <div className="img-text-inner-div-2">Have a cabin and want to host?<br></br>
                You're just a click away.</div>
            <NavLink to="/newlisting">
              <button id="cabin-btn-2">Start hosting</button>
            </NavLink>
            <div id="solid-color-div2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
