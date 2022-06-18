import { NavLink } from "react-router-dom";
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
        <div id="boy-girl-dog-img-div">
          <img
            id="boy-girl-dog-img"
            src="https://www.purina.co.uk/sites/default/files/2020-12/Why%20are%20dogs%20so%20loyalTEASER.jpg"
          ></img>
        </div>
        <div id="smaller-imgs-div">
          <div id="cabin-img-div">
            <img
              className="cabin-img"
              src="https://newenglandwithlove.com/wp-content/uploads/2020/08/f69c2d9b.f10.webp"
            ></img>
            <div id="img-text-div">CABINDOGS</div>
            <NavLink to="/listings">
              <button id="cabin-btn">View Cabins</button>
            </NavLink>
            <div id="solid-color-div"></div>
          </div>
          <div id="cabin-img-div2">
            <img
              className="cabin-img2"
              src="https://media.istockphoto.com/photos/emerald-lake-on-a-cloudy-day-with-its-thawed-lake-summer-and-fun-picture-id1141078602?b=1&k=20&m=1141078602&s=170667a&w=0&h=7zTs2EsAEwGwBXlzOJIFw0xDmCssiHGsM5d57gcGTmY="
            ></img>
            <div id="img-text-div">CABINDOGS</div>
            <NavLink to="/bookings">
              <button id="cabin-btn-2">View Bookings</button>
            </NavLink>
            <div id="solid-color-div2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
