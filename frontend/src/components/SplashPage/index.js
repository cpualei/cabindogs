import { NavLink } from "react-router-dom";
import "./SplashPage.css";
// import "./images/splashimg.png"

const SplashPage = () => {
  return (
    <div>
      <div className="h1-div">
        <h1 id="h1">Find yourself outside.</h1>
      </div>
      <div className="h3-div">
        <h3 id="h3">
          Discover and book tent camping, RV <br></br>
          parks, cabins, treehouses, and glamping.
        </h3>
      </div>
      <div className="boy-girl-dog-img-div">
        <img
          id="boy-girl-dog-img"
          src="https://www.purina.co.uk/sites/default/files/2020-12/Why%20are%20dogs%20so%20loyalTEASER.jpg"
        ></img>
      </div>
      <div className="snowy-cabin-img-div">
        <NavLink to="/listings">
        <img
          id="snowy-cabin-img"
          src="https://newenglandwithlove.com/wp-content/uploads/2020/08/f69c2d9b.f10.webp"
        ></img>
        </NavLink>
      </div>
    </div>
  );
};

export default SplashPage;
