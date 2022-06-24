import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import AllListings from "./components/AllListings";
import CreateListingForm from "./components/CreateListing";
import ListingDetailsPage from "./components/ListingDetails";
import AllBookings from "./components/AllBookings";
import CreateBookingPage from "./components/CreateBooking";
import Footer from "./components/Footer";

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
            <CreateBookingPage />
          </Route>
          <Route exact path="/bookings">
            <AllBookings />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
