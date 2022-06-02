import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import AllListings from "./components/AllListings";
import CreateListingForm from "./components/CreateListingForm";
import ListingDetailsPage from "./components/ListingDetailsPage";
import EditListingForm from "./components/EditListingModal";
import CreateBookingForm from "./components/CreateBookingForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/listings">
            <AllListings />
          </Route>
          <Route exact path="/listings/:id">
            <ListingDetailsPage />
          </Route>
          <Route exact path="/newlisting">
            <CreateListingForm />
          </Route>
          <Route exact path="/listings/:id/book">
            <CreateBookingForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
